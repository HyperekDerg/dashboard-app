<script setup>
  import { db } from '../main.js';
  import { collection, onSnapshot } from '@firebase/firestore';
  import { onMounted, ref } from 'vue';

  const selectedTheme = ref([])

  onMounted(() => {
    let getThemeData = []
    onSnapshot(collection(db, 'theme'), (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const themeBuilder = doc.data().selected;
        getThemeData = themeBuilder;
      });
      if (getThemeData === 'lite-theme') {
        selectedTheme.value = "LITE THEME";
      } else if (getThemeData === 'dark-theme'){
        selectedTheme.value = "DARK THEME";
      } else {
        selectedTheme.value = "NO THEME";
      }
    });
  });
</script>
<template>
  <div class="bg-secondary rounded-lg shadow-lg md:flex">
      <img src="https://cdn.pixabay.com/photo/2017/08/24/11/12/makeup-2676392__480.jpg" alt="Palette" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
      <div class="p-6">
        <h2 class="font-bold text-xl md:text-3xl mb-2 text-font-color">SELECTED THEME</h2>
        <p class="text-font-color mt-8 md:text-xl">App using now: <b>{{selectedTheme}}</b></p>
      </div>
  </div>
</template>