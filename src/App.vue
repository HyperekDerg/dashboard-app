<script setup>

import { RouterView } from 'vue-router';

</script>
<script>
export default {
  name: 'Themer',
  data() {
    return {
      selectedTheme: localStorage.getItem('theme-color') || 'dark-theme'
    };
  }
}
</script>


<template>
  <div :class="{ 'dark-theme': selectedTheme  === 'dark-theme', 'lite-theme': selectedTheme === 'lite-theme'}">
    <RouterView/>
  </div>
</template>