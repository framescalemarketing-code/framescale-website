import { Container } from "@/components/ui/Container";
import { credentials } from "@/content/home";

/**
 * Proof strip directly under the hero. With no testimonials on the site yet,
 * these verifiable credentials are the trust signal the hero rules call for.
 */
export function TrustBar() {
  return (
    <div className="rule border-b border-(--border) bg-[#f2f7f7]">
      <Container width="wide">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-7 divide-(--border) py-10 md:grid-cols-4 md:gap-0 md:divide-x">
          {credentials.map((item) => (
            <div key={item.value} className="flex flex-col gap-1 px-0 py-3 md:px-7 md:py-0 md:first:pl-0">
              <dt className="font-headline text-lg leading-tight text-(--brand-deep) md:text-xl">{item.value}</dt>
              <dd className="font-ui text-[11px] font-medium tracking-[0.08em] text-(--text-muted) uppercase">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
