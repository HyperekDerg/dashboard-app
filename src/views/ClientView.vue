<script setup>
import UserRefresh from '../components/UserRefresh.vue';
import ApiStatus from '../components/ApiStatus.vue';
import MessageInfo from '../components/MessageInfo.vue';

import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { collection, onSnapshot } from '@firebase/firestore';

   const getApi = ref([]);
   const getMessage = ref([]);
    onMounted(() => {
        let getApiData = [];
        let getMessageData = [];
        onSnapshot(collection(db, 'user-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            // Get api value
            const apiBuilder = doc.data().show_api;
            getApiData = apiBuilder;
            // Get message value
            const messageBuilder = doc.data().show_message;
            getMessageData = messageBuilder;
        });
        getApi.value = getApiData;
        getMessage.value = getMessageData;
        });
    });
</script>

<template>
  <!-- Main site -->
  <main class="bg-primary min-h-screen">
      <div class="rounded-b-sm bg-secondary shadow-2xl px-8 py-4 flex">
        <div class="flex-1 m-auto">
          <h1 class="text-xl uppercase text-font-color font-bold">Main Display View</h1>
        </div>
        <UserRefresh />
      </div>
      <div class="px-4 pt-6 pb-4">
        <div class="grid overflow-hidden gap-6 grid-cols-1" id="Parameters">
               <!-- First grid element -->
               <MessageInfo v-if="getMessage === true"/>  
               <!-- Socound grid element -->
               <ApiStatus v-if="getApi === true"/>
            </div>
      </div>
    </main>

</template>
