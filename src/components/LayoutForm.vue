<script setup>
   import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { doc, updateDoc, collection, onSnapshot } from '@firebase/firestore';

   const messageData = ref([])
    onMounted(() => {
        let getMessageData = []
        onSnapshot(collection(db, 'message'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const messageBuilder = doc.data().message;
            getMessageData = messageBuilder;
        });
        messageData.value = getMessageData;
        });
    });


    async function setMessage() {
        let message = document.getElementById('message').value;
        await updateDoc(doc(db, "message", "kmDTzhI85RflREdltYQH"), {
            message: message
        });
        document.getElementById('message').value = '';
    }

</script>
<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
       <h2 class="font-medium text-font-color text-lg px-2 py-1">Set Message</h2>
       <div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 font-bold">
         <input type="text" name="message" id="message" :placeholder="[[messageData]]" class="shadow-sm p-2 border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400">
         <input type="submit" value="SET" v-on:click="setMessage()" class="rounded bg-button hover:bg-button-hover text-secondary m-2 cursor-pointer">
       </div>
    </div>
</template>