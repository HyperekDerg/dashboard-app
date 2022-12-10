<script setup>
import SideBar from './components/SideBar.vue';

const selectedTheme = "dark-theme";

</script>

<template>
  <div class="flex"  :class="{ 'dark-theme': selectedTheme  === 'dark-theme', 'lite-theme': selectedTheme === 'lite-theme'}">
    <SideBar />
  </div>
</template>