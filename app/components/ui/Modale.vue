<template>
  <div class="modale" v-show="isActive" @click.self="close">
    <ul>
      <li
        v-for="item in lists"
        :key="item.id ?? item.value ?? item.title ?? item.descr"
      >
        <strong v-if="item.title">{{ item.title }}</strong>
        <br v-if="item.title" />
        {{ item.descr }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  lists: { type: Array, default: () => [] },
  isActive: { type: Boolean, default: false },
});
const emit = defineEmits(["close"]);
</script>

<style>
.modale {
  text-align: justify;
  position: absolute;
  width: 45%;
  left: 3%;
  color: var(--text-second);
  background-image: linear-gradient(to bottom, #c49fff, #8e44ad);
  border: 2px var(--btn-second) solid;
  border-radius: 10px;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
  padding: 0 1rem;
}
</style>
