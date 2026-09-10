import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { notFound } from "@/content/not-found";
import { bookingHrefFor, mainNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container width="narrow">
        <div className="flex flex-col gap-6">
          <h1 className="display-lg text-(--brand-deep)">{notFound.title}</h1>
          <p className="lead">{notFound.lead}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg" withArrow>
              {notFound.home}
            </Button>
            <Button href={bookingHrefFor("/404")} size="lg" variant="outline">
              {notFound.book}
            </Button>
          </div>

          <nav aria-label="Site pages" className="rule mt-6 flex flex-wrap gap-x-6 gap-y-2 pt-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-quiet font-ui text-sm font-semibold text-(--brand-primary)"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
