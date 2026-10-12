import { Link } from "@tanstack/react-router";
import { pages } from "@/lib/gttContent";
import { SITE_URL } from "@/lib/links";

const URL_PATTERN = /(https?:\/\/[^\s)<>"']+)/g;
const LINK_CLASS =
  "text-foreground underline underline-offset-2 hover:text-primary";

// The slug of a URL that points at one of this site's own content pages.
export function internalSlug(url: string) {
  if (!url.startsWith(`${SITE_URL}/`)) return undefined;
  const slug = url.slice(SITE_URL.length + 1).replace(/\/$/, "");
  return pages.some((page) => page.slug === slug) ? slug : undefined;
}

export function linkify(text: string) {
  const parts = text.split(URL_PATTERN);
  if (parts.length === 1) return text;
  // split() with a single capturing group interleaves the captured matches
  // at odd indices — no need for a second, stateful regex test.
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const slug = internalSlug(part);
    // Links to this site go through the router so the chosen language survives.
    return slug ? (
      <Link key={i} to="/$slug/" params={{ slug }} className={LINK_CLASS}>
        {part}
      </Link>
    ) : (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        {part}
      </a>
    );
  });
}
