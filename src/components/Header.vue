<script setup>
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const { resetFilter } = useProductsStore();
const { cart } = storeToRefs(useCartStore());
</script>

<template>
  <header id="Header">
    <div class="header-top">
      <RouterLink to="/" class="title-return-home">
        <div class="title">
          <img alt="Vue logo" class="title-logo" src="@/assets/logo.svg" />
          <h1 class="title-name">The Vue Shop</h1>
        </div>
      </RouterLink>
      <button class="header-menu" v-on:click="changeToggleMenu()">Menu</button>
    </div>
    <nav class="header-nav-list">
      <RouterLink class="header-nav-item" to="/">Accueil</RouterLink>
      <RouterLink
        class="header-nav-item"
        to="/products"
        v-on:click="resetFilter"
        >Produits</RouterLink
      >
      <RouterLink class="header-nav-item" to="/cart">
        Panier
        <div class="cart-counter">
          {{ cart.length }}
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    changeToggleMenu() {
      const nav = document.querySelector(".header-nav-list");
      if (nav.classList.value === "header-nav-list header-nav-list-active") {
        nav.classList.remove("header-nav-list-active");
      } else {
        nav.classList.add("header-nav-list-active");
      }
    },
  },
};
</script>

<style scoped lang="scss">
#Header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background-soft);
  padding: 10px 25px;
  z-index: 1;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.65);

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.title {
  display: flex;
  align-items: center;

  &-logo {
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }

  &-name {
    font-size: 1.8rem;
  }

  &-return-home {
    padding: 10px;
    border-radius: 10px;
    align-self: baseline;
  }
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-menu {
  text-align: center;
  background: none;
  border: 2px solid hsla(160, 100%, 37%, 0.2);
  color: var(--color-text);
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;

  &:active {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.header-nav {
  &-list {
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    transition: 0.4s;

    @media (max-width: 768px) {
      visibility: hidden;
      opacity: 0;
      max-height: 0;
    }

    &-active {
      visibility: visible;
      opacity: 1;
      max-height: 50px;
    }
  }

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  &.router-link-exact-active {
    color: var(--color-text);
  }

  &.router-link-exact-active:hover {
    background-color: transparent;
  }
}

.cart-counter {
  margin-left: 5px;
  background-color: hsla(160, 100%, 37%, 0.2);
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
