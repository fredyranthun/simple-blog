import "../globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fredy's Tech Blog",
  description: "My simple blog to share my thoughts on technology, programming, and other stuff.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "pt" }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <NextIntlClientProvider messages={messages}>
        <body className={`${inter.className} bg-gray-900 text-gray-100`}>
          <Navbar locale={locale} />
          <main className="max-w-4xl mx-auto py-8 px-4 md:px-6">{children}</main>
          <footer className="py-6 px-4 md:px-6 border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
              © 2023 Fredy&apos;s Tech Blog. All rights reserved.
            </div>
          </footer>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
