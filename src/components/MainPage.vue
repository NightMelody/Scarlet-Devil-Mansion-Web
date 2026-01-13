<script setup lang="ts">
import { ref } from 'vue';

import BackGround from './BackGround.vue';
import CenterPanel from './MainPage/CenterPanel.vue';
import LeftPanel from './MainPage/LeftPanel.vue';
import OptionsPanel from './MainPage/OptionsPanel.vue';
import RightPanel from './MainPage/RightPanel.vue';


const currentPanel = ref<'center' | 'options'>('center')

function changePanel(panel: 'center' | 'options') {
  currentPanel.value = panel
}


</script>

<template>
  <div class="main-page">
    <LeftPanel @change-panel="changePanel" />
    <!-- <CenterPanel /> -->
    <component :is="currentPanel === 'center' ? CenterPanel : OptionsPanel"/>
    <RightPanel />
    <BackGround />
  </div>
</template>

<style lang="css">
@import url('../styles/mainPage.css');
</style>