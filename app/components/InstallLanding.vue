<script setup lang="ts">
defineProps<{
  androidUrl?: string;
  appGalleryUrl?: string;
  iosUrl?: string;
}>();

const { copy } = useLandingCopy();
</script>

<template>
  <section id="produit" class="install-landing" aria-labelledby="install-title">
    <div class="install-landing__content">
      <p class="install-landing__eyebrow">
        {{ copy.hero.eyebrow }}
      </p>
      <h1 id="install-title">
        <template v-for="line in copy.hero.title.split('\n')" :key="line">
          {{ line }}<br>
        </template>
      </h1>
      <p class="install-landing__copy">
        {{ copy.hero.copy }}
      </p>
      <div class="install-landing__actions">
        <StoreLinks
          :android-url="androidUrl"
          :app-gallery-url="appGalleryUrl"
          :ios-url="iosUrl"
        />
        <a class="install-landing__demo" href="#demo">
          {{ copy.hero.demo }}
        </a>
      </div>
    </div>

    <div class="install-landing__visual" aria-hidden="true">
      <div class="install-landing__phone">
        <div class="install-landing__screen">
          <span>{{ copy.hero.phoneStatus }}</span>
          <strong>{{ copy.hero.name }}</strong>
          <span>{{ copy.hero.role }}</span>
          <span>alexmoreau.design</span>
          <span>linkedin/alexmoreau</span>
          <span>@alex.moreau</span>
          <span>+33 6 12 34 56 78</span>
        </div>
      </div>
      <div class="install-landing__tabs">
        <span v-for="tabLabel in copy.hero.tabs" :key="tabLabel">{{ tabLabel }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.install-landing {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
  align-items: center;
  gap: var(--tact-space-6);
  inline-size: min(100%, 72rem);
  min-block-size: calc(100svh - 5.5rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.install-landing__content {
  display: grid;
  gap: var(--tact-space-5);
}

.install-landing__eyebrow,
.install-landing__copy {
  margin: 0;
}

.install-landing__eyebrow {
  font-weight: 400;
  text-transform: uppercase;
}

.install-landing h1 {
  max-inline-size: 42rem;
  margin: 0;
  font-family: var(--tact-font-display);
  font-size: clamp(3.6rem, 10vw, 7rem);
  line-height: 0.9;
}

.install-landing__copy {
  max-inline-size: 38rem;
  font-size: 1.125rem;
  line-height: 1.55;
}

.install-landing__actions {
  display: grid;
  justify-items: start;
  gap: var(--tact-space-3);
}

.install-landing__demo {
  font-weight: 400;
  text-decoration: none;
}

.install-landing__visual {
  position: relative;
  display: grid;
  justify-items: center;
}

.install-landing__phone {
  inline-size: min(100%, 18rem);
  aspect-ratio: 9 / 18;
  border: 0.125rem solid currentColor;
  border-radius: 2rem;
  padding: var(--tact-space-4);
}

.install-landing__screen {
  display: grid;
  block-size: 100%;
  align-content: end;
  gap: var(--tact-space-3);
  border: 0.0625rem solid currentColor;
  border-radius: 1.375rem;
  padding: var(--tact-space-5);
}

.install-landing__screen strong {
  overflow-wrap: anywhere;
  font-family: var(--tact-font-display);
  font-size: 2.25rem;
  line-height: 1;
}

.install-landing__tabs {
  position: absolute;
  inset-block-end: 10%;
  inset-inline-start: 0;
  display: flex;
  gap: var(--tact-space-2);
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  background: var(--tact-color-white);
  color: var(--tact-color-black);
  padding: var(--tact-space-2);
}

.install-landing__tabs span {
  padding: var(--tact-space-2) var(--tact-space-3);
  font-weight: 400;
}

@media (max-width: 52rem) {
  .install-landing {
    grid-template-columns: 1fr;
  }

  .install-landing__actions {
    justify-items: stretch;
  }

  .install-landing__visual {
    min-block-size: 32rem;
  }
}
</style>
