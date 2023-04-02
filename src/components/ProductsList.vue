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
      >
        <template #title>{{ product.name }}</template>
        <template #price>{{ product.price }} €</template>
        <!-- <template #categorie>{{ product.categorie }}</template> -->
      </ProductsCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
.productsList-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  &.pc .products-card:not(.pc),
  &.smartphones .products-card:not(.smartphones),
  &.moniteurs .products-card:not(.moniteurs),
  &.tablettes .products-card:not(.tablettes) {
    display: none;
  }
}
</style>
