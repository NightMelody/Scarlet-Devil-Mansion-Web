<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { setLocale } from '@/scripts/i18n';

const {locale} = useI18n()

async function onlangChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value
    await setLocale(value as any)
}

</script>



<template>
    <div class="center-options">
        <div class="center-main-content">
            <h1 v-html="$t('preferences')"></h1>
        </div>

        <div class="divisor"></div>

        <div class="center-main-content">
            <h2 v-html="$t('language')"></h2>
            <select :value="locale" @change="onlangChange">
                <option value="en">English</option>
                <option value="es">Español</option>
                <!-- <option>日本語</option> -->
            </select>
            <br>
            
        </div>
    </div>
</template>

<style lang="css">
@import url('../../styles/mainPage.css');
</style>