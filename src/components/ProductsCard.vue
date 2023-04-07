<template>
  <RouterLink to="" class="products-card">
    <div class="products-card-container">
      <h4 class="products-card-title">
        <slot name="title" />
      </h4>
      <p class="products-card-price">
        <slot name="price" />
      </p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.products-card {
  background-color: var(--color-background-mute);
  aspect-ratio: 1;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  transition: 0.4s;
  display: grid;
  grid-template-columns: 1fr;

  &-container {
    margin: 0;
    padding: 10px;
    border-radius: 10px;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: end;

    &:hover {
      padding-bottom: 25px;
      background-color: var(--color-background-soft);
    }
  }

  &-title {
    font-weight: bold;
    font-size: 1.5rem;
  }
}
</style>
