<template>
  <header id="Header">
    <RouterLink to="/" class="title-return-home">
      <div class="title">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="50"
          height="50"
        />
        <h1>The Vue Shop</h1>
      </div>
    </RouterLink>
    <nav class="header-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/products">Produits</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
#Header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background-soft);
  padding: 15px;
  z-index: 999;
}

.title {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.title-return-home {
  padding: 10px;
  border-radius: 10px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
