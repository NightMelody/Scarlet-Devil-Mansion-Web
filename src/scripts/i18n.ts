import { createI18n } from "vue-i18n";
import { getBrowserLocale } from "./utils/getBrowserLocale";

const SUPPORTED_LOCALES = ['en', 'es'] as const

type AvailableLocale = typeof SUPPORTED_LOCALES[number]

function isSupportedLocale(locale: string): locale is AvailableLocale {
    return SUPPORTED_LOCALES.includes(locale as AvailableLocale)
}

function getDefaultLocale(): AvailableLocale {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && isSupportedLocale(savedLang)) {
        return savedLang
    }

    const browserLang = getBrowserLocale()
    if (isSupportedLocale(browserLang)) {
        return browserLang
    }

    return 'en'
}

const i18n = createI18n({
    legacy: false,
    locale: getDefaultLocale(),
    fallbackLocale: 'en',
    messages: {}
})

async function loadLocaleMesages(locale: AvailableLocale) {
    const messages = await import(`@/data/i18n/${locale}.ts`)
    i18n.global.setLocaleMessage(locale, messages.default)
}

export async function setLocale(locale: AvailableLocale) {
    if (!i18n.global.availableLocales.includes(locale)) {
        await loadLocaleMesages(locale)
    }

    i18n.global.locale.value = locale
    localStorage.setItem('lang', locale)
}

export default i18n