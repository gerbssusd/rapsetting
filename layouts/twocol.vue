<template>
  <div class="twocol-slide">
    <div class="header">
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="slide-title">{{ title }}</h1>
    </div>
    <div class="cols">
      <div class="col">
        <div class="col-head">{{ colA.head }}</div>
        <ul>
          <li v-for="(l, i) in colA.lines" :key="i">{{ l }}</li>
        </ul>
      </div>
      <div class="divider" />
      <div class="col">
        <div class="col-head accent">{{ colB.head }}</div>
        <ul>
          <li v-for="(l, i) in colB.lines" :key="i">{{ l }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, default: "" },
  colA: { type: Object, default: () => ({ head: "", lines: [] }) },
  colB: { type: Object, default: () => ({ head: "", lines: [] }) },
});
</script>

<style scoped>
.twocol-slide {
  height: 100%;
  padding: 2.2rem 3rem 1.6rem;
  display: flex;
  flex-direction: column;
}
.header { margin-bottom: 1rem; }
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  min-height: 0;
}
.divider {
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(176, 141, 87, 0.6), transparent);
}
.col { display: flex; flex-direction: column; justify-content: center; }
.col-head {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1.02rem;
  color: var(--c-forest-deep);
  margin-bottom: 0.6rem;
}
.col-head.accent { color: var(--c-violet-deep); }
.col ul {
  font-family: var(--font-serif);
  font-size: 0.98rem;
  line-height: 1.55;
  color: var(--c-ink);
  padding-left: 1.15rem;
  margin: 0;
}
.col li { margin-bottom: 0.55rem; }
</style>
