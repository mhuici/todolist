<template>
  <header class="flex bg-gray-800 text-white py-4">
    <nav class="container mx-auto flex items-center justify-between px-4">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="@/assets/logo.svg" alt="Logo" class="h-10 mr-2">
          <span class="text-xl font-bold sm:block">Marianos Todo</span>
        </router-link>
      </div>
      <div>
        <ul class="flex space-x-4">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="font-medium hover:text-gray-300">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
  
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const routes = ref([
  { path: '/', name: 'To do' },
  { path: '/about', name: 'About' },
]);
</script>
  
<style lang="scss" scoped>


header {

  height: 72px;
}

.nav {
  gap: 16px;
}

.logoContainer {
  margin-bottom: 16px;
}

img {
  max-width: 50px;
}

.container {
  display: flex;
  align-items: center;
  padding: 25px 16px
}
</style>