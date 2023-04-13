import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (!item) {
        product.quantity = 1;
        this.cart.push(product);
      } else {
        item.quantity++;
      }
    },
    deleteToCart(id) {
      this.cart = this.cart.filter((item) => item.id != id);
    },
  },
});
