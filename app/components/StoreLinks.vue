<script setup lang="ts">
defineProps<{
  androidUrl?: string;
  appGalleryUrl?: string;
  iosUrl?: string;
}>();

const { copy } = useLandingCopy();
</script>

<template>
  <div class="store-links" :aria-label="copy.stores.label">
    <a class="store-links__primary" :href="androidUrl ?? '#android'">
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M5 3.8v16.4c0 .7.8 1.1 1.4.7l12.9-8.2c.5-.3.5-1.1 0-1.4L6.4 3.1C5.8 2.7 5 3.1 5 3.8Z" />
      </svg>
      {{ copy.stores.playStore }}
    </a>
    <a class="store-links__secondary" :href="appGalleryUrl ?? '#app-gallery'">
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M8.1 5.2a3.9 3.9 0 0 1 7.8 0v1.2h2.3c1 0 1.8.8 1.8 1.8v10.2c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V8.2c0-1 .8-1.8 1.8-1.8h2.3V5.2Zm2 1.2h3.8V5.2a1.9 1.9 0 0 0-3.8 0v1.2Z" />
        <path d="M8.2 13.3h7.6M12 9.5v7.6" />
      </svg>
      {{ copy.stores.appGallery }}
    </a>
    <a class="store-links__secondary" :href="iosUrl ?? '#ios'">
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M15.5 3.1c.1 1-.3 2-1 2.8-.7.8-1.7 1.3-2.7 1.2-.1-1 .3-2 1-2.8.7-.8 1.7-1.3 2.7-1.2Z" />
        <path d="M18.8 16.9c-.4.9-.7 1.3-1.2 2.1-.8 1.2-1.9 2.7-3.3 2.7-1.2 0-1.6-.8-3.2-.8s-2 .8-3.2.8c-1.4 0-2.5-1.4-3.3-2.6-2.2-3.4-2.5-7.5-1.1-9.6 1-1.5 2.5-2.4 4-2.4 1.5 0 2.4.8 3.6.8 1.2 0 1.9-.8 3.6-.8 1.3 0 2.7.7 3.7 1.9-3.2 1.8-2.7 6.3.4 7.9Z" />
      </svg>
      {{ copy.stores.appleStore }}
    </a>
  </div>
</template>

<style scoped>
.store-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--tact-space-3);
  justify-content: center;
}

.store-links a {
  display: inline-flex;
  min-block-size: 3rem;
  align-items: center;
  gap: var(--tact-space-2);
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  padding: 0 var(--tact-space-5);
  font-weight: 400;
  text-decoration: none;
}

.store-links svg {
  inline-size: 1.125rem;
  block-size: 1.125rem;
  flex: 0 0 auto;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.store-links__primary {
  background: var(--tact-color-white);
  color: var(--tact-color-black);
}
</style>
