import Image from "next/image";
import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-brand-sand to-white">
      <Container>
        <div className="grid items-center gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            {eyebrow && (
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-teal ring-1 ring-brand-ink/10">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-5 font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-ink/75">
              {description}
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-brand-ink/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
