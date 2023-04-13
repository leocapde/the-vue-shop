<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart";
import CartProduct from "../components/CartProduct.vue";
import CartTotal from "../components/CartTotal.vue";
import DeleteBtn from "../components/buttons/DeleteBtn.vue";
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
          <template #title>{{ item.name }}</template>
          <template #quantity>{{ item.quantity }}</template>
          <template #price>{{ item.price }}</template>
          <template #totalPrice>{{ item.totalPrice }}</template>
          <template #btn
            ><DeleteBtn v-on:click="deleteToCart(item.id)">
              <template #deleteBtn>Supprimer</template>
            </DeleteBtn></template
          >
        </CartProduct>
      </div>
      <div class="cart-showing-total">
        <CartTotal>
          <template #totalPrice>{{ this.totalPrice }} €</template>
          <template #blabla>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit iste quis excepturi, possimus suscipit consequuntur
            quidem perferendis dolorem alias. Molestias id officiis veritatis
            error aliquam!
          </template>
        </CartTotal>
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

  &-items {
    flex: 1;
  }

  &-total {
    margin-left: 10px;
    width: 300px;
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
</style>
