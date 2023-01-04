<script setup>
  import { db } from '../main.js';
  import { collection, onSnapshot } from '@firebase/firestore';
  import { onMounted, ref } from 'vue';

  const messageAPI = ref([])

  onMounted(() => {
    let getMessageData = []
    onSnapshot(collection(db, 'message'), (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const messageBuilder = doc.data().message;
        getMessageData = messageBuilder;
      });
      if (getMessageData === '' || !getMessageData) {
        messageAPI.value = "No saved message or server error!";
      } else {
        messageAPI.value = getMessageData;
      }
    });
  });
</script>
<template>
  <div class="bg-secondary rounded-lg shadow-lg md:flex">
      <img src="https://slidechef.net/wp-content/uploads/2022/08/Dark-Theme-Blank-Text-Message-Template.jpg" alt="Palette" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
      <div class="p-6 md:w-2/3">
        <h2 class="font-bold text-xl md:text-3xl mb-2 text-font-color">SET MESSAGE</h2>
        <p class="text-font-color mt-8 md:text-xl">{{ messageAPI }}</p>
      </div>
  </div>
</template>