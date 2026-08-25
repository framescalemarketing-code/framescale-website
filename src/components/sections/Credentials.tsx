import { Section, SectionHeading } from "@/components/ui/Section";
import { credentialDetails, workingWithMe } from "@/content/about";

/** The dark anchor section on /about. Carries the verifiable trust signals. */
export function Credentials() {
  return (
    <Section tone="dark" size="tall">
      {/* Inverted against the usual 0.8/1.2 band ratio on purpose: here the wide
          column is on the left, because that is where the credential list lives.
          The panel on the right is the secondary element. Narrowing the left
          column wraps "University Of California, Riverside" onto three lines. */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <SectionHeading title="The background" lead="School, and a lot of years on a sales floor." tone="light" />

          <dl className="mt-9 flex flex-col">
            {credentialDetails.map((item, index) => (
              <div
                key={item.value}
                className={`flex flex-col gap-1.5 py-6 md:flex-row md:gap-10 ${
                  index === 0 ? "" : "border-t border-white/12"
                }`}
              >
                <dt className="font-ui text-[11px] font-semibold tracking-[0.14em] text-white/65 uppercase md:w-52 md:shrink-0 md:pt-1">
                  {item.label}
                </dt>
                <dd className="flex flex-col gap-1">
                  <span className="font-headline text-xl text-white">{item.value}</span>
                  <span className="text-sm text-white/60">{item.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-5 rounded-(--radius-card) border border-white/15 bg-white/4 p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start">
          <h3 className="display-md text-white">{workingWithMe.title}</h3>
          <ul className="flex flex-col gap-4">
            {workingWithMe.points.map((point) => (
              <li key={point} className="border-t border-white/12 pt-4 text-white/70 first:border-0 first:pt-0">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
