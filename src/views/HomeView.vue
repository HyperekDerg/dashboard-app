<script setup>
   import SideBar from '../components/SideBar.vue';
   import ApiStatus from '../components/ApiStatus.vue'
   import ThemeStatus from '../components/ThemeStatus.vue';
</script>
<template>
   <main class="relative bg-primary min-h-screen md:flex">
      <!-- Load NAV -->
      <SideBar />
      <div class="flex-1">
         <div class="rounded-b-sm bg-secondary shadow-2xl px-8 py-4">
            <h1 class="text-xl uppercase text-font-color font-bold">Admin Home</h1>
         </div>
         <!-- Main Content go here -->
         <div class="px-4 pt-8">
            <div class="grid overflow-hidden gap-6 mgrid-cols-2 grid-rows-1">
               <!-- First grid element -->
               <ApiStatus />
               <!-- Socound grid element -->
               <ThemeStatus />
            </div>
         </div>
      </div>
   </main>
</template>
