<script setup>
   import { db } from '../main.js';
   import { doc, setDoc } from '@firebase/firestore';

   async function switchTheme(theme) {
   await setDoc(doc(db, "theme", "LrFCAu9rG4ZprnDW5JAZ"), {
      selected: theme
   });
}

</script>
<template>
   <div class="bg-secondary rounded-lg shadow-lg py-5 px-4">
      <h2 class="font-medium text-font-color text-lg px-2 py-1">Select Theme</h2>
      <div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 text-font-color font-bold">
         <button v-on:click="switchTheme('lite-theme')" class=" bg-theme-1 p-2 rounded-xl">LITE</button>
         <button v-on:click="switchTheme('dark-theme')" class=" bg-theme-2 p-2 rounded-xl">DARK</button>
      </div>
   </div>


    
</template>