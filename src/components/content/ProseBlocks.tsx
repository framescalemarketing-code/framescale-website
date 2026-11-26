import type { ContentBlock, RichText } from "@/content/blocks";

/**
 * Renders a `RichText` value. A bare string is the common case; the segment
 * array handles a link or an emphasis sitting mid-sentence.
 */
function Inline({ value }: { value: RichText }) {
  if (typeof value === "string") {
    return <>{value}</>;
  }

  return (
    <>
      {value.map((segment, index) => {
        if ("href" in segment) {
          return (
            <a key={index} href={segment.href} className="link-quiet">
              {segment.text}
            </a>
          );
        }
        if ("emphasis" in segment) {
          return <em key={index}>{segment.text}</em>;
        }
        return <span key={index}>{segment.text}</span>;
      })}
    </>
  );
}

/**
 * The one renderer for long-form content. The switch is exhaustive, so adding a
 * block kind without handling it here fails the build rather than rendering
 * nothing. Styling uses the existing editorial utilities only, which keeps the
 * design system and the brand guard untouched.
 */
export function ProseBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "paragraph":
            return (
              <p key={index} className="measure font-body text-(--text-muted)">
                <Inline value={block.text} />
              </p>
            );
          case "heading":
            return (
              <h2 key={index} className="display-sm mt-6 text-(--brand-deep)">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="measure flex list-disc flex-col gap-2 pl-5">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-body text-(--text-muted)">
                    <Inline value={item} />
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside key={index} className="hairline-box flex flex-col gap-2 p-5">
                <p className="font-ui text-sm font-semibold text-(--brand-deep)">{block.title}</p>
                <p className="font-body text-(--text-muted)">
                  <Inline value={block.text} />
                </p>
              </aside>
            );
          default: {
            const exhaustive: never = block;
            void exhaustive;
            return null;
          }
        }
      })}
    </div>
  );
}
