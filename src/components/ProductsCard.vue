<template>
  <div class="products-card">
    <h4 class="products-card-title">
      <slot name="title"></slot>
    </h4>
    <div class="products-card-price">
      <slot name="price"></slot>
    </div>
    <!-- <div class="products-card-categorie">
      <slot name="categorie"></slot>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.products-card {
  background-color: var(--color-background-soft);
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &-title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  &-categorie {
    font-style: italic;
  }
}
</style>
