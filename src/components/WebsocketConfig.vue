<script setup>
   import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { doc, updateDoc, collection, onSnapshot } from '@firebase/firestore';

   const websocket_link = ref([])
    onMounted(() => {
        let getWebsocketData = []
        onSnapshot(collection(db, 'websocket'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const websocketBuiler = doc.data().websocket_url;
            getWebsocketData = websocketBuiler;
        });
        websocket_link.value = getWebsocketData;
        });
    });


    async function setWebsocket() {
        let websocket = document.getElementById('websocket').value;
        await updateDoc(doc(db, "websocket", "C5LSlGU9PigkJ5cpkWyq"), {
            websocket_url: websocket
        });
        document.getElementById('websocket').value = '';
    }

</script>
<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
       <h2 class="font-medium text-font-color text-lg px-2 py-1">Websocket URL </h2>
       <div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 font-bold">
         <input type="text" name="websocket" id="websocket" :placeholder="[[websocket_link]]" class="shadow-sm p-2 border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400">
         <input type="submit" value="SET" v-on:click="setWebsocket()" class="rounded bg-button hover:bg-button-hover text-secondary m-2 cursor-pointer">
       </div>
    </div>
</template>