<template>
  <div class="cart-product">
    <div class="cart-product-left">
      <div class="cart-product-left-img"><slot name="img" /></div>
      <div class="cart-product-left-description">
        <h4 class="cart-product-title"><slot name="title" /></h4>
        <p class="cart-product-text green">Disponible ✓</p>
      </div>
    </div>
    <div class="cart-product-right">
      <p class="cart-product-price">Prix : <slot name="price" /> €</p>
      <p class="cart-product-quantity">Quantité : <slot name="quantity" /></p>
      <div class="cart-product-btn">
        <slot name="btn"></slot>
      </div>
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }

  &-left {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &-img {
      height: 200px;
      width: 250px;
      border-radius: 10px;
      overflow: hidden;

      @media (max-width: 768px) {
        height: 100%;
        width: 100%;
      }
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

    @media (max-width: 768px) {
      align-self: flex-end;
    }
  }

  &-price {
    font-weight: bold;
    font-size: 1.3rem;
  }

  &-quantity {
    font-size: 1.2rem;
  }

  &-btn {
    margin: 10px 0;
  }
}
</style>
