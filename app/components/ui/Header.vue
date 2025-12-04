<template>
  <header>
    <NuxtLink to="/" class="nav-link"><h1>Martin Samson</h1></NuxtLink>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--second-color);
}

h1 {
  font-size: 45px;
  color: var(--text);
  width: 100%;
  margin: 0;
}
h1:hover {
  transform: scale(1.01);
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
