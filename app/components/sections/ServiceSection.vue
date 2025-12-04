<template>
  <div class="container">
    <div v-if="state === 'error'">
      <p>Impossible de charger le questionnaire</p>
    </div>
    <div :aria-busy="state === 'loading'">
      <UiQuizService v-if="state === 'idle' && quiz" :quiz="quiz" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const quiz = ref(null);
const state = ref("loading");

onMounted(() => {
  fetch("/quiz.json")
    .then((r) => {
      if (r.ok) return r.json();
      throw new Error("Impossible de récupérer le json");
    })
    .then((data) => {
      quiz.value = data;
      state.value = "idle";
    })
    .catch((e) => {
      state.value = "error";
    });
});
</script>

<style>
.container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
