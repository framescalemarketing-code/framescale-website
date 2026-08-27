export type Testimonial = {
  text: string;
  attribution: string;
  /** Role and company, rendered under the name. */
  role?: string;
};

/**
 * Deliberately plain semantic markup, with no Review or AggregateRating JSON-LD
 * around it. Google stopped showing rich results for self-serving reviews on
 * Organization and LocalBusiness in 2019 and treats reviews a business collects
 * about itself as ineligible, so marking this up earns no stars and carries a
 * real structured-data penalty risk. A blockquote is read perfectly well by
 * search crawlers and by answer engines without any of that.
 */
export function Quote({ text, attribution, role }: Testimonial) {
  return (
    <figure className="soft-card flex flex-col gap-4 p-6 md:p-8">
      <blockquote className="measure font-headline text-lg leading-relaxed text-(--brand-deep) italic">
        {text}
      </blockquote>
      <figcaption className="font-ui text-sm text-(--text-muted)">
        <cite className="font-medium text-(--brand-deep) not-italic">{attribution}</cite>
        {role ? <span className="mt-1 block">{role}</span> : null}
      </figcaption>
    </figure>
  );
}
