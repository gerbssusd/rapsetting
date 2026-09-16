<template>
  <div class="end-slide">
    <div class="corner tl"><Sprig :size="60" stroke="#B08D57" leafColor="#EAE1C8" bloomColor="#6B2D5C" :opacity="0.45" /></div>
    <div class="corner br"><Sprig :size="60" stroke="#B08D57" leafColor="#EAE1C8" bloomColor="#6B2D5C" :opacity="0.45" flip /></div>
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <div class="hr" />
      <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});
</script>

<style scoped>
.end-slide {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 100%, #244c3a 0%, #0e2a20 60%, #0a2018 100%);
  color: #fbf9f3;
  overflow: hidden;
  padding: 3rem;
}
.corner { position: absolute; }
.corner.tl { top: 2.2rem; left: 2.4rem; }
.corner.br { bottom: 2.2rem; right: 2.4rem; }
.content { max-width: 760px; text-align: center; z-index: 1; }
.title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 3rem;
  color: #ffffff;
  margin: 0;
}
.hr {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b08d57, transparent);
  margin: 1.4rem auto;
}
.subtitle {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #c7d6cb;
}
</style>
