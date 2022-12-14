<script setup>
   import SideBar from '../../components/SideBar.vue';
</script>
<script>
export default {
   name: 'Themer',
   data() {
     return {
       selectedTheme: localStorage.getItem('theme-color') || 'dark-theme'
     };
   },
   methods: {
      switchTheme(theme) {
         localStorage.setItem('theme-color', theme);
         this.selectedTheme = localStorage.getItem('theme-color')
         // window.location.reload();
      }
   }
}
</script>
<template>
   <main class="relative  bg-primary min-h-screen md:flex">
      <!-- Load NAV -->
      <SideBar />
      <div class="flex-1">
         <div class="rounded-b-sm bg-secondary shadow-2xl px-8 py-4">
            <h1 class="text-xl uppercase text-font-color font-bold">Admin Config</h1>
         </div>
         <div class="px-4 pt-6">
            <button v-on:click="switchTheme('lite-theme')" class=" bg-white">White</button>
            <button v-on:click="switchTheme('dark-theme')" class=" bg-green-500">Dark</button>
         </div>
      </div>
   </main>
</template>
