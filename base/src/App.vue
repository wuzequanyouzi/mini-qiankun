<script setup lang="ts">
const handleClick = (name: string) => {
  if (name === '/') {
    history.pushState({}, '', '/');
  } else {
    history.pushState({}, '', '/subapp/'+ name)
  }
}
</script>

<template>
  <div>
    <a @click="handleClick('vue2')">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a @click="handleClick('/')">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div id="container"></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
