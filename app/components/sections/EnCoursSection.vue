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
    title: "Benelink-Association-Benevole",
    url: "https://github.com/martin-samson-png/Benelink",
    image: "/image/Benelink.png",
    icon: ["fa6-brands:vuejs", "fa6-brands:node"],
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
