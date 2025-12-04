<template>
  <div class="quiz">
    <div class="section">
      <h1>Services & Tarifs</h1>
    </div>
    <div class="section">
      <UiProgressService :value="step" :max="quiz.steps.length - 1" />
    </div>
    <div class="main" v-if="state === 'question'">
      <UiQuestionService :question="question" @answer="addAnswer" />
    </div>
    <UiRecapService v-if="state === 'recap'" :answers="answers" :quiz="quiz" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({ quiz: Object });

const state = ref("question");
const answers = ref(props.quiz.steps.map(() => null));
const step = ref(0);

const question = computed(() => props.quiz.steps[step.value]);
const addAnswer = (answer) => {
  answers.value[step.value] = answer;
  if (step.value === props.quiz.steps.length - 1) state.value = "recap";
  else step.value++;
};
</script>

<style scoped>
.quiz {
  min-height: 20rem;
  min-width: 120%;
  display: flex;
  flex-direction: column;
  background-color: #0e1a2a;
  padding: 1rem 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px var(--btn-primary);
}

h1 {
  font-size: 30px;
  margin: 0;
  padding-bottom: 1rem;
}

.main {
  min-height: 30vh;
}
</style>
