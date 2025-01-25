import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="prose prose-invert lg:prose-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">{t("title")}</h1>
      <p className="text-gray-300">{t("paragraph_1")}</p>
      <p className="text-gray-300">{t("paragraph_2")}</p>
      <p className="text-gray-300">{t("paragraph_3")}</p>
      <p className="text-gray-300">{t("paragraph_4")}</p>
    </div>
  );
}
