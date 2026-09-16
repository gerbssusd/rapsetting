<template>
  <div class="figure-slide">
    <div class="header">
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="slide-title">{{ title }}</h1>
    </div>
    <div class="body" :class="{ solo: !$slots.default }">
      <div class="image-wrap">
        <img :src="image" class="diagram" />
      </div>
      <div class="side" v-if="$slots.default">
        <slot />
        <div class="caption" v-if="caption">{{ caption }}</div>
      </div>
      <div class="caption solo" v-else-if="caption">{{ caption }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  caption: { type: String, default: "" },
});
</script>

<style scoped>
.figure-slide {
  height: 100%;
  padding: 2.1rem 2.6rem 1.4rem;
  display: flex;
  flex-direction: column;
}
.header { margin-bottom: 0.6rem; }
.body {
  flex: 1;
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.6rem;
  min-height: 0;
}
.body.solo {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}
.image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-white);
  border-radius: 16px;
  border: 1px solid rgba(27, 67, 50, 0.14);
  box-shadow: 0 6px 24px rgba(14, 42, 32, 0.08);
  padding: 0.6rem;
  min-height: 0;
}
.diagram {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}
.side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
}
.caption {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.78rem;
  color: var(--c-moss);
  margin-top: 0.4rem;
}
.caption.solo {
  text-align: center;
  align-self: start;
}
</style>
