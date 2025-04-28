import { Markdown } from "@/components/markdown";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/data/user";

import { ChanhDaiAvatar } from "./chanhdai-avatar";
// import { ChanhDaiCoverHello } from "./chanhdai-cover-hello";
import { Nav } from "./nav/nav";
import { NavDropdown } from "./nav/nav-dropdown";
import { SocialLinks } from "./social-links";

export function Header() {
  return (
    <header className="relative mt-12">
      <div className="flex h-12 items-center justify-end gap-4 border-x border-grid px-2">
        <Nav className="max-sm:hidden" />

        <div className="flex items-center gap-2">
          <NavItemGitHub />
          <ToggleTheme />
          <NavDropdown className="sm:hidden" />
        </div>
      </div>

      <div className="flex border-x border-grid">
        <div className="flex flex-col-reverse items-center gap-8 rounded-xl p-8 shadow md:flex-row md:items-start">
          <div className="flex-1">
            <p className="mb-2 text-sm tracking-widest text-zinc-950 md:text-base dark:text-zinc-50">
              {USER.welcome}
            </p>
            <h1 className="font-heading text-3xl font-bold text-zinc-950 sm:text-4xl md:text-5xl dark:text-zinc-50">
              Hello, World!
              <br />
              I&apos;m{" "}
              <span className="text-zinc-950 dark:text-white">
                {USER.displayName}
              </span>
            </h1>
            <h2 className="font-heading text-3xl font-bold text-zinc-950 sm:text-4xl md:text-5xl dark:text-zinc-50">
              a{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl">
                {"{Junior Developer.}"}
              </span>
            </h2>
            <Prose className="mt-8 text-zinc-950 dark:text-zinc-50">
              <Markdown>{USER.intro}</Markdown>
            </Prose>
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full bg-gradient-to-r from-purple-700/90 via-blue-600/90 to-purple-700/90 blur-2xl dark:from-purple-600/90 dark:via-blue-500/90 dark:to-purple-600/90"></div>
            <div className="absolute inset-0 animate-[spin_6s_linear_infinite_reverse] rounded-full bg-gradient-to-r from-purple-700/70 via-blue-600/70 to-purple-700/70 blur-xl dark:from-purple-600/80 dark:via-blue-500/80 dark:to-purple-600/80"></div>
            <div className="absolute inset-0 animate-[lightning_1s_ease-in-out_infinite]">
              <svg className="h-full w-full" viewBox="0 0 200 200">
                <path
                  className="stroke-purple-500/90 dark:stroke-purple-400/90"
                  d="M100,20 L120,80 L80,100 L120,120 L100,180"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="stroke-blue-500/90 dark:stroke-blue-400/90"
                  d="M100,20 L120,80 L80,100 L120,120 L100,180"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "blur(1px)" }}
                />
              </svg>
            </div>
            <ChanhDaiAvatar
              className="relative z-10 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-border ring-offset-2 ring-offset-background transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64"
              size={192}
            />
          </div>
        </div>
      </div>

      <SocialLinks />
    </header>
  );
}
