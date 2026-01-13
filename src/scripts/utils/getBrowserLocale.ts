export function getBrowserLocale(): string {
    const lang = navigator.languages?.[0] || navigator.language || 'en'

    return lang.split('-')[0] || 'en'
}