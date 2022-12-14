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
    <div class="bg-secondary rounded-lg shadow-lg md:flex">
        <img src="https://cdn.pixabay.com/photo/2017/08/24/11/12/makeup-2676392__480.jpg" alt="Palette" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        <div class="p-6">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-font-color">SELECTED THEME</h2>
            <p class="text-font-color mt-8 md:text-xl">{{selectedTheme}}</p>
        </div>
    </div>
    </template>