<template>
  <div class="progress">
    <div>Etape {{ value + 1 }}/{{ max + 1 }}</div>
    <progress :value="value" :max="max" />
  </div>
</template>

<script setup>
defineProps({ value: Number, max: Number });
</script>

<style>
.progress {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress progress {
  width: 100%;
}
</style>
