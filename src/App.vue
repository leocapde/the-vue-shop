<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <RouterView />
  </div>
  <Footer />
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover,
  button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

main {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 25px;
}
</style>
