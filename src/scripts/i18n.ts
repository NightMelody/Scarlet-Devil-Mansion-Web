import { createI18n } from "vue-i18n";

// LANG IMPORT /////////////
import en from '../data/i18n/en'
import es from "@/data/i18n/es";

/////////////////////

const messages = {
    en, es
}

const savedLang = localStorage.getItem('lang') ?? 'en'

const i18n = createI18n({
    legacy: false,
    locale: savedLang,
    fallbackLocale: 'en',
    messages
})

export default i18n