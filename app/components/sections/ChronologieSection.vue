<template>
  <section @click.self="close">
    <div
      class="timeline"
      v-for="(e, index) in experiences"
      :key="e.value ?? index"
      @click.self="close"
    >
      <div class="line"></div>
      <div class="experiences">
        <div class="date">
          <span>{{ e.date }}</span>
        </div>

        <button
          :class="
            activeIndex === index
              ? 'btn-clicked btn-circle'
              : 'btn-primary btn-circle'
          "
          @click="open(index)"
        ></button>

        <div class="title">
          <span>{{ e.title }}</span>
        </div>

        <Modale
          :lists="lists[index]"
          :is-active="activeIndex === index"
          @close="close"
        />
      </div>
      <div class="col" v-if="index === experiences.length - 1">
        <div class="last-line"></div>
        <Icon name="fa6-solid:angle-down" class="faAngleDown" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const open = (i) => {
  activeIndex.value = i;
};
const close = () => {
  activeIndex.value = null;
};

const experiences = [
  { value: "bac", title: "Bac ES", date: "2019" },
  { value: "mcdo", title: "McDonald's", date: "2019-2024" },
  { value: "afec", title: "TP Développeur Web et Web Mobile", date: "2025" },
];

const lists = [
  [
    {
      descr: "2019 — Baccalauréat ES, lycée Condorcet.",
    },
  ],
  [
    {
      id: 2,
      title: "Team Member → Trainer",
      descr:
        "Juil. 2019 → Août 2022 — McDonald’s Bordeaux (Bassin à flot) : service client, travail d’équipe, puis formation des nouvelles recrues.",
    },
    {
      title: "Shift Manager",
      descr:
        "Sept. 2022 → Janv. 2024 — Manager : supervision des équipes, pilotage des opérations et des performances au quotidien.",
    },
    {
      title: "FL1 Certification (Fundamentals of Leadership Level 1)",
      descr:
        "Certification/formation en leadership : coordination d’équipe et gestion des conflits.",
    },
  ],
  [
    {
      descr: `Depuis mars 2025 — Formation Développeur Web & Mobile à l’AFEC Pau (HTML, CSS, JavaScript, React, Node.js, SQL).`,
    },
  ],
];
</script>

<style scoped>
section {
  padding: 2rem;
}

.col {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.experiences {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
}

.line {
  width: 5px;
  height: 16vh;
  background-color: #6c757d;
  border-radius: 30px;
}

.last-line {
  width: 5px;
  height: 10vh;
  background-color: #6c757d;
  border-radius: 30px;
}

.date {
  display: flex;
  justify-content: end;
  width: 48%;
}

.title {
  width: 48%;
}

.btn-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.btn-clicked {
  background-color: var(--btn-second);
  border: 1px solid var(--btn-third);
}

.faAngleDown {
  font-size: 35px;
  color: #6c757d;
}
</style>
