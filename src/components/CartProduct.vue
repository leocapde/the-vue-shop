<template>
  <div class="cart-product">
    <div class="cart-product-left">
      <div class="cart-product-left-img">cf: Image</div>
      <div class="cart-product-left-description">
        <h4 class="cart-product-title"><slot name="title" /></h4>
        <p class="cart-product-text green">Disponible ✓</p>
      </div>
    </div>
    <div class="cart-product-right">
      <p class="cart-product-price">Prix : <slot name="price" /> €</p>
      <p class="cart-product-quantity">Quantité : <slot name="quantity" /></p>
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-product {
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;

    &-img {
      height: 150px;
      width: 200px;
      border-radius: 10px;
      border: 1px solid var(--color-border);
      padding: 10px;
    }

    &-description {
      padding: 0 10px;
      flex: 1;
    }
  }

  &-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  &-right {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  &-price {
    font-weight: bold;
  }
}
</style>
