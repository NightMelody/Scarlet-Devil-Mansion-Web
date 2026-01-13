<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';


const { locale, t} = useI18n()

watch(locale, (newLocale) => {
    if (newLocale) {
        localStorage.setItem('lang', newLocale)
    }
})
</script>



<template>
    <div class="center-options">
        <div class="center-main-content">
            <h1 v-html="$t('preferences')"></h1>
        </div>

        <div class="divisor"></div>

        <div class="center-main-content">
            <h2 v-html="$t('language')"></h2>
            <select v-model="locale">
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