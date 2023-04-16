<script setup>
import ProductsCard from "./ProductsCard.vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/products";
const { trending } = storeToRefs(useProductsStore());
</script>

<template>
  <section id="Trending">
    <h3 class="trending-title">Tendances</h3>
    <div class="trending-list">
      <ProductsCard
        v-for="product in trending"
        class="trending-list-item"
        :key="product.id"
        :to="{ name: 'product', params: { id: product.id } }"
      >
        <template #title>{{ product.name }}</template>
        <template #price>{{ product.price }} €</template>
        <template #img v-if="product.img">
          <img :src="product.img" :alt="product.name" />
        </template>
      </ProductsCard>
    </div>
  </section>
</template>

<script>
const { getTrending } = useProductsStore();

export default {
  mounted() {
    getTrending();
  },
};
</script>

<style scoped lang="scss">
#Trending {
  padding: 25px 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.trending {
  &-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &-list {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: scroll;
    border-radius: 10px;

    &-item {
      width: 300px;

      @media (max-width: 768px) {
        width: 250px;
      }
    }
  }
}
</style>
