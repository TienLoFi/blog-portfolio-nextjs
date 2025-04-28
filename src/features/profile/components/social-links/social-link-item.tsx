import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

import { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/cn";

import { getSocialIcon } from "../social-icons";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/social-link flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors select-none"
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative size-12 shrink-0">
        {typeof icon === "string" && icon.startsWith("/") ? (
          <Image
            className="rounded-xl"
            src={icon}
            alt={`${title}'s icon`}
            width={48}
            height={48}
            quality={100}
          />
        ) : (
          <div
            className={cn(
              "flex size-full items-center justify-center rounded-xl",
              icon === "facebook" && "bg-blue-50 dark:bg-blue-900/20",
              icon === "mail" && "bg-red-50 dark:bg-red-900/20",
              !["facebook", "mail"].includes(icon as string) &&
                "bg-zinc-50 dark:bg-zinc-900"
            )}
          >
            <div
              className={cn(
                "text-zinc-950 dark:text-zinc-50",
                icon === "facebook" && "text-blue-600 dark:text-blue-400",
                icon === "mail" && "text-red-600 dark:text-red-400"
              )}
            >
              {getSocialIcon(icon as string)}
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8" />
      </div>

      <div className="flex-1">
        <p className="flex items-center font-heading font-medium underline-offset-4 group-hover/social-link:underline">
          {title}
        </p>

        {description && (
          <p className="font-mono text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <ExternalLinkIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
