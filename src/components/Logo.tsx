import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/assets/brand/logos/framescale-logo-horizontal.png"
        alt="FrameScale"
        width={220}
        height={48}
        priority
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
