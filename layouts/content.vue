<template>
  <div class="content-slide">
    <div class="header">
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="slide-title">{{ title }}</h1>
      <p class="intro" v-if="intro">{{ intro }}</p>
    </div>
    <div class="body"><slot /></div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, default: "" },
  intro: { type: String, default: "" },
});
</script>

<style scoped>
.content-slide {
  height: 100%;
  padding: 2.3rem 3rem 1.6rem;
  display: flex;
  flex-direction: column;
}
.header { margin-bottom: 0.9rem; }
.intro {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--c-moss);
  margin-top: 0.6rem;
  max-width: 90%;
}
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
}
</style>
