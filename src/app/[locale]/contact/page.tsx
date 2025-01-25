import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-white">{t("title")}</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">{t("underConstruction")}</h2>
        <p className="text-gray-300 mb-4">{t("message")}</p>
        <p className="text-gray-300">
          {t("alternativeContact")}{" "}
          <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">
            contact@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
