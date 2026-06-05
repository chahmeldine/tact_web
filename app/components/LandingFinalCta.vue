<script setup lang="ts">
defineProps<{
  androidUrl?: string;
  appGalleryUrl?: string;
  iosUrl?: string;
}>();

const { copy } = useLandingCopy();
</script>

<template>
  <section id="demarrer" class="landing-final-cta" aria-labelledby="final-cta-title">
    <h2 id="final-cta-title">
      <span v-for="line in copy.final.title.split('\n')" :key="line">
        {{ line }}
      </span>
    </h2>
    <p>{{ copy.final.copy }}</p>
    <StoreLinks
      :android-url="androidUrl"
      :app-gallery-url="appGalleryUrl"
      :ios-url="iosUrl"
    />
  </section>
</template>

<style scoped>
.landing-final-cta {
  display: grid;
  justify-items: center;
  gap: var(--tact-space-5);
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: calc(var(--tact-space-6) * 2) var(--tact-space-5);
  text-align: center;
}

.landing-final-cta h2,
.landing-final-cta p {
  margin: 0;
}

.landing-final-cta h2 {
  display: grid;
  font-family: var(--tact-font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.9;
}

.landing-final-cta p {
  font-size: 1.125rem;
}
</style>
