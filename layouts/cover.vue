<template>
  <div class="cover">
    <div class="corner tl"><Sprig :size="70" stroke="#B08D57" leafColor="#EAE1C8" bloomColor="#6B2D5C" :opacity="0.5" /></div>
    <div class="corner br"><Sprig :size="70" stroke="#B08D57" leafColor="#EAE1C8" bloomColor="#6B2D5C" :opacity="0.5" flip /></div>

    <div class="content">
      <div class="eyebrow-light" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="title">{{ headline }}</h1>
      <div class="hr" />
      <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
      <p class="footer" v-if="footer">{{ footer }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  headline: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  footer: { type: String, default: "" },
});
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 0%, #244c3a 0%, #0e2a20 60%, #0a2018 100%);
  color: #fbf9f3;
  overflow: hidden;
  padding: 3rem;
}
.corner { position: absolute; }
.corner.tl { top: 2.2rem; left: 2.4rem; }
.corner.br { bottom: 2.2rem; right: 2.4rem; }

.content {
  max-width: 850px;
  text-align: center;
  z-index: 1;
}
.eyebrow-light {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #c9a86a;
  margin-bottom: 1.1rem;
}
.title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 1.12;
  color: #ffffff;
  margin: 0;
}
.hr {
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b08d57, transparent);
  margin: 1.6rem auto;
}
.subtitle {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.28rem;
  line-height: 1.5;
  color: #d9e2da;
  max-width: 640px;
  margin: 0 auto;
}
.footer {
  margin-top: 2.6rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: #8fae9c;
}
</style>
