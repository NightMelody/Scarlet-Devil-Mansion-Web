import { createApp } from 'vue'
import App from './App.vue'
import i18n, {setLocale} from './scripts/i18n'
import './styles.css'

await setLocale(i18n.global.locale.value as any)

createApp(App).use(i18n).mount('#app')
