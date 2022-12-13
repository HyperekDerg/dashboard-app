<script setup>

import { RouterView } from 'vue-router';

const selectedTheme = "dark-theme";

</script>

<template>
  <div :class="{ 'dark-theme': selectedTheme  === 'dark-theme', 'lite-theme': selectedTheme === 'lite-theme'}">
    <RouterView/>
  </div>
</template>