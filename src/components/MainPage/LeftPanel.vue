<script setup lang="ts">
const emit = defineEmits<{
    (e: 'change-panel', panel: 'center' | 'options'):void
}>()
</script>


<template>
    <div class="main-left-panel">
        <div class="sidebar">
            <button v-html="$t('home')" @click="emit('change-panel', 'center')"></button>
            <button v-html="$t('preferences')" @click="emit('change-panel', 'options')"></button>
            <button>Events</button>
        </div>
        <div class="touhou-info">
            <h2 v-html="$t('leftPanelTitle')"></h2>
            <p v-html="$t('leftPanelInfo')"></p>
            <div class="divisor"></div>
            <br>
            <a v-html="$t('leftPanelThCopy')" href="https://en.touhouwiki.net/wiki/Touhou_Wiki:Copyrights"></a>
            
            <p v-html="$t('notAssociated')"></p>
            <p v-html="$t('copyright')"></p>
        </div>
        
    </div>
</template>

<style lang="css">
@import url('../../styles/mainPage.css');
</style>