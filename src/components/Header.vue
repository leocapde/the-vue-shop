<script setup>
import { useProductsStore } from "../stores/products";
const { resetFilter } = useProductsStore();
</script>

<template>
  <header id="Header">
    <RouterLink to="/" class="title-return-home">
      <div class="title">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="50"
          height="50"
        />
        <h1>The Vue Shop</h1>
      </div>
    </RouterLink>
    <nav class="header-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products" v-on:click="resetFilter">Produits</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
#Header {
  position: sticky;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background-soft);
  padding: 15px;
  z-index: 1;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.65);
}

.title {
  display: flex;
  align-items: center;

  &-return-home {
    padding: 10px;
    border-radius: 10px;
  }
}

.logo {
  margin-right: 10px;
}

nav a {
  display: inline-block;
  font-size: 1.4rem;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  &.router-link-exact-active {
    color: var(--color-text);
  }

  &.router-link-exact-active:hover {
    background-color: transparent;
  }
}
</style>
