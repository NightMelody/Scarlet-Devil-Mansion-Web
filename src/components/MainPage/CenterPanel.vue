<script setup lang="ts">
import { Translation } from 'vue-i18n';

</script>

<template>
    <div class="center-main">
        <div class='center-main-head'>
            <h1><i>{{ $t('title') }}</i></h1>
        </div>

        <div class="divisor"></div>

        <div class="center-main-content">
            <p v-html="$t('welcomeText')"></p>

            <div class="sub-divisor"></div>

            <p v-html="$t('pleases')"></p>

            <img src="https://cdn.discordapp.com/splashes/1419438500356292802/39c205a15337d4f7d2325ab55b714a40.jpg?size=2048"
                alt="" style="
                object-fit: cover; 
                width: 75%;
                border: 2px solid var(--brigth-color);
            ">

            <div class="sub-divisor"></div>

            <h2 v-html="$t('reasonsAsk')"></h2>

            <p v-html="$t('reasons')"></p>

            <div class="sub-divisor"></div>

            <h2 v-html="$t('officialLinks')"></h2>
            <a href="https://discord.gg/jQeDCk7ayg" v-html="$t('discordLink')"></a>
        </div>
    </div>
</template>

<style lang="css">
@import url('../../styles/mainPage.css');
</style>