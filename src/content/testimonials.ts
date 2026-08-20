export type Testimonial = {
  quote: string;
  name: string;
  /** Role and company, e.g. "Owner, Harbor Optometry". */
  attribution: string;
  /** Optional: what changed. Keep it factual, never a projected return. */
  result?: string;
};

/**
 * Empty on purpose. The section that renders these returns null while the array
 * is empty, so nothing looks broken or half-built on the live site.
 *
 * TODO(owner): social proof is the largest remaining conversion gap. One or two
 * real quotes will do more here than any other change. LinkedIn recommendations
 * count, and so do anonymized results ("a shop owner in North County")
 * when a client will not go on the record by name.
 */
export const testimonials: Testimonial[] = [];

export const testimonialSection = {
  eyebrow: "In Their Words",
  title: "What owners say",
} as const;
