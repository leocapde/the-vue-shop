<script setup>
import bannerImg from "../assets/banner.webp";
import ValidateBtn from "./buttons/ValidateBtn.vue";
import { useProductsStore } from "../stores/products";
const { resetFilter } = useProductsStore();
</script>

<template>
  <section id="Banner">
    <div class="banner-container">
      <div class="banner-text-container">
        <div class="banner-text">
          <h3 class="banner-text-title">Produits</h3>
          <p class="banner-text-description">
            Découvrez maintenant une selection de nos meilleurs produits
          </p>
          <RouterLink
            to="/products"
            class="banner-text-link"
            v-on:click="resetFilter"
          >
            <ValidateBtn class="banner-text-btn">
              <template #validateBtn>Découvrir nos produits</template>
            </ValidateBtn>
          </RouterLink>
        </div>
      </div>
      <div class="banner-img-container">
        <img :src="bannerImg" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#Banner {
  padding: 25px 0;
}

.banner-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) / autoflex;
}

.banner-text-container {
  grid-column: 1;
  grid-row: 1 / span 2;
  background-color: var(--color-background-mute);
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    border-radius: 0 0 10px 10px;
    grid-column: 1 / span 2;
    grid-row: 2;
  }
}

.banner-text {
  padding: 50px;

  &-title {
    font-weight: bold;
  }

  &-description {
    margin: 20px 0 30px 0;
  }

  &-link {
    &:hover {
      background: none;
    }
  }
}

.banner-img-container {
  grid-column: 2;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    border-radius: 10px 10px 0 0;
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  img {
    border-radius: 0 10px 10px 0;
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      border-radius: 10px 10px 0 0;
    }
  }
}
</style>
