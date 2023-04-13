<script setup>
import ValidateBtn from "./buttons/ValidateBtn.vue";
</script>

<template>
  <div id="CartTotal">
    <h4 class="cart-total-price">Prix total : <slot name="totalPrice" /></h4>
    <div class="cart-total-description">
      <div class="cart-total-description-item">
        <span>Retrait en magasin :</span> indisponible
      </div>
      <div class="cart-total-description-item">
        <span>Retrait point relais :</span> offert
      </div>
      <div class="cart-total-description-item">
        <span>Livraison domicile :</span> offerte
      </div>
      <div class="cart-total-description-item">
        <span>Délai de livraison :</span> 2 à 3 jours ouvrés
      </div>
    </div>
    <slot name="validateCart"></slot>
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

  &-description {
    padding: 15px 0;

    &-item {
      border-top: 1px solid var(--color-border);
      padding: 10px 0;

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
