<script>
export default {
   name: 'refresh',
   methods: {
      refresh() {
         window.location.reload();
      },
   }
}
</script>

<template>
        <div class="px-4">
            <button v-on:click="refresh()" class="text-secondary font-medium rounded-lg px-4 py-2 bg-button hover:bg-button-hover duration-300">Refresh Page</button>
        </div>
</template>