<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart";
import CartProduct from "../components/CartProduct.vue";
import CartTotal from "../components/CartTotal.vue";
import DeleteBtn from "../components/buttons/DeleteBtn.vue";
import ValidateBtn from "../components/buttons/ValidateBtn.vue";
import Banner from "../components/Banner.vue";
import Trending from "../components/Trending.vue";

const { cart } = storeToRefs(useCartStore());
const { deleteToCart } = useCartStore();
</script>

<template>
  <main id="Cart">
    <div class="cart-empty" v-if="cart.length === 0">
      Votre panier est actuellement vide ...
    </div>
    <div class="cart-showing" v-else>
      <div class="cart-showing-items">
        <CartProduct v-for="item in cart">
          <template #img>
            <img :src="item.img" :alt="item.name" />
          </template>
          <template #title>{{ item.name }}</template>
          <template #quantity>{{ item.quantity }}</template>
          <template #price>{{ item.price }}</template>
          <template #totalPrice>{{ item.totalPrice }}</template>
          <template #btn>
            <DeleteBtn v-on:click="deleteToCart(item.id)">
              <template #deleteBtn>Supprimer</template>
            </DeleteBtn>
          </template>
        </CartProduct>
      </div>
      <div class="cart-showing-total">
        <CartTotal>
          <template #totalPrice>{{ totalPrice }} €</template>
          <template #validateCart>
            <ValidateBtn
              class="cart-showing-total-btn"
              v-on:click="confirmBuy()"
            >
              <template #validateBtn>Valider le panier</template>
            </ValidateBtn>
          </template>
        </CartTotal>
      </div>
    </div>

    <!-- Message de confirmation d'achat -->
    <div class="confirm-wrapper" v-if="buyConfirm">
      <div class="confirm-container">
        <p class="confirm-text">Votre achat a bien été validé !</p>
        <RouterLink class="confirm-link" to="/">
          <ValidateBtn class="confirm-link-btn" v-on:click="validateBuy()">
            <template #validateBtn>Retour page d'accueil</template>
          </ValidateBtn>
        </RouterLink>
      </div>
    </div>

    <Banner />
    <Trending />
  </main>
</template>

<script>
export default {
  data() {
    return {
      totalPrice: 0,
      cart: storeToRefs(useCartStore()),
      buyConfirm: false,
    };
  },
  mounted() {
    if (this.cart["cart"].length != 0) {
      this.cart["cart"].forEach((item) => {
        this.totalPrice += item.price * item.quantity;
      });
    }
  },
  updated() {
    if (this.cart["cart"].length != 0) {
      this.totalPrice = 0;
      this.cart["cart"].forEach((item) => {
        this.totalPrice += item.price * item.quantity;
      });
    }
  },
  methods: {
    confirmBuy() {
      this.buyConfirm = true;
    },
    validateBuy() {
      this.buyConfirm = false;
      this.cart["cart"] = [];
    },
  },
};
</script>

<style scoped lang="scss">
.cart-empty {
  text-align: center;
  font-size: 1.5rem;
  margin: 50px 0;
}

.cart-showing {
  display: flex;
  padding: 50px 0;

  &-items {
    flex: 1;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &-total {
    margin-left: 10px;
    width: 350px;

    &-btn {
      margin: 10px 0;
    }
  }

  // Large screen
  @media (max-width: 992px) {
    flex-direction: column;

    &-items {
      width: 100%;
    }

    &-total {
      margin-left: 0;
      width: 100%;
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
}
</style>
