<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/products";
import Banner from "./Banner.vue";
const { product } = storeToRefs(useProductsStore());
</script>

<template>
  <section id="ProductShowing">
    <div class="product-showing-img">cf: Image</div>
    <div class="product-showing-description">
      <h3 class="product-showing-title">{{ product.name }}</h3>
      <div class="product-showing-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        voluptate, quae incidunt explicabo quidem nam sit earum doloribus
        facilis rem natus adipisci sequi mollitia omnis aliquid doloremque illo
        dolorem perspiciatis quasi ipsa. Et labore necessitatibus, porro
        eligendi saepe aliquam magnam, mollitia earum explicabo excepturi aut!
        Est, ipsum voluptas. Fugiat, dignissimos.
      </div>
      <div class="product-showing-price">{{ product.price }}€</div>
      <button class="product-showing-btn green">Ajouter au panier 🛒</button>
    </div>
    <div class="product-showing-spec" v-if="product.specs">
      <h4 class="product-showing-spec-title">Caractéristiques</h4>
      <div
        class="product-showing-spec-item"
        v-for="(value, key, index) in product.specs"
        :key="index"
      >
        <span>{{ key }} :</span> {{ value }}
      </div>
    </div>
  </section>
  <Banner />
</template>

<script>
const { getProduct } = useProductsStore();

export default {
  mounted() {
    const route = parseInt(this.$route.params.id);
    getProduct(route);
  },
};
</script>

<style scoped lang="scss">
#ProductShowing {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row: 1fr;

  // Medium screen
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.product-showing {
  &-img {
    grid-column: 1;
    grid-row: 1;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    position: relative;

    // Medium screen
    @media (max-width: 768px) {
      grid-column: 1;
      grid-row: 1;
      border-radius: 10px 10px 0 0;
      min-height: 250px;
    }
  }

  &-description {
    grid-column: 2;
    grid-row: 1;
    padding: 25px;
    border-radius: 0 10px 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr) / autoflex;

    // Medium screen
    @media (max-width: 768px) {
      grid-column: 1;
      grid-row: 2;
      border-radius: 0 0 10px 10px;
    }
  }

  &-title {
    font-weight: bold;
    font-size: 2rem;
    padding: 25px 0;
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  &-text {
    grid-column: 1 / span 2;
    grid-row: 2;
    margin-bottom: 25px;
  }

  &-price {
    padding: 15px 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  &-btn {
    background: none;
    cursor: pointer;
    padding: 10px 25px;
    margin: auto;
    border: 2px solid hsla(160, 100%, 37%, 0.2);
    border-radius: 10px;
    font-size: 1rem;

    &:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }

    &:active {
      background: none;
    }
  }

  &-spec {
    grid-column: 1 / span 2;
    grid-row: 2;
    margin-top: 25px;
    padding: 10px 20px;
    // border: 1px solid var(--color-border);
    border-radius: 10px;

    // Medium screen
    @media (max-width: 768px) {
      grid-column: 1;
      grid-row: 3;
    }

    &-title {
      font-weight: bold;
      font-size: 1.4rem;
      padding: 10px 0 20px 0;
    }

    &-item {
      border-top: 1px solid var(--color-border);
      padding: 20px 0;

      &:first-child {
        border: none;
      }

      span {
        font-weight: bold;
      }
    }
  }
}
</style>
