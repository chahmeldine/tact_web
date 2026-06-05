<script setup lang="ts">
const { copy } = useLandingCopy();
</script>

<template>
  <section class="landing-testimonials" :aria-label="copy.testimonialsLabel">
    <figure v-for="[text, author] in copy.testimonials" :key="author">
      <blockquote>
        “{{ text }}”
      </blockquote>
      <figcaption>{{ author }}</figcaption>
    </figure>
  </section>
</template>

<style scoped>
.landing-testimonials {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--tact-space-4);
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.landing-testimonials figure {
  display: grid;
  gap: var(--tact-space-4);
  align-content: space-between;
  min-block-size: 18rem;
  border: 0.0625rem solid currentColor;
  border-radius: var(--tact-radius-card);
  padding: var(--tact-space-5);
  margin: 0;
}

.landing-testimonials blockquote {
  margin: 0;
  font-family: var(--tact-font-display);
  font-size: 1.5rem;
  line-height: 1.1;
}

.landing-testimonials figcaption {
  font-weight: 400;
}

@media (max-width: 58rem) {
  .landing-testimonials {
    grid-template-columns: 1fr;
  }
}
</style>
