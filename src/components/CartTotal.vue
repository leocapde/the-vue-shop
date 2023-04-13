<script setup>
import ValidateBtn from "./buttons/ValidateBtn.vue";
</script>

<template>
  <div id="CartTotal">
    <h4 class="cart-total-price">Prix total : <slot name="totalPrice" /></h4>
    <p><slot name="blabla" /></p>
    <ValidateBtn class="cart-total-btn">
      <template #validateBtn>Valider le panier</template>
    </ValidateBtn>
  </div>
</template>

<style scoped lang="scss">
#CartTotal {
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid var(--color-border);
}

.cart-total {
  &-price {
    font-weight: bold;
    font-size: 1.4rem;
    padding: 10px 0;
  }
}
</style>
