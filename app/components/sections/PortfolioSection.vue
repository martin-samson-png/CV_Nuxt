<template>
  <section>
    <UiGithubCard
      v-for="p in projects"
      :key="p.title"
      :title="p.title"
      :icon="p.icon"
      :url="p.url"
      :image="p.image"
    />
  </section>
</template>

<script setup>
const projects = [
  {
    title: "TodoList-VueJS",
    url: "https://github.com/martin-samson-png/TodoList-VueJS",
    image: "/image/TodoList_VueJs.png",
    icon: ["fa6-brands:vuejs"],
  },
  {
    title: "portail-evenements-Martin",
    url: "https://github.com/martin-samson-png/portail-evenements-Martin",
    image: "/image/Événements_WordPress.png",
    icon: ["fa6-brands:css3", "fa6-brands:js"],
  },
  {
    title: "Portfolio-NuxtJS",
    url: "https://github.com/martin-samson-png/PortfolioNuxt",
    image: "/image/PortfolioNuxt.png",
    icon: ["fa6-brands:vuejs"],
  },
];
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
}
</style>
