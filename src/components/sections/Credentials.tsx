import { Section, SectionHeading } from "@/components/ui/Section";
import { credentialDetails, credentialsIntro, workingWithMe } from "@/content/about";

/**
 * The trust signals on /about. Paper tone on purpose: the closing CtaBand that
 * follows is deep, and two deep bands in a row read as one slab.
 */
export function Credentials() {
  return (
    <Section size="tall">
      {/* The wide column is on the left because that is where the credential list
          lives. Narrowing it wraps "University Of California, Riverside" onto
          three lines. */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading title={credentialsIntro.title} />

          <dl className="mt-9 flex flex-col">
            {credentialDetails.map((item, index) => (
              <div
                key={item.value}
                className={`flex flex-col gap-1.5 py-6 md:flex-row md:gap-10 ${index === 0 ? "" : "rule"}`}
              >
                <dt className="font-ui text-sm font-semibold text-(--text-muted) md:w-40 md:shrink-0 md:pt-1">
                  {item.label}
                </dt>
                <dd className="flex flex-col gap-1">
                  <span className="font-headline text-xl text-(--brand-deep)">{item.value}</span>
                  <span className="text-sm text-(--text-muted)">{item.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start lg:border-l lg:border-(--border) lg:pl-12">
          <h3 className="display-md text-(--brand-deep)">{workingWithMe.title}</h3>
          <ul className="flex flex-col gap-4">
            {workingWithMe.points.map((point) => (
              <li key={point} className="rule pt-4 text-(--text-muted) first:border-0 first:pt-0">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
