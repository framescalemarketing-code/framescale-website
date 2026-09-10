// card revision: 1
// Bump the number above whenever the card content, the photo, or the renderer
// changes. Next derives the ?hash in the og:image URL from this file alone, so
// without a bump LinkedIn, Facebook, and iMessage keep serving the old card.
import { shareCards } from "@/content/share-cards";
import { renderShareCard, SHARE_CARD_CONTENT_TYPE, SHARE_CARD_SIZE } from "@/lib/og/share-card";

export const alt = shareCards.optical.alt;
export const size = SHARE_CARD_SIZE;
export const contentType = SHARE_CARD_CONTENT_TYPE;

export default function Image() {
  return renderShareCard(shareCards.optical);
}
