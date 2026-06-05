<script setup lang="ts">
const { copy } = useLandingCopy();
</script>

<template>
  <section id="demo" class="landing-steps" aria-labelledby="steps-title">
    <div class="landing-steps__intro">
      <p>{{ copy.steps.eyebrow }}</p>
      <h2 id="steps-title">
        {{ copy.steps.title }}
      </h2>
    </div>

    <ol>
      <li v-for="[number, title, stepCopy] in copy.steps.items" :key="number">
        <span>{{ number }}</span>
        <h3>{{ title }}</h3>
        <p>{{ stepCopy }}</p>
      </li>
    </ol>

    <div class="landing-steps__platforms">
      <article>
        <h3>{{ copy.steps.androidTitle }}</h3>
        <p>{{ copy.steps.androidCopy }}</p>
      </article>
      <article>
        <h3>{{ copy.steps.iosTitle }}</h3>
        <p>{{ copy.steps.iosCopy }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.landing-steps {
  display: grid;
  gap: var(--tact-space-6);
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.landing-steps__intro p,
.landing-steps__intro h2,
.landing-steps h3,
.landing-steps p {
  margin: 0;
}

.landing-steps__intro p,
.landing-steps li span {
  font-weight: 400;
  text-transform: uppercase;
}

.landing-steps__intro h2 {
  font-family: var(--tact-font-display);
  font-size: clamp(2.75rem, 7vw, 5rem);
  line-height: 0.95;
}

.landing-steps ol {
  display: grid;
  gap: var(--tact-space-4);
  padding: 0;
  margin: 0;
  list-style: none;
}

.landing-steps li,
.landing-steps__platforms article {
  display: grid;
  gap: var(--tact-space-3);
  border-block-start: 0.0625rem solid currentColor;
  padding-block-start: var(--tact-space-4);
}

.landing-steps h3 {
  font-family: var(--tact-font-display);
  font-size: 1.75rem;
}

.landing-steps__platforms {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--tact-space-4);
}

@media (max-width: 44rem) {
  .landing-steps__platforms {
    grid-template-columns: 1fr;
  }
}
</style>
