<script setup>
  import { db } from '../main.js';
  import { collection, onSnapshot } from '@firebase/firestore';
  import { onMounted, ref } from 'vue';

  const connectionStatus = ref([])

  onMounted(() => {
    let getThemeData = []
    onSnapshot(collection(db, 'theme'), (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        const themeBuilder = doc.data().selected;
        getThemeData = themeBuilder;
      });
      if (getThemeData) {
        connectionStatus.value = "API successfully connected to the server!";
      } else {
        connectionStatus.value = "The API could not connect to the server. Check your network connection or check if the API server is active!";
      }
    });
  });
</script>

<template>
    <div class="bg-secondary rounded-lg shadow-lg md:flex">
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png" alt="Laptop on Desk" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        <div class="p-6">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-font-color">API STATUS</h2>
            <p class="text-font-color mt-8 md:text-xl">{{connectionStatus}}</p>
        </div>
    </div>
</template>