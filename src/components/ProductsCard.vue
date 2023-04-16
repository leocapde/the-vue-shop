<template>
  <RouterLink to="" class="products-card">
    <div class="products-card-img">
      <slot name="img" />
    </div>
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
  aspect-ratio: 1;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  transition: 0.4s;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 250px;
  border: 1px solid var(--color-border);
  color: black;
  text-shadow: 0 0 5px white;

  @media (max-width: 768px) {
    aspect-ratio: auto;
  }

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
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
  }

  &-img {
    position: absolute;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}
</style>
