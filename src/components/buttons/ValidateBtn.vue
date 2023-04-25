<template>
  <button class="ValidateBtn green">
    <slot name="validateBtn" />
  </button>
</template>

<style scoped lang="scss">
.ValidateBtn {
  text-align: center;
  background: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 0;
  border: 2px solid hsla(160, 100%, 37%, 0.2);
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  &:active {
    background: none;
  }
}
</style>
