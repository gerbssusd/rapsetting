<template>
  <div class="cards-grid" :class="cols === 1 ? 'cols-1' : 'cols-auto'">
    <slot />
  </div>
</template>

<script setup>
defineProps({ cols: { type: [String, Number], default: "auto" } });
</script>

<style scoped>
.cards-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 0.4rem;
}
.cols-1 {
  grid-template-columns: 1fr;
}
</style>
