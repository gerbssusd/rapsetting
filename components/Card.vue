<template>
  <div class="card" :class="{ accent: accent }">
    <div class="head"><span v-if="n" class="num">{{ n }}</span>{{ head }}</div>
    <div class="body"><slot /></div>
  </div>
</template>

<script setup>
defineProps({
  head: { type: String, default: "" },
  n: { type: [String, Number], default: "" },
  accent: { type: Boolean, default: false },
});
</script>

<style scoped>
.card.accent {
  border-color: var(--c-violet);
  background: linear-gradient(180deg, #ffffff, #fbf5f9);
}
.card.accent .head {
  color: var(--c-violet-deep);
}
</style>
