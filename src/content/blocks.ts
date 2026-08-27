/**
 * Long-form content is typed data, not MDX. Case studies and the vertical page
 * need real prose, but AGENTS.md keeps all user-facing copy in `src/content` as
 * typed data. A markdown pipeline would buy writing comfort at the cost of a
 * dependency chain and untyped frontmatter, which is a bad trade at the dozen
 * or so pieces this site will realistically hold. These blocks are the middle
 * ground: authored in TypeScript, checked at compile time, and rendered by one
 * exhaustive switch in `ProseBlocks`.
 */

/** A run of text, optionally carrying a link or an emphasis. */
export type InlineSegment =
  | { text: string }
  | { text: string; href: string }
  | { text: string; emphasis: true };

/**
 * A plain string covers most sentences. The segment array exists for the cases
 * where a link or an emphasis has to sit mid-sentence, which is the one thing
 * markdown would otherwise be needed for.
 */
export type RichText = string | InlineSegment[];

/**
 * Metrics are deliberately not a block. They are a first-class field on a case
 * study so the type system can require a disclaimer beside them, which prose
 * blocks cannot enforce.
 */
export type ContentBlock =
  | { kind: "paragraph"; text: RichText }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: RichText[] }
  | { kind: "callout"; title: string; text: RichText };
