<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap');
* {
  font-family: Roboto, sans-serif;
}
body {
  margin: 0;
  padding: 0;
}

/* Estilos para el contenedor principal */
#app {
  margin: 20px; /* Ajusta los márgenes a tu preferencia */
}

/* Aplicar estilos generales a todos los elementos */
* {
  box-sizing: border-box; /* Asegura que el box model sea uniforme */
  font-family: Roboto, sans-serif;
}
</style>
