<template>
  <section id="Showcase">
    <h2 class="showcase-title">Showcase</h2>
    <div class="showcase-container">
      <div class="showcase-item showcase-item-one">PC</div>
      <div class="showcase-item showcase-item-two">Smartphones</div>
      <div class="showcase-item showcase-item-four-top">Moniteurs</div>
      <div class="showcase-item showcase-item-four-bottom">Tablettes</div>
    </div>
  </section>
</template>

<style scoped>
.showcase-title {
  font-size: 2rem;
}
.showcase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
}

.showcase-item {
  background-color: var(--color-background-soft);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 1.2rem;
}

.showcase-item-one {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  aspect-ratio: 1;
}

.showcase-item-two {
  grid-column: 3;
  grid-row: 1 / span 2;
}
</style>
