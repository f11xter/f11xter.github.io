---
title: "Recursive Components for Mundane Tasks"
excerpt: "in which I create solutions to problems of my own making"
published: 2023-04-11
contents: true
---

## background

This site is built using [Astro](https://astro.build): a web framework that excels at static site generation. All the blogs and projects I upload are written in [Markdown](https://www.markdownguide.org/getting-started), so they look something like this:

```md
---
title: "Recursive Components for Mundane Tasks"
excerpt: "in which I create solutions to problems of my own making"
published: 2023-04-11
contents: true
---

## background
This site is built using [Astro](https://astro.build): a web framework that excels at static site generation. All the blogs and projects I upload are written in [Markdown](https://www.markdownguide.org/getting-started), so they look something like this:
```

Woah there! We're not quite ready for that much recursion yet!

Markdown is great for writing content quickly and easily and Astro now has type-safe support for it. Displaying Markdown in Astro is as simple as importing the content into your component, calling a render function, and feeding it into your page. This is a simplified version of the code displaying this very page (find the source on [GitHub](https://github.com/f11xter/f11xter.github.io/tree/main/src/pages/blog/[...slug].astro))

```astro
---
const { post } = Astro.props;
const { Content, headings } = await post.render();
---

<article>
  <Content />
</article>
```

It's almost too easy!

## motivation

You may have noticed the render function returns two objects: the page content, and `headings` - an array of all the headings in your document, represented by the `MarkdownHeading` interface:

```ts
interface MarkdownHeading {
    depth: number;
    slug: string;
    text: string;
}
```

Here, `depth` represents the heading depth from 1 to 6, equivalent to the HTML elements `<h1>` to `<h6>`. The `slug` is the `id` field of that element, and the `text` is the heading itself.

For example, if my markdown included `## heading`, in HTML that would be `<h2 id="heading">heading</h2>`, while the entry in the `headings` array would be `{depth: 2, slug: "heading", text: "heading"}`.

Stumbling upon this array came as a lovely surprise, since it makes automatically generating a table of contents a breeze. With great ease comes great responsibility to actually do the thing, so I began my journey into the wilds of Astro, armed with a noble quest: to build the perfect table of contents.

## the solution

```ts
import { read } from "to-vfile";
import { remark } from "remark";
import remarkToc from "remark-toc";

const file = await remark()
  .use(remarkToc)
  .process(await read("your-file.md"));
```

Well then.

That was easy.

It turns out Astro supports [remark](https://github.com/remarkjs/remark) plugins - plugins specifically designed for manipulating Markdown. One such plugin is [remark-toc](https://github.com/remarkjs/remark-toc) that, you guessed it, generates a table of contents. More specifically, it creates a nested list of links (written in Markdown) and prepends it to your document:

```md
# Alpha
## Table of contents
* [Bravo](#bravo)
  * [Charlie](#charlie)
* [Delta](#delta)
## Bravo
### Charlie
## Delta
```

That's a great solution that works out of the box, but there's one catch: the table of contents will be styled just like every other list on the site. That's not issue for most people, but I don't want the leading bullet points. Why? Because. That's why.

Since the list is generated after writing, I can't add inline styles and, due to Astro's style scoping, styling it any other way would be brittle at best. I only had one option left: create my own component.

## my definitely-much-better solution

This is actually my third attempt at a definitely-much-better solution, the first two requiring complicated array mapping and lots of nesting. The final product takes advantage of recursion to simplify the logic greatly.

A quick note on performance: I haven't properly analysed the algorithm but my guess is it exhibits between linear and quadratic time complexity. In practice, it doesn't matter for two reasons:

1. the input size (number of headings) will always be small
2. I'm using static site generation, so the code runs only at build time

Let's plan our attack. Given a `MardownHeading` array, I want to create a nested unordered list view of links to those headings. The final HTML will look something like:

```html
<ul>
  <li>
    <a href="#bravo">Bravo</a>

    <ul>
      <li>
        <a href="#charlie">Charlie</a>
      </li>
    </ul>
  </li>

  <li>
    <a href="#delta">Delta</a>
  </li>
</ul>
```

That's quite enough planning. Let's write some code! First I read in the `MarkdownHeading` array, create the list element, then map the array to list items. These list items contain anchor tags that link to the heading on the page.

```astro
---
const { headings } = Astro.props;
---
<ul>
{
  headings.map((h) => (
    <li>
      <a href={"#" + h.slug}>{h.text}</a>
    </li>
  ))
}
</ul>
```

This is a good start, laying out all headings at the same level, but we still need to nest them correctly.

The crucial insight here is that a nested set of headings is equivalent to a full table of contents. Therefore, if we use the above code to display only the lowest level headings, we can then recurse on those that remain.

To do that, we'll add a `children` property to those base headings. We'll use a depth of 2 as the base case since depth 1 headings are usually the title of the document and not included.

```astro
---
const { headings } Astro.props;
const nested = [];

for (const h of headings) {
  // if base case
  // add children property
  // and push to nested
  if (h.depth === 2) {
    h.children = [];
    nested.push(h);
  }

  // otherwise reduce depth by 1 for recursive call
  // and push to most recent base-level heading's children array
  else {
    h.depth--;
    nested[nested.length - 1].children.push(h);
  }
}
---
{
  nested.length > 0 && (
    <ul>
      {nested.map((h) => (
        <li>
          <a href={"#" + h.slug}>{h.text}</a>

          {/* assuming the component is called Contents */}
          <Contents headings={h.children} />
        </li>
      ))}
    </ul>
  )
}
```

### final code

There you have it. A simple-ish custom table of contents with the ability to apply arbitrary styles. All the code so far has been simplified or abstracted in some way, so you can view the full source below or on [GitHub](https://github.com/f11xter/f11xter.github.io/tree/main/src/components/Contents.astro).

```astro
---
import type { MarkdownHeading } from "astro";
import Contents from "@components/Contents.astro";

interface Props {
  headings: MarkdownHeading[];
}

// flat array of headings with depth values
const { headings } = Astro.props;

// enables nesting
interface Heading {
  depth: number;
  slug: string;
  text: string;
  children: MarkdownHeading[];
}

// list of headings and their children
const nested: Heading[] = [];

// assumes correct heading use
// resilient to misuse
for (const h of headings) {
  // if first heading
  // or base-level heading
  // push to list of headings
  if (nested.length === 0 || h.depth === 2) {
    nested.push({
      depth: h.depth,
      slug: h.slug,
      text: h.text,
      children: [],
    });
  }

  // otherwise reduce depth by 1 for recursive call
  // and push to most recent base-level heading's child array
  else {
    h.depth--;
    nested[nested.length - 1].children.push(h);
  }
}
---

{
  nested.length > 0 && (
    <ul role="list">
      {nested.map((h) => (
        <li>
          <a href={"#" + h.slug}>{h.text}</a>

          <Contents headings={h.children} />
        </li>
      ))}
    </ul>
  )
}

<style>
  ul {
    list-style-type: none;
    margin-block: 0;
    padding-inline-start: 1em;
  }

  li {
    margin-block-start: 0.5em;
  }
</style>
```
