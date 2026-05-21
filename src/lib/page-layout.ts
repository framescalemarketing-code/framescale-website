/**
 * Shared Tailwind class groups for fluid marketing pages.
 * Keep full literal strings so Tailwind can discover utilities at build time.
 */

/** Outer centered column: wide max plus responsive horizontal padding */
export const PAGE_SHELL_FLUID = "max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16";

/** Industry and long-form marketing sections */
export const PAGE_SHELL_INDUSTRY = "max-w-7xl mx-auto px-6 lg:px-8";

/** Fluid shell with stacking context and full width */
export const PAGE_SHELL_FLUID_RELATIVE_FULL = `${PAGE_SHELL_FLUID} relative z-10 w-full`;

/** Main booking shell */
export const PAGE_SHELL_BOOK_MAIN = "max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

/** Contact "What happens next" style band */
export const PAGE_SHELL_CONTACT_INFO = "max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center";

/** Centered hero / intro copy column */
export const PAGE_HERO_INNER = "max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center";

/** Booking success state inner */
export const PAGE_SUCCESS_INNER =
  "w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10";

/** Book page footer strip */
export const PAGE_BOOK_FOOTER = "max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center";

/** Contact form max width wrapper */
export const PAGE_CONTACT_FORM_MAX = "w-full max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto";

/** Calendar + sidebar grid */
export const PAGE_BOOKING_CAL_GRID =
  "grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(270px,22rem)] xl:grid-cols-[minmax(0,1fr)_minmax(290px,24rem)]";
