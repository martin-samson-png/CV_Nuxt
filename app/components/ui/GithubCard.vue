<template>
  <div class="card">
    <img :src="image" :alt="title" />

    <div class="image">
      <Icon
        v-for="i in icon"
        :key="i"
        :name="i"
        :class="icon.length === 1 ? 'icon' : 'icons'"
      />
    </div>

    <div class="card-info">
      <span>{{ title }}</span>
    </div>

    <a :href="url" class="button"
      ><Icon name="tabler:brand-github" class="icons"
    /></a>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  url: String,
  image: String,
  icon: Array,
});
</script>

<style scoped>
.card {
  width: 70vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: #fffffe;
  border-radius: 15px;
  border: 2px solid var(--third-color);
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  inset: 0;
  width: 70vh;
  height: 20vh;
  object-fit: cover;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  z-index: 0;
  transition: all 0.5s ease;
  border: none;
}

.card * {
  z-index: 1;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 90px;
  height: 90px;
  background-color: #1468bf;
  border-radius: 50%;
  border: 4px solid #fefefe;
  margin-top: 30px;
  transition: all 0.5s ease;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  padding-bottom: 2rem;
}

.card-info span {
  font-weight: 600;
  font-size: 24px;
  color: #161a42;
  margin-top: 15px;
  line-height: 5px;
}

.card-info p {
  color: rgba(0, 0, 0, 0.5);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #1468bf;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  transition: all 0.5s ease;
}

.card:hover img {
  height: 50vh;
  transform: scale(0.95);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.card:hover .card-info {
  transform: translate(-250%, 0);
}

.card:hover .image {
  transform: scale(1) translate(-400%, 0);
}

.card:hover .button {
  transform: scale(1) translate(0, 7vh);
}

.button:hover {
  background-color: #ff6844;
  transform: scale(1.1);
}

.icon {
  font-size: 60px;
}
.icons {
  font-size: 30px;
}
</style>
