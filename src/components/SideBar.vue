<script setup>
   import { ref } from 'vue';
   import { onAuthStateChanged, signOut, getAuth } from '@firebase/auth';
   import { onMounted} from 'vue';
   import { RouterLink, useRouter} from 'vue-router';
   import IconHome from './icons/IconHome.vue';
   import IconDashboard from './icons/IconDashboard.vue';
   import IconEdit from './icons/IconEdit.vue';
   import IconConfig from './icons/IconConfig.vue';
   import IconStack from './icons/IconStack.vue';
   import IconUsers from './icons/IconUsers.vue';
   
   const showSidebar = ref(false);
   const isLoggedIn = ref(false);

   let auth;
   onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user) {
               isLoggedIn.value = true;
         } else {
               isLoggedIn.value = false;
         }
      });
   });
   const router = useRouter();
   const handleSignOut = () => {
      signOut(auth).then(() => {
         router.push("/");
      });
   }
</script>

<template>
    <!-- Sidebar Element -->
   <div class="sidebar bg-sidebar-primary text-font-color w-64 px-2 space-y-6 py-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform transition duration-200 ease-in-out -translate-x-full" :class="{ 'absolute -translate-x-0': showSidebar }">

      <!-- logo -->
      <RouterLink to="/admin/" class="flex items-center space-x-2 px-4 py-4 logo">
         <IconDashboard class="text-2xl"/>
         <span class="text-2xl font-color">DashBoard</span>
      </RouterLink>

      <!-- Main Navbar section -->
      <nav>
         <RouterLink to="/admin/" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-hover rounded transition duration-200">
            <IconHome class="text-xl" />
            <span class="text-xl font-color">Home</span>
         </RouterLink>
         <RouterLink to="/admin/layout" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-hover rounded transition duration-200">
            <IconEdit class="text-xl" />
            <span class="text-xl font-color">Layout</span>
         </RouterLink>
         <RouterLink to="/admin/config" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-hover rounded transition duration-200">
            <IconConfig class="text-xl" />
            <span class="text-xl font-color">Config</span>
         </RouterLink>
         <RouterLink to="/" class="flex items-center space-x-2 mt-12 py-3 px-4 hover:bg-sidebar-hover rounded transition duration-200">
            <IconUsers class="text-xl" />
            <span class="text-xl font-color">User Site</span>
         </RouterLink>
         <div @click="handleSignOut" v-if="isLoggedIn" class="flex items-center cursor-pointer space-x-2 py-3 px-4 hover:bg-sidebar-hover rounded transition duration-200">
               <IconConfig class="text-xl" />
               <span class="text-xl font-color">Logout</span>
         </div>
      </nav>
   </div>

   <!-- Mobile Version -->
   <div class="bg-gray-800 text-gray-100 flex justify-between items-center px-2 md:hidden">
      <RouterLink to="/admin/" class="block p-4 font-color font-bold logo"> DashBoard </RouterLink>
      <button @click="showSidebar = !showSidebar">
         <IconStack class="text-3xl text-white"/>
      </button>
   </div>

</template>
