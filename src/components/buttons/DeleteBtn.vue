<template>
  <button class="DeleteBtn">
    <slot name="deleteBtn" />
  </button>
</template>

<style scoped lang="scss">
.DeleteBtn {
  text-align: center;
  background: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 10px 0;
  border: 2px solid hsla(0, 100%, 37%, 0.5);
  border-radius: 10px;
  font-size: 1rem;
  color: #ff0000;
  transition: 0.4s;

  &:hover {
    background-color: hsla(0, 100%, 50%, 0.2);
  }

  &:active {
    background: none;
  }
}
</style>
