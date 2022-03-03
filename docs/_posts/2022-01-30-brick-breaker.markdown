---
title:  "Brick Breaker Python Game"
date:   2022-01-30 22:00:00 +0000
header:
    teaser: "/assets/images/2022-01-30-brick-breaker/brick_breaker.png"
tags: programming games university
excerpt: "2 sentence horror: I had to make a game. It had to use Tkinter."
---

As part of studying computer science at university, we were tasked with creating a game using Python. There were various constraints such as: it had to involve collision, images, a scoreboard etc. However, none were quite so ~~acutely frustrating~~ limiting as the fact that sensible library choices like Pygame were banned, and instead we were forced to use Tkinter.

Now I have nothing against Tkinter in principle, but creating a game with it was painful at best. Trying to shoe-horn its interface into even the most basic of games (it was designed for creating GUIs), led to the classic uni all-nighter on the Friday it was due (though I don't claim full responsibility for leaving it to the last minute - I was playing in the pit band for the musical that week, which sucked up at least 4 hours of every day).

At the end of it though, I've ended up with a game I'm proud of: [Brick Breaker Star Collector](https://github.com/f11xter/brick_breaker). A simple spin on the classic brick breaker game I used to play on my Nokia flip back in the good old days of 2014, the objective of each level is to negotiate your ball around the bricks to collect the 3 gold stars in the shortest time possible.

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-01-30-brick-breaker/brick_breaker.png" alt="Level 1 gameplay">
  <figcaption>Level 1 gameplay</figcaption>
</figure> 

By request of the markscheme, it includes multiple extra features:
- re-mappable keybinds
- a "boss key" that displays an image of work to cover the game if your boss walks in on you playing
- pause/play functionality
- save/load functionality
- a leaderboard of the 10 quickest times on each level
- cheat codes

**Spoilers ahead**: If you'd prefer to figure out the cheat codes yourself, skip ahead to [Conclusions](#conclusions) now.
{: .notice--danger}

## Cheat codes
There are 4 cheat codes:

### Lengthen
Pressing `ctrl + l` will lengthen the paddle so that hitting the ball is easier.

### Strength
Pressing `ctrl + s` will make the ball strong, instantly breaking bricks on impact.

### Phantom
Pressing `ctrl + p` will make the ball ignore collisions, phasing through bricks and the paddle.

### Invicible
Pressing `ctrl + i` will make the ball invincible, allowing it to bounce off the bottom without losing any lives.

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/2022-01-30-brick-breaker/brick_breaker_cheats.png" alt="Cheats">
  <figcaption>Lengthen, Phantom, Invicible cheats active</figcaption>
</figure> 

## Conclusions
I really enjoyed this challenge, especially (begrudgingly) due to the added difficulty of having to use Tkinter. I've come out the other side with a game, some upsettingly atrocious spaghetti code, and a mark that I'm definitely happy with. 

Give the game a try [here](https://github.com/f11xter/brick_breaker), and use the [discussion forum](https://github.com/f11xter/f11xter.github.io/discussions) to let me know your thoughts and times! 