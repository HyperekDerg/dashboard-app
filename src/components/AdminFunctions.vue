<script setup>
   import { db } from '../main.js';
   import { ref, onMounted } from 'vue';
   import { doc, setDoc, collection, onSnapshot } from '@firebase/firestore';

    onMounted(() => {
        let getApiData = [];
        let getThemeData = [];
        let getMessageData = [];
        onSnapshot(collection(db, 'admin-config'), (QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
            const ApiBuiler = doc.data().show_api;
            getApiData = ApiBuiler;
            const ThemeBuiler = doc.data().show_theme;
            getThemeData = ThemeBuiler;
            const MessageBuilder = doc.data().show_message;
            getMessageData = MessageBuilder;
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
        await setDoc(doc(db, "admin-config", "HjGCzTwlKesor9MVnzDy"), {
            show_api: api_status,
            show_theme: theme_status,
            show_message: message_status
        });
    }
</script>

<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
    <h2 class="font-medium text-font-color text-lg px-2 py-4">Admin Side Configuration</h2>
        <div class="bg-primary p-6 rounded-lg">
            <!-- First -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-y-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW API STATUS</p>
                <div class="flex justify-center items-center">
                    <label for="api_status" class="inline-flex p-1 cursor-pointer">
                        <input id="api_status" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Secound -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW SELECTED THEME</p>
                <div class="flex justify-center items-center">
                    <label for="theme_status" class="inline-flex p-1 cursor-pointer">
                        <input id="theme_status" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Third -->
            <div class="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW BOARD MESSAGE</p>
                <div class="flex justify-center items-center">
                    <label for="message_status" class="inline-flex p-1 cursor-pointer">
                        <input id="message_status" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="grid overflow-hidden grid-cols-1 grid-rows-1 font-bold py-4">
            <input type="submit" value="SAVE OPTIONS" v-on:click="setConfig()" class="rounded bg-button hover:bg-button-hover text-secondary p-4 cursor-pointer">
        </div>
    </div>
</template>