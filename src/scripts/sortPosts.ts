import type { CollectionEntry } from "astro:content";

export const sortPosts = (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) => b.data.published.valueOf() - a.data.published.valueOf();