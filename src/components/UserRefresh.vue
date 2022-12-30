<script setup>
   import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { collection, onSnapshot } from '@firebase/firestore';

   const getReload = ref([])
    onMounted(() => {
        let getReloadData = []
        onSnapshot(collection(db, 'user-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const reloadBuiler = doc.data().show_reload;
            getReloadData = reloadBuiler;
        });
        getReload.value = getReloadData;
        });
    });

    function refresh(){
      window.location.reload();
   }
</script>

<template>
        <div class="px-4"  v-if="getReload === true">
            <button v-on:click="refresh()" class="text-secondary font-medium rounded-lg px-4 py-2 bg-button hover:bg-button-hover duration-300">Refresh Page</button>
        </div>
</template>