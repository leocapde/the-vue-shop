<template>
  <section id="Banner">
    <div class="banner-container">
      <div class="banner-text-container">
        <div class="banner-text">
          <h3 class="banner-text-title">Produits</h3>
          <p class="banner-text-description">
            Découvrez maintenant une selection de nos meilleurs produits
          </p>
          <RouterLink to="/products" class="banner-text-btn"
            >Voir nos produits</RouterLink
          >
        </div>
      </div>
      <div class="banner-img-container">Photo</div>
    </div>
  </section>
</template>

<style scoped>
#Banner {
  margin-top: 50px;
}
.banner-container {
  display: flex;
}

.banner-text-container {
  flex: 1;
  background-color: var(--color-background-soft);
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-text {
  padding: 50px;
}

.banner-text-title {
  font-weight: bold;
}

.banner-text-description {
  margin: 10px 0;
}

.banner-text-btn {
  padding: 10px 0;
}

.banner-img-container {
  flex: 1;
  background-color: var(--color-background-mute);
  border-radius: 0 10px 10px 0;
}
</style>
