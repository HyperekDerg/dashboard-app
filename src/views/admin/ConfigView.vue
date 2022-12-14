<script setup>
   import SideBar from '../../components/SideBar.vue';
   import ThemeVue from '../../components/ThemeVue.vue';
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
           <ThemeVue />
         </div>
      </div>
   </main>
</template>
