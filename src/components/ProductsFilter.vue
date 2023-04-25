<template>
  <div id="products-filter">
    <div class="products-filter-btn green active-filter" data-filter="all">
      Tous
    </div>
    <div class="products-filter-btn green" data-filter="pc">PC</div>
    <div class="products-filter-btn green" data-filter="smartphones">
      Smartphones
    </div>
    <div class="products-filter-btn green" data-filter="moniteurs">
      Moniteurs
    </div>
    <div class="products-filter-btn green" data-filter="tablettes">
      Tablettes
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/products";
const { toggleFilter } = useProductsStore();

export default {
  mounted() {
    const buttons = document.querySelectorAll(".products-filter-btn");
    buttons.forEach((button) =>
      button.addEventListener("click", (event) => {
        event.currentTarget.parentElement
          .querySelector(".active-filter")
          .classList.remove("active-filter");
        event.currentTarget.classList.add("active-filter");
        const filter = event.currentTarget.getAttribute("data-filter");
        toggleFilter(filter);
      })
    );
  },
};
</script>

<style scoped lang="scss">
#products-filter {
  display: flex;
  margin: 1rem 0;
  border-left: 1px solid var(--color-border);
  flex-wrap: wrap;
}

.products-filter-btn {
  padding: 0 1rem;
  font-size: 1.2rem;
  border-right: 1px solid var(--color-border);
  cursor: pointer;

  &:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  &.active-filter {
    color: var(--color-text) !important;

    &:hover {
      background-color: transparent;
    }
  }
}
</style>
