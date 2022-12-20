<template>
   <div class="flex items-center h-screen w-full bg-page-pattern bg-no-repeat bg-cover">
        <div class="w-full max-w-xs m-auto bg-hero-pattern rounded p-8">  
            <div class="p-8 bg-primary rounded-lg">
                <h1 class="text-xl py-3 text-secondary font-bold">Create Account</h1>
                <p class=""><input type="text" placeholder="email" v-model="email" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-secondary outline-none bg-white"/></p>
                <p><input type="password" placeholder="password" v-model="password" class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-secondary outline-none bg-white"/></p>
                <p><button @click="register" class="text-secondary font-medium rounded-lg px-4 py-2 bg-button hover:bg-button-hover duration-300 w-full">Submit</button></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
            console.log("Succesfully register.");
            router.push('/admin/');
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};

</script>