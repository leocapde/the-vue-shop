<script setup>
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
      <div class="banner-img-container">cf: Backgroud</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#Banner {
  padding: 25px 0;
}

.banner-container {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
}

.banner-text-container {
  flex: 1;
  background-color: var(--color-background-mute);
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    border-radius: 0 0 10px 10px;
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
  flex: 1;
  background-color: var(--color-background-soft);
  border-radius: 0 10px 10px 0;
  padding: 10px;

  @media (max-width: 768px) {
    border-radius: 10px 10px 0 0;
    min-height: 200px;
  }
}
</style>
