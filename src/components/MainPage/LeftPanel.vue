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
        </div>

    </div>
</template>

<style lang="css">
@import url('../../styles/mainPage.css');
</style>