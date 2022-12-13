<script>
import { ref } from 'vue';
export default {
  data() {
    return {
    }
  }
}
export const showSidebar = Object.freeze({
  showSidebar: ref(true)
});
</script>

<template>
  <button @click="showSidebar = !showSidebar">Sidebar: {{showSidebar}}</button>
</template>