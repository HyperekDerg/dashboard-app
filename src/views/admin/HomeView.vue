<script setup>
import SideBar from '../../components/SideBar.vue';
</script>

<template>
  <div class="flex">
    <!-- Load NAV -->
    <SideBar />
    <!-- Main site -->
    <main class="flex-1 overflow-hidden bg-primary">
      <div class="rounded-b-sm bg-secondary shadow-2xl px-8 py-4">
        <h1 class="text-xl uppercase text-font-color font-bold">Admin Home</h1>
      </div>
      <div class="md:px-4 pt-6">
        <p>Welcome</p>
      </div>
    </main>
  </div>
</template>
