import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let resolved = locale ?? (await requestLocale);
  if (!hasLocale(routing.locales, resolved)) {
    resolved = routing.defaultLocale;
  }

  return {
    locale: resolved,
    messages: (await import(`../messages/${resolved}.json`)).default,
  };
});
