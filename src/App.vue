<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <HeaderNav></HeaderNav>
  <RouterView id="RouterView" v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
  <Footer></Footer>
</template>

<style scoped>

/* route transition */
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
