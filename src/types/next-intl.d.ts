import { Pathnames } from "next-intl/navigation";

export const pathnames = {
  "/": "/",
  "/blog": "/blog",
  "/about": "/about",
  "/contact": "/contact",
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
