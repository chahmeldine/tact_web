<script setup lang="ts">
const { copy } = useLandingCopy();
</script>

<template>
  <section id="business" class="landing-features" aria-labelledby="features-title">
    <div class="landing-features__intro">
      <p>{{ copy.features.eyebrow }}</p>
      <h2 id="features-title">
        {{ copy.features.title }}
      </h2>
    </div>

    <div class="landing-features__grid">
      <article v-for="[number, title, featureCopy] in copy.features.items" :key="number">
        <span>{{ number }}</span>
        <h3>{{ title }}</h3>
        <p>{{ featureCopy }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.landing-features {
  display: grid;
  gap: var(--tact-space-6);
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.landing-features__intro {
  display: grid;
  gap: var(--tact-space-3);
  max-inline-size: 48rem;
}

.landing-features__intro p,
.landing-features__intro h2,
.landing-features article p,
.landing-features article h3 {
  margin: 0;
}

.landing-features__intro p,
.landing-features article span {
  font-weight: 400;
  text-transform: uppercase;
}

.landing-features__intro h2 {
  font-family: var(--tact-font-display);
  font-size: clamp(2.75rem, 7vw, 5rem);
  line-height: 0.95;
}

.landing-features__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--tact-space-4);
}

.landing-features article {
  display: grid;
  align-content: start;
  gap: var(--tact-space-4);
  min-block-size: 18rem;
  border: 0.0625rem solid currentColor;
  border-radius: var(--tact-radius-card);
  padding: var(--tact-space-5);
}

.landing-features article h3 {
  font-family: var(--tact-font-display);
  font-size: 1.75rem;
  line-height: 1;
}

.landing-features article p {
  line-height: 1.5;
}

@media (max-width: 58rem) {
  .landing-features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
