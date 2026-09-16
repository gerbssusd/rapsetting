<template>
  <div class="quote-slide">
    <div class="header">
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="slide-title">{{ title }}</h1>
    </div>
    <div class="quote-panel">
      <div class="mark">&ldquo;</div>
      <p class="quote-text">{{ quote }}</p>
      <div class="attribution" v-if="quoteCitation">&mdash; {{ quoteCitation }}</div>
    </div>
    <div class="notes compact" v-if="$slots.default"><slot /></div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, default: "" },
  quote: { type: String, default: "" },
  quoteCitation: { type: String, default: "" },
});
</script>

<style scoped>
.quote-slide {
  height: 100%;
  padding: 2.1rem 3rem 1.6rem;
  display: flex;
  flex-direction: column;
}
.quote-panel {
  background: linear-gradient(180deg, #ffffff, #fbf5f9);
  border: 1px solid rgba(107, 45, 92, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(74, 30, 64, 0.08);
  padding: 1.1rem 2.2rem 1rem;
  position: relative;
  margin: 0.3rem 0 0.7rem;
}
.mark {
  font-family: var(--font-serif);
  font-size: 2.6rem;
  color: var(--c-violet);
  opacity: 0.35;
  line-height: 1;
  position: absolute;
  top: 0.35rem;
  left: 1.1rem;
}
.quote-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.22rem;
  line-height: 1.38;
  color: var(--c-violet-deep);
  margin: 0.4rem 0.5rem 0.4rem 2.1rem;
}
.attribution {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--c-forest-deep);
  text-align: right;
}
.notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.6rem;
  flex: 1;
  min-height: 0;
}
.notes.compact :deep(.card) {
  padding: 0.7rem 0.9rem;
}
.notes.compact :deep(.head) {
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}
.notes.compact :deep(.body) {
  font-size: 0.86rem;
  line-height: 1.35;
}
</style>
