<script setup>
  import { db } from './main.js';
  import { collection, onSnapshot } from '@firebase/firestore';
  import { onMounted, ref } from 'vue';
  import { RouterView } from 'vue-router';

  const selectedTheme = ref([])

  onMounted(() => {
    let getThemeData = []
    onSnapshot(collection(db, 'theme'), (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const themeBuilder = doc.data().selected;
        getThemeData = themeBuilder;
      });
      selectedTheme.value = getThemeData;
    });
  });
</script>
<template>
  <div :class="{ 'dark-theme': selectedTheme  === 'dark-theme', 'lite-theme': selectedTheme === 'lite-theme'}">
    <RouterView/>
  </div>
</template>