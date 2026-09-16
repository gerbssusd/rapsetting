<template>
  <div class="wc-slide">
    <div class="header">
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="slide-title center">{{ title }}</h1>
    </div>
    <div class="wc-panel">
      <p v-for="(e, i) in entries" :key="i" class="wc-entry">{{ e.text }}</p>
    </div>
    <div class="wc-note" v-if="$slots.default"><slot /></div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, default: "" },
  entries: { type: Array, default: () => [] },
});
</script>

<style scoped>
.wc-slide {
  height: 100%;
  padding: 2.3rem 4rem;
  display: flex;
  flex-direction: column;
}
.header { text-align: center; margin-bottom: 1.2rem; }
.slide-title.center { max-width: 100%; text-align: center; margin: 0 auto; }
.wc-panel {
  background: var(--c-white);
  border: 1px solid rgba(27, 67, 50, 0.14);
  border-radius: 16px;
  box-shadow: 0 8px 26px rgba(14, 42, 32, 0.07);
  padding: 2rem 2.6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
}
.wc-entry {
  font-family: var(--font-serif);
  font-size: 1.12rem;
  line-height: 1.6;
  color: var(--c-ink);
  margin: 0 0 0 2rem;
  text-indent: -2rem;
}
.wc-note {
  margin-top: 1rem;
  text-align: center;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  color: var(--c-moss);
}
</style>
