<script setup>
   import { db } from '../main.js';
   import { onMounted } from 'vue';
   import { doc, updateDoc , collection, onSnapshot } from '@firebase/firestore';

    onMounted(() => {
        let getApiData = [];
        let getReloadData = [];
        let getMessageData = [];
        onSnapshot(collection(db, 'user-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const apiBuiler = doc.data().show_api;
            getApiData = apiBuiler;
            const reloadBuiler = doc.data().show_reload;
            getReloadData = reloadBuiler;
            const messageBuilder = doc.data().show_message;
            getMessageData = messageBuilder;
        });
        document.getElementById('api_status').checked = getApiData;
        document.getElementById('reload-button').checked = getReloadData;
        document.getElementById('message_status').checked = getMessageData;
        });
    });

    async function setConfig() {
        let api_status = document.getElementById('api_status').checked;
        let reload_button = document.getElementById('reload-button').checked;
        let message_status = document.getElementById('message_status').checked;
        await updateDoc(doc(db, "user-config", "TgwNygcTi15Dgwg1c1bb"), {
            show_api: api_status,
            show_reload: reload_button,
            show_message: message_status
        });
    }
</script>

<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
    <h2 class="font-medium text-font-color text-lg px-2 py-4">User Side Configuration</h2>
        <div class="bg-config-area p-6 rounded-lg">
            <!-- First -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-y-2 border-secondary py-4">
                <p class="text-font-settings px-2 py-5">SHOW API STATUS</p>
                <div class="flex justify-center items-center">
                    <label for="api_status" class="inline-flex p-1 cursor-pointer">
                        <input id="api_status" type="checkbox" class="hidden peer" v-on:click="setConfig()">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Secound -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-font-settings px-2 py-5">SHOW RELOAD BUTTON</p>
                <div class="flex justify-center items-center">
                    <label for="reload-button" class="inline-flex p-1 cursor-pointer">
                        <input id="reload-button" type="checkbox" class="hidden peer" v-on:click="setConfig()">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Third -->
            <div class="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-font-settings px-2 py-5">SHOW BOARD MESSAGE</p>
                <div class="flex justify-center items-center">
                    <label for="message_status" class="inline-flex p-1 cursor-pointer">
                        <input id="message_status" type="checkbox" class="hidden peer" v-on:click="setConfig()">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>