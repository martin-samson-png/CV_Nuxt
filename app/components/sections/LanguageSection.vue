<template>
  <section class="skills">
    <UiCard v-for="s in skills" :skill="s" />
  </section>
</template>

<script setup>
const skills = [
  {
    icon: "fa6-brands:figma",
    name: "Figma",
    descr:
      "Le bac à sable des designers : on bouge des rectangles jusqu’à ce que ça fasse une app (et ça collabore très bien).",
  },
  {
    icon: "fa6-brands:html5",
    name: "HTML5",
    descr:
      "Le squelette du web. Sans lui, ton site tient debout… mais pas très glam",
  },
  {
    icon: "fa6-brands:css3",
    name: "CSS3",
    descr:
      " Magie noire pour faire tenir trois colonnes partout. Flexbox/Grid = vie sauve.",
  },
  {
    icon: "fa6-brands:js",
    name: "JavaScript",
    descr:
      "La caféine du navigateur : rend les pages vivantes (et parfois un peu trop).",
  },
  {
    icon: "fa6-brands:vuejs",
    name: "VueJS",
    descr: "Le framework “zen” : réactif, simple, on respire et ça ship.",
  },
  {
    icon: "fa6-brands:react",
    name: "React",
    descr:
      "Des composants, des hooks, et un écosystème qui a plus d’extensions qu’un navigateur en 2010.",
  },
  {
    icon: "fa6-brands:node",
    name: "NodeJS",
    descr:
      "JavaScript côté serveur : rapide, bavard, adore les callbacks (promises now, promis).",
  },
  {
    icon: "simple-icons:prisma",
    name: "Prisma",
    descr:
      "L’ORM qui te rend SQL-friendly : schémas lisibles, types costauds, migrations propres.",
  },
  {
    icon: "simple-icons:mongodb",
    name: "MongoDB",
    descr:
      "Base NoSQL “documents”. Tu mets un JSON, tu ressors un JSON. Liberté, parfois chaos.",
  },
  {
    icon: "simple-icons:mysql",
    name: "MySQL",
    descr: "Le classique du web. Solide, rapide, pas trop capricieux.",
  },
  {
    icon: "simple-icons:postgresql",
    name: "PostgreSQL",
    descr:
      "Le studieux de la bande : SQL musclé, JSON qui va bien, extensions puissantes.",
  },
  {
    icon: "simple-icons:docker",
    name: "Docker",
    descr:
      "“Ça marche chez moi” en production : tout dans un container, peace of mind.",
  },
];
</script>

<style scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
}
</style>
