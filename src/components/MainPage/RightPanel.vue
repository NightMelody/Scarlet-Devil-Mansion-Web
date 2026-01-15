<script setup lang="ts">
import StaffList from '../StaffList.vue';



</script>

<template>
    <div class="main-right-panel">
        <!-- By default desable, cuz I need permission to put this -->
        <StaffList />
        <!-- <p v-html="$t('commigSoon')"></p> -->
    </div>
</template>

<style lang="css">
@import url('../../styles/mainPage.css');


h2 {
    font-size: 25px !important;
}

p {
    line-height: 1.5 !important;
}
</style>