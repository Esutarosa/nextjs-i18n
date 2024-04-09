import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["eng", "ua"];

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as string)) return notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})