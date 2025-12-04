<template>
  <div v-for="categorie in categories" :key="categorie">
    <NuxtLink class="nav-link" :to="`/${categorie.split(' ').join('')}`">
      <button class="btn-primary">
        <span>{{ categorie }}</span>
      </button>
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
  categories: Array,
});
</script>

<style scoped>
button {
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
}

button::before,
button::after {
  content: "";
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
  transform: skew(15deg);
  transition: all 0.5s;
  overflow: hidden;
  z-index: -1;
}

button::before {
  left: -10px;
  background: var(--btn-four);
}

button::after {
  right: -10px;
  background: var(--btn-third);
}

button:hover::before,
button:hover::after {
  width: 58%;
}

button:hover span {
  color: var(--text);
  transition: 0.3s;
}

button span {
  color: var(--text-second);
  font-size: 18px;
  transition: all 0.3s ease-in;
}
</style>
