"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export function ContactSection() {
  const locale = useLocale() as "en" | "de";
  const t = useTranslations("contact");
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="rounded-2xl border border-ink/12 bg-white/90 p-6 shadow-soft">
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-full border border-ink/20 px-4 py-2 font-medium text-ink transition hover:border-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          {t("email")}: {profile.contact.email}
        </a>
        <span className="rounded-full border border-ink/20 px-4 py-2 font-medium text-ink">
          {t("location")}: {profile.contact.location[locale]}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setShowPhone((current) => !current)}
        className="mt-4 text-sm font-semibold text-primary transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        {showPhone ? t("hidePhone") : t("showPhone")}
      </button>

      {showPhone ? (
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-ink/85">
          {profile.contact.phoneNumbers.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="rounded-full border border-ink/20 bg-mist px-3 py-1.5 font-medium transition hover:border-accent"
            >
              {phone}
            </a>
          ))}
        </div>
      ) : null}

      {(profile.contact.linkedin || profile.contact.github) && (
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {profile.contact.linkedin ? (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-4 py-2 font-medium text-ink transition hover:border-accent hover:text-primary"
            >
              {t("linkedin")}
            </a>
          ) : null}
          {profile.contact.github ? (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-4 py-2 font-medium text-ink transition hover:border-accent hover:text-primary"
            >
              {t("github")}
            </a>
          ) : null}
        </div>
      )}

      <p className="mt-5 text-sm text-ink/75">{t("signoff")}</p>
    </div>
  );
}
