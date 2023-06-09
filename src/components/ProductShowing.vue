<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import ValidateBtn from "./buttons/ValidateBtn.vue";
import DeleteBtn from "./buttons/DeleteBtn.vue";

const { product } = storeToRefs(useProductsStore());
const { addToCart } = useCartStore();
</script>

<template>
  <section id="ProductShowing" :key="$route.params.id">
    <div class="product-showing-img" v-if="product.img">
      <img :src="product.img" />
    </div>
    <div class="product-showing-img" v-else>cf: Image</div>
    <div class="product-showing-description">
      <h3 class="product-showing-title">{{ product.name }}</h3>
      <div class="product-showing-text">
        {{ product.description }}
      </div>
      <div class="product-showing-cart">
        <div class="product-showing-price">{{ product.price }}€</div>
        <ValidateBtn
          class="product-showing-btn"
          v-on:click="
            {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
              });
              confirmProduct();
            }
          "
        >
          <template #validateBtn>Ajouter au panier 🛒</template>
        </ValidateBtn>
      </div>
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

    <!-- Message de confirmation d'ajout -->
    <div class="confirm-wrapper" v-if="addConfirm">
      <div class="confirm-container">
        <p class="confirm-text">Votre produit a bien été ajouté au panier !</p>
        <p class="confirm-title">{{ product.name }}</p>
        <RouterLink class="confirm-link" to="/cart">
          <ValidateBtn class="confirm-link-btn" v-on:click="validateProduct()">
            <template #validateBtn>Voir le panier</template>
          </ValidateBtn>
        </RouterLink>
        <RouterLink class="confirm-link" to="/products">
          <DeleteBtn class="confirm-link-btn" v-on:click="validateProduct()">
            <template #deleteBtn>Continuer votre shopping</template>
          </DeleteBtn>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
const { getProduct } = useProductsStore();

export default {
  data() {
    return {
      addConfirm: false,
    };
  },
  mounted() {
    const route = parseInt(this.$route.params.id);
    getProduct(route);
  },
  updated() {
    const route = parseInt(this.$route.params.id);
    getProduct(route);
  },
  methods: {
    confirmProduct() {
      this.addConfirm = true;
    },
    validateProduct() {
      this.addConfirm = false;
    },
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
    border: 1px solid var(--color-border);
    border-radius: 10px;
    position: relative;
    height: 400px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

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
    display: flex;
    flex-direction: column;

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
  }

  &-text {
    margin-bottom: 25px;
  }

  &-cart {
    display: flex;
    justify-content: space-around;
  }

  &-price {
    padding: 15px 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  &-spec {
    grid-column: 1 / span 2;
    grid-row: 2;
    margin-top: 25px;
    padding: 10px 20px;
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

.confirm {
  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-container {
    background-color: var(--color-background-mute);
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  &-link {
    border-radius: 10px;
    margin: 10px 0;

    &:hover {
      background: none;
    }

    &-btn {
      width: 100%;
    }
  }

  &-text {
    font-weight: bold;
  }

  &-title {
    font-style: italic;
    font-size: 1.3rem;
  }
}
</style>
