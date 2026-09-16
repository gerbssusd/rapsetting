<!-- Original decorative botanical sprig — simple original line art, not a
     reproduction of any specific illustration. Used sparingly as a motif. -->
<template>
  <svg :width="size" :height="size * 1.4" viewBox="0 0 100 140" :style="{ transform: flip ? 'scaleX(-1)' : 'none', opacity }">
    <path d="M50 140 C 48 100, 52 70, 50 20" fill="none" :stroke="stroke" stroke-width="2" />
    <g :fill="leafColor">
      <ellipse cx="38" cy="100" rx="16" ry="7" transform="rotate(-28 38 100)" />
      <ellipse cx="62" cy="82" rx="16" ry="7" transform="rotate(28 62 82)" />
      <ellipse cx="36" cy="64" rx="14" ry="6" transform="rotate(-32 36 64)" />
      <ellipse cx="64" cy="46" rx="14" ry="6" transform="rotate(32 64 46)" />
    </g>
    <g :fill="bloomColor">
      <circle cx="50" cy="16" r="7" />
      <circle cx="40" cy="22" r="5" />
      <circle cx="60" cy="22" r="5" />
      <circle cx="50" cy="26" r="5" />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [String, Number], default: 90 },
  stroke: { type: String, default: "#5C8374" },
  leafColor: { type: String, default: "#1B4332" },
  bloomColor: { type: String, default: "#6B2D5C" },
  opacity: { type: [String, Number], default: 0.9 },
  flip: { type: Boolean, default: false },
});
</script>
