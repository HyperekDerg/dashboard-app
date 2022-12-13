<script setup>
    import { ref } from 'vue';
    import { RouterLink} from 'vue-router';
    import IconHome from './icons/IconHome.vue';
    import IconDashboard from './icons/IconDashboard.vue';
    import IconEdit from './icons/IconEdit.vue';
    import IconConfig from './icons/IconConfig.vue';
    import IconStack from './icons/IconStack.vue';

    const showSidebar = ref(false);
</script>

<template>
    <div class="relative flex min-h-screen">
        <div class="bg-sidebar-primary text-font-color w-64 space-y-6 px-2 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 easy-in out " :class="{ 'relative -translate-x-0': showSidebar }">
            <RouterLink to="/" id="logo" class="flex items-center space-x-2 px-4 py-4">
                <IconDashboard class="text-2xl"/>
                <span class="text-2xl font-color">DashBoard</span>
            </RouterLink>
            <!-- Start main Nav -->
            <nav>
                <RouterLink to="/admin/" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-secoundary rounded transition duration-200">
                    <IconHome class="text-xl" />
                    <span class="text-xl font-color">Home</span>
                </RouterLink>
                <RouterLink to="/admin/layout" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-secoundary rounded transition duration-200">
                    <IconEdit class="text-xl" />
                    <span class="text-xl font-color">Layout</span>
                </RouterLink>
                <RouterLink to="/admin/config" class="flex items-center space-x-2 py-3 px-4 hover:bg-sidebar-secoundary rounded transition duration-200">
                    <IconConfig class="text-xl" />
                    <span class="text-xl font-color">Config</span>
                </RouterLink>
            </nav>
        </div>
    </div>
    <div class="overflow-hidden bg-primary">
        <div class="bg-sidebar-primary px-4 py-4 md:hidden">
            <button @click="showSidebar = !showSidebar">
                <IconStack class="text-3xl text-white"/>
            </button>
        </div>
    </div>
</template>