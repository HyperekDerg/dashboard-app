<script setup>
   import SideBar from '../components/SideBar.vue';
   import ApiStatus from '../components/ApiStatus.vue'
   import ThemeStatus from '../components/ThemeStatus.vue';

   import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { collection, onSnapshot } from '@firebase/firestore';

   const getApi = ref([]);
   const getTheme = ref([]);
   const getMessage = ref([]);
    onMounted(() => {
        let getApiData = [];
        let getThemeData = [];
        let getMessageData = [];
        onSnapshot(collection(db, 'admin-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            // Get api value
            const apiBuilder = doc.data().show_api;
            getApiData = apiBuilder;
            // Get theme value
            const themeBuilder = doc.data().show_theme;
            getThemeData = themeBuilder;
            // Get message value
            const messageBuilder = doc.data().show_message;
            getMessageData = messageBuilder;
        });
        getApi.value = getApiData;
        getTheme.value = getThemeData;
        getMessage.value = getMessageData;
        });
    });
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
         <div class="px-4 pt-8 pb-4">
            <div class="grid overflow-hidden gap-6 grid-cols-1 md:grid-cols-2" id="Parameters">
               <!-- First grid element -->
               <ApiStatus v-if="getApi === true"/>
               <!-- Socound grid element -->
               <ThemeStatus v-if="getTheme === true"/>
            </div>
         </div>
      </div>
   </main>
</template>
