<script setup>
import iphone14 from "../assets/products/iphone-14-min.jpeg";
import macbookpro14 from "../assets/products/macbookpro14-min.jpeg";
import ipad from "../assets/products/ipad-min.jpeg";
import studioDisplay from "../assets/products/studio-display-min.jpeg";

import { useProductsStore } from "../stores/products";
const { toggleFilter } = useProductsStore();
</script>

<template>
  <section id="Showcase">
    <div class="showcase-container">
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-one"
        v-on:click="toggleFilter('pc')"
      >
        <img
          class="showcase-item-img"
          :src="macbookpro14"
          alt="MacBook Pro 14 pouces"
        />
        <div class="showcase-item-container">PC</div>
      </RouterLink>
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-two"
        v-on:click="toggleFilter('smartphones')"
      >
        <img
          class="showcase-item-img"
          :src="iphone14"
          alt="MacBook Pro 14 pouces"
        />
        <div class="showcase-item-container">Smartphones</div>
      </RouterLink>
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-four-top"
        v-on:click="toggleFilter('moniteurs')"
      >
        <img
          class="showcase-item-img"
          :src="studioDisplay"
          alt="MacBook Pro 14 pouces"
        />
        <div class="showcase-item-container">Moniteurs</div>
      </RouterLink>
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-four-bottom"
        v-on:click="toggleFilter('tablettes')"
      >
        <img
          class="showcase-item-img"
          :src="ipad"
          alt="MacBook Pro 14 pouces"
        />
        <div class="showcase-item-container">Tablettes</div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
#Showcase {
  padding: 25px 0;
}

.showcase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
}

.showcase-item {
  border-radius: 10px;
  font-size: 1.2rem;
  min-height: 250px;

  &-one {
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;

    @media (max-width: 992px) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }

    @media (max-width: 768px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
  }

  &-two {
    grid-column: 3;
    grid-row: 1 / span 4;

    @media (max-width: 992px) {
      grid-column: 1 / span 2;
      grid-row: 3 / span 2;
    }

    @media (max-width: 768px) {
      grid-column: 1 / span 4;
      grid-row: 2;
    }
  }

  &-four {
    &-top {
      grid-column: 4;
      grid-row: 1 / span 2;

      @media (max-width: 992px) {
        grid-column: 3 / span 2;
        grid-row: 1 / span 2;
      }

      @media (max-width: 768px) {
        grid-column: 1 / span 4;
        grid-row: 3;
      }
    }

    &-bottom {
      grid-column: 4;
      grid-row: 3 / span 2;

      @media (max-width: 992px) {
        grid-column: 3 / span 2;
        grid-row: 3 / span 2;
      }

      @media (max-width: 768px) {
        grid-column: 1 / span 4;
        grid-row: 4;
      }
    }
  }

  &-img {
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  &-container {
    font-weight: bold;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100%;
    transition: 0.4s;
    color: black;
    text-shadow: 1px 1px 1px white;
    font-size: 1.5rem;

    &:hover {
      padding-bottom: 25px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
}
</style>
