import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { sortPosts } from "@scripts/sortPosts";

const parser = new MarkdownIt();

export async function get(context) {
  const blog = await getCollection("blog");

  blog.sort(sortPosts);

  return rss({
    title: "Felix Waller",
    description: "programmer & musician",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.excerpt,
      content: sanitizeHtml(parser.render(post.body)),
      link: `/blog/${post.slug}/`,
    })),
    stylesheet: "/rss.xsl",
  });
}