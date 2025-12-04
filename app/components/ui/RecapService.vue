<template>
  <div class="recap">
    <h3>Estimation:</h3>
    <ul>
      <li v-for="(p, i) in sumPrice">
        {{ quiz?.steps?.[i]?.title }} : {{ p.answer }} {{ p.price }}
      </li>
    </ul>
    <div class="total">
      <span>Total :</span><span class="price">{{ total.total }} €</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  quiz: Object,
  answers: Array,
});

const total = computed(() => {
  if (!props?.quiz?.steps?.length) return 0;

  let prices = [];
  let total = 0;

  props.quiz.steps.forEach((step, i) => {
    if (Array.isArray(step.options) && step.type === "single") {
      const idx = step.options.findIndex((a) =>
        Object.values(a).includes(props.answers?.[i])
      );
      const impact = step.options?.[idx]?.impact;

      if (impact?.type === "days") {
        prices.push({
          price: props.quiz.tjm * impact.value,
          answer: props.answers[i],
        });
        total += props.quiz.tjm * impact.value;
      }
    }
    if (step.type === "number") {
      const impact = step.perUnitImpact;
      if (impact?.type === "days") {
        total += props.quiz.tjm * (props.answers[i] * impact.value);
        prices.push({
          price: props.quiz.tjm * (props.answers[i] * impact.value),
          answer: props.answers[i],
        });
      }
    }
    if (Array.isArray(step.options) && step.type === "multi") {
      props?.answers?.[i]?.map((answer) => {
        const idx = step.options.findIndex((a) =>
          Object.values(a).includes(answer)
        );
        const impact = step.options?.[idx]?.impact;
        if (impact?.type === "days") {
          total += props.quiz.tjm * impact.value;
          prices.push({
            price: props.quiz.tjm * impact.value,
            answer: props.answers[i],
          });
        }

        if (impact?.type === "fixed") {
          total += impact.value;
          prices.push({ price: impact.value, answer: props.answers[i] });
        }
      });
    }
  });

  return { total, prices };
});

const arraysEqual = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((x, i) => Object.is(x, b[i]));

const sumPrice = computed(() => {
  const items = total.value.prices ?? [];
  let sum = [];

  for (let i = 0; i < items.length - 1; i++) {
    const a = items[i];
    const b = items[i + 1];

    if (
      Array.isArray(a.answer) &&
      a.answer.length > 1 &&
      arraysEqual(a.answer, b.answer)
    ) {
      sum.push({ price: a.price + b.price, answer: a.answer });
    } else sum.push({ price: a.price, answer: a.answer });
  }

  return sum;
});

console.log(sumPrice.value);
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}

.total {
  padding: 1rem 0 0 0.5rem;
  display: flex;
  gap: 10px;
}

.price {
  font-weight: 600;
}

li {
  display: flex;
  gap: 10px;
}
</style>
