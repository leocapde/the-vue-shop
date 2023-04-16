<script setup>
import { storeToRefs } from "pinia";
import ProductsCard from "./ProductsCard.vue";
import ProductsFilter from "./ProductsFilter.vue";
import { useProductsStore } from "../stores/products";
const { products, filter } = storeToRefs(useProductsStore());
</script>

<template>
  <section id="ProductsList">
    <ProductsFilter />
    <div class="productsList-container" :class="filter">
      <ProductsCard
        v-if="products"
        v-for="product in products"
        :class="product.categorie"
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

<style scoped lang="scss">
#ProductsList {
  padding: 25px 0;
}
.productsList-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  // Extra-large screen
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Large screen
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Medium screen
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &.pc .products-card:not(.pc),
  &.smartphones .products-card:not(.smartphones),
  &.moniteurs .products-card:not(.moniteurs),
  &.tablettes .products-card:not(.tablettes) {
    display: none;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
