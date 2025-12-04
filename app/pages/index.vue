<template>
  <section class="home">
    <div
      v-for="(group, index) in grouped"
      :key="index"
      :class="`categorie-nav${index}`"
    >
      <UiLinkButton :categories="group"></UiLinkButton>
    </div>
    <UiPhoto class="photo-profile" />

    <UiSwitchPage class="switch-page" :index="'next'" :link="'Start'" />
  </section>
</template>

<script setup>
const categories = [
  "Portfolio",
  "Contact",
  "Avis",
  "Service",
  "Info perso",
  "Chronologie",
  "Langage",
  "En cours",
];

const grouped = [];
for (let i = 0; i < categories.length; i += 2) {
  grouped.push([categories[i], categories[i + 1]]);
}
</script>
<style scoped>
.home {
  background-color: #121212;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.photo-profile {
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.categorie-nav0,
.categorie-nav1,
.categorie-nav2,
.categorie-nav3 {
  display: flex;
  justify-content: space-between;
  padding: 3% 0;
}

.categorie-nav0,
.categorie-nav3 {
  width: 35%;
}

.categorie-nav1,
.categorie-nav2 {
  width: 50%;
}

.switch-page {
  position: absolute;
  bottom: 1.7rem;
  right: 2rem;
}

@media screen and (min-height: 800px) {
  .photo-profile {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
