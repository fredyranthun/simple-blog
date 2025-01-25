"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const supportedLocales = ["en", "pt"];

export function Navbar({ locale }: { locale: "en" | "pt" }) {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="py-6 px-4 md:px-6 border-b border-gray-800">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Fredy&apos;s tech Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              {}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              {t("about.title")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              {t("contact.title")}
            </Link>
          </li>
        </ul>
        <div className="flex space-x-2">
          {supportedLocales.map((l) => (
            <Link
              key={l}
              href={pathname}
              locale={l}
              className={`hover:text-gray-300 ${locale === l ? "font-bold" : ""}`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
