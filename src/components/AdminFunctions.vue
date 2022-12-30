<script setup>
   import { db } from '../main.js';
   import { onMounted } from 'vue';
   import { doc, updateDoc , collection, onSnapshot } from '@firebase/firestore';

    onMounted(() => {
        let getApiData = [];
        let getThemeData = [];
        let getMessageData = [];
        onSnapshot(collection(db, 'admin-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const apiBuiler = doc.data().show_api;
            getApiData = apiBuiler;
            const themeBuiler = doc.data().show_theme;
            getThemeData = themeBuiler;
            const messageBuilder = doc.data().show_message;
            getMessageData = messageBuilder;
        });
        document.getElementById('api_status').checked = getApiData;
        document.getElementById('theme_status').checked = getThemeData;
        document.getElementById('message_status').checked = getMessageData;
        });
    });

    async function setConfig() {
        let api_status = document.getElementById('api_status').checked;
        let theme_status = document.getElementById('theme_status').checked;
        let message_status = document.getElementById('message_status').checked;
        await updateDoc(doc(db, "admin-config", "HjGCzTwlKesor9MVnzDy"), {
            show_api: api_status,
            show_theme: theme_status,
            show_message: message_status
        });
    }
</script>

<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
    <h2 class="font-medium text-font-color text-lg px-2 py-4">Admin Side Configuration</h2>
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
                <p class="text-font-settings px-2 py-5">SHOW SELECTED THEME</p>
                <div class="flex justify-center items-center">
                    <label for="theme_status" class="inline-flex p-1 cursor-pointer">
                        <input id="theme_status" type="checkbox" class="hidden peer" v-on:click="setConfig()">
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