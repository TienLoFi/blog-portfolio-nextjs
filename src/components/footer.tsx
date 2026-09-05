"use client";

import { Briefcase, Building2, Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";

import { USER } from "@/data/user";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="screen-line-before border-x border-grid pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        {t("footer.inspiredBy")}
      </p>

      <div className="screen-line-before grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              {USER.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              {USER.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              {USER.phoneNumber}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              {USER.jobTitle}
            </span>
          </div>
          {USER.jobs.map((job) => (
            <div key={job.company} className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">
                {job.title} at {job.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
