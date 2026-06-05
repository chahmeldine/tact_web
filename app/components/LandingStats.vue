<script setup lang="ts">
const { copy } = useLandingCopy();
</script>

<template>
  <section class="landing-stats" aria-label="Chiffres clés">
    <dl>
      <div v-for="[value, label] in copy.stats" :key="value">
        <dt>{{ value }}</dt>
        <dd>{{ label }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.landing-stats {
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.landing-stats dl {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--tact-space-4);
  margin: 0;
}

.landing-stats div {
  border-block-start: 0.0625rem solid currentColor;
  padding-block-start: var(--tact-space-4);
}

.landing-stats dt {
  font-family: var(--tact-font-display);
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1;
}

.landing-stats dd {
  margin: var(--tact-space-2) 0 0;
  font-weight: 400;
}

@media (max-width: 44rem) {
  .landing-stats dl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
