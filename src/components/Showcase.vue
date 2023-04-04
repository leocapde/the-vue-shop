<script setup>
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
        >PC</RouterLink
      >
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-two"
        v-on:click="toggleFilter('smartphones')"
      >
        Smartphones
      </RouterLink>
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-four-top"
        v-on:click="toggleFilter('moniteurs')"
      >
        Moniteurs
      </RouterLink>
      <RouterLink
        to="/products"
        class="showcase-item showcase-item-four-bottom"
        v-on:click="toggleFilter('tablettes')"
      >
        Tablettes
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
#Showcase {
  padding: 25px 0;
}
.showcase-title {
  font-size: 2rem;
}
.showcase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
}

.showcase-item {
  background-color: var(--color-background-soft);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 1.2rem;

  &-one {
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;
    aspect-ratio: 1;

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

  &:hover {
    padding: 25px;
    font-weight: bold;
    background-color: var(--color-background-mute);
  }
}
</style>
