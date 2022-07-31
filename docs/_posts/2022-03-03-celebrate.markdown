---
title:  "Celebrate!"
date:   2022-03-03 08:00:00 +0000
header:
    teaser: "/assets/images/2022-03-03-celebrate/celebrate-logo.png"
tags: programming web mental_health
excerpt: "For when you're having a bad day."
---
<style>
@keyframes flash {
    from { 
        color: inherit; 
        text-shadow: none;
    }
    to { 
        color: hotpink;
        text-shadow: 0px 0px 20px hotpink;
    }
}
</style>

[Website](https://f11xter.github.io/celebrate) |
[Source Code](https://github.com/f11xter/celebrate)

Every now and again, we all have days that could have gone better. I recently experienced one of these days. I was just getting ready for bed when an unwelcome thought popped into my head: `"I haven't done anything today"`. 

This was to an extent true - in fact I've compiled a list of everything I didn't do that day here:
1. attend my lectures
2. do any work
3. exercise
4. walk further than the kitchen
5. ...

The list continues for miles. Suddenly though, I had a brilliant thought: I feel rubbish listing all the things I didn't do, so what about listing those I did do? Crazy idea right? So that's what I did. Opening up vim (subtle flex), I promptly noted down all my achievements that day, no matter how insignificant. The list looked something like:
1. woke up at 07:30
2. ate breakfast
3. finally watched The Grand Budapest Hotel (great film btw)
4. made a nice cheese sandwich
5. ...

This process forced me to consider the day from a new, positive perspective, leaving me feeling much better. I'd like to say that what happened next was I went to bed nice and early and had a lovely sleep. Unfortunately, I'd just had an idea:

## Node.js Console App
<figure>
    <video width="100%" height="auto" autoplay muted>
        <source src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-03-03-celebrate/celebrate-console.webm" type="video/webm">
        <source src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-03-03-celebrate/celebrate-console.mp4" type="video/mp4">
        Video not available.
    </video>
    <figcaption>Console app after submission</figcaption>
</figure> 

The first iteration of *Celebrate!* was a console app inspired by [Fireship](https://www.youtube.com/watch?v=_oHByo8tiEY). This was my first attempt at a Node.js app and I found myself impressed by the ease of development when aided by npm. I had a working app within a couple hours of starting my Node.js journey (no joke - the first hour was spent on deciding the colour and typeface of the title).

The following evening one of my friends was telling us about her awful day. Soon after she became *Celebrate!*'s very first user. When she enjoyed it, I decided to make it accessible to her (as a non-technical user, a Node.js app wasn't going to cut it). Thus was born idea #2:

## Website
<figure>
    <video width="100%" height="auto" autoplay muted loop>
        <source src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-03-03-celebrate/celebrate-flash.webm" type="video/webm">
        <source src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-03-03-celebrate/celebrate-flash.mp4" type="video/mp4">
        Video not available.
    </video>
    <figcaption>Website after submission</figcaption>
</figure> 
Shockingly, after programming for so many years, this was the first website I've ever coded (this blog uses Jekyll for example). I decided to start from scratch, rather than adjusting all the dependencies and learning how to use Express.js. Ignoring every accessibility guideline I could, I designed the site to be reminiscent of the original console app, with extra conveniences: 
- a dedicated submit button
- the congratulatory text includes your name
- and it <span style="animation: flash 0.75s alternate infinite;">glows!</span>

## Conclusions
This project is full of firsts - first Node.js app, first website, and first product that someone else has wanted to use. Just knowing that my idea has had a real-world positive effect makes me immensely proud.

So if you're ever feeling down on yourself, like you haven't done enough, or you just need a compliment, consider heading over to [f11xter.github.io/celebrate](https://f11xter.github.io/celebrate). If you like it, message me or leave a comment in the project's discussion - it'll make my day!

**Disclaimer**: This is not advice. If you're struggling, seek help from a professional, not a computer science student.
{: .notice--warning}

