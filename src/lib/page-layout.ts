/**
 * Shared Tailwind class groups for fluid marketing pages.
 * Keep full literal strings so Tailwind can discover utilities at build time.
 */

/** Outer centered column: wide max + responsive horizontal padding */
export const PAGE_SHELL_FLUID = "max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16";

/** Fluid shell with stacking context + full width (hero bands) */
export const PAGE_SHELL_FLUID_RELATIVE_FULL = `${PAGE_SHELL_FLUID} relative z-10 w-full`;

/** Main booking / dense content band */
export const PAGE_SHELL_BOOK_MAIN = "max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16";

/** Contact “What happens next” style band (no 2xl horizontal bump) */
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

/** Calendar + sidebar grid (booking) */
export const PAGE_BOOKING_CAL_GRID =
  "grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,min(32vw,28rem))] xl:grid-cols-[minmax(0,1fr)_minmax(300px,min(30vw,30rem))] 2xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,26rem)]";
