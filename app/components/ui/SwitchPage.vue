<template>
  <div>
    <NuxtLink
      class="nav-link"
      :to="
        path
          ? `/${path}/${link.toLowerCase().split(' ').join('')}`
          : `/${link.toLowerCase().split(' ').join('')}`
      "
    >
      <button
        :class="
          index === 'prev'
            ? 'btn-primary cssbuttons-io-button-left'
            : 'btn-primary cssbuttons-io-button-right'
        "
      >
        <div class="icon-left" v-if="index % 2 === 0">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.828 11l5.364-5.364-1.414-1.414L4 12l7.778 7.778 1.414-1.414L7.828 13H20v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
        {{ link }}
        <div class="icon-right" v-if="index === 'next'">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div></button
    ></NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({ path: String, link: String, index: String });
console.log(props.link);
</script>

<style>
@import url("../../assets/css/font.css");

.cssbuttons-io-button-right {
  padding: 0.35em 1.2rem;
  font-size: 18px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em var(--btn-second);
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button-right .icon-right {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button-right:hover .icon-right {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button-right .icon-right svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: var(--btn-primary);
}

.cssbuttons-io-button-right:hover .icon-right svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button-right:active .icon-right {
  transform: scale(0.95);
}

.cssbuttons-io-button-left {
  padding: 0.35em 1.2rem;
  font-size: 18px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: inset 0 0 1.6em -0.6em var(--btn-second);
  overflow: hidden;
  position: relative;
  height: 2.8em;
  cursor: pointer;
}

.cssbuttons-io-button-left .icon-left {
  background: white;
  margin-right: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  left: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button-left:hover .icon-left {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button-left .icon-left svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: var(--btn-primary);
}

.cssbuttons-io-button-left:hover .icon-left svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button-left:active .icon-left {
  transform: scale(0.95);
}
</style>
