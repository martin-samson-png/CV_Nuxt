<template>
  <div class="question">
    <div class="content-section">
      <h3>{{ question.title }} :</h3>
      <ul v-if="question.type === 'single'">
        <li v-for="(opt, i) in question.options" :key="opt.id">
          <label :for="`answer${i}`">
            <input
              :id="`answer${i}`"
              type="radio"
              name="answer"
              v-model="answer"
              :value="opt.label"
            />
            {{ opt.label }}
          </label>
        </li>
      </ul>
      <ul v-else-if="question.type === 'multi'">
        <li v-for="(opt, i) in question.options" :key="opt.id">
          <label :for="`answer${i}`">
            <input
              type="checkbox"
              :id="`answer${i}`"
              :value="opt.id"
              v-model="answer"
            />{{ opt.label }}
          </label>
        </li>
      </ul>
      <div v-else>
        <input
          type="number"
          :min="question.min"
          :max="question.max"
          v-model.number="answer"
        />
      </div>
    </div>
    <div class="btn-section">
      <button
        :class="!hasAnswer ? 'btn-disabled' : 'btn-primary'"
        :disabled="!hasAnswer"
        @click="emit('answer', answer)"
      >
        Question suivante
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const props = defineProps({ question: Object });
const answer = ref(null);
const emit = defineEmits(["answer"]);
const hasAnswer = computed(() => {
  switch (props.question.type) {
    case "single":
      return answer.value !== null;
    case "number":
      return typeof answer.value === "number" && !Number.isNaN(answer.value);
    case "multi":
      return Array.isArray(answer.value);
  }
});
watch(
  () => props.question,
  (q) => {
    if (q.type === "single") answer.value = null;
    else if (q.type === "number") answer.value = 0;
    else if (q.type === "multi") answer.value = [];
  }
);
</script>

<style>
.question {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h3 {
  font-size: 22px;
  margin: 1rem 0 0.5rem;
}
ul {
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 0.5rem;
}
li {
  list-style: none;
  font-weight: 600;
  font-size: 18px;
}

.content-section {
  height: 10rem;
}

.btn-section {
  display: flex;
  justify-content: flex-end;
  height: 10%;
}

.btn-section button {
  transition: 0.5s;
  width: auto;
}

input[type="number"] {
  width: 6rem;
  margin-top: 1rem;
  padding: 0.3rem 0.6rem;
  font-size: 16px;
  color: #1f1f1f;
  background: #fff;
  border: 2px solid #e6e6ef;
  border-radius: 0.6rem;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}
input[type="number"]:focus {
  outline: none;
  border-color: #9b59b6;
  box-shadow: 0 0 0 3px #9b59b620;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}
</style>
