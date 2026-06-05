<script setup lang="ts">
defineProps<{
  active?: 'home' | 'payment';
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { copy, locale, localizedPath, sectionPath } = useLandingCopy();
const languageOptions = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'CH', value: 'zh' },
] as const;

function closeMenu() {
  emit('close');
}

function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement;
  const selectedLocale = target.value;

  if (selectedLocale === 'fr' || selectedLocale === 'en' || selectedLocale === 'zh') {
    emit('close');
    return navigateTo(localizedPath(selectedLocale));
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="site-mobile-menu"
      @keydown.esc="closeMenu"
    >
      <button
        class="site-mobile-menu__backdrop"
        type="button"
        aria-label="Fermer le menu"
        @click="closeMenu"
      />
      <aside id="site-mobile-menu" class="site-mobile-menu__panel" aria-label="Menu mobile">
        <div class="site-mobile-menu__top">
          <img src="/brand/tact-white.png" alt="" aria-hidden="true">
          <button type="button" aria-label="Fermer le menu" @click="closeMenu">
            ×
          </button>
        </div>

        <nav class="site-mobile-menu__links" :aria-label="copy.nav.mainLabel">
          <NuxtLink :to="sectionPath('#produit')" @click="closeMenu">
            {{ copy.nav.product }}
          </NuxtLink>
          <NuxtLink :aria-current="active === 'payment' ? 'page' : undefined" :to="sectionPath('#prix')" @click="closeMenu">
            {{ copy.nav.pricing }}
          </NuxtLink>
          <NuxtLink :to="sectionPath('#business')" @click="closeMenu">
            {{ copy.nav.business }}
          </NuxtLink>
          <NuxtLink class="site-mobile-menu__cta" :aria-current="active === 'home' ? 'page' : undefined" :to="sectionPath('#demarrer')" @click="closeMenu">
            {{ copy.nav.start }}
          </NuxtLink>
        </nav>

        <label class="site-mobile-menu__locale">
          <span>Langue</span>
          <select :value="locale" aria-label="Langue" @change="changeLocale">
            <option
              v-for="option in languageOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </label>
      </aside>
    </div>
  </Teleport>
</template>

<style scoped>
.site-mobile-menu {
  position: fixed;
  z-index: 20;
  inset: 0;
}

.site-mobile-menu__backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgb(8 8 8 / 70%);
}

.site-mobile-menu__panel {
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  display: grid;
  align-content: start;
  gap: var(--tact-space-6);
  inline-size: min(22rem, 100%);
  border-inline-start: 0.0625rem solid currentColor;
  background: var(--tact-color-black);
  color: var(--tact-color-white);
  padding: var(--tact-space-5);
}

.site-mobile-menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-mobile-menu__top img {
  inline-size: 4rem;
  block-size: auto;
}

.site-mobile-menu__top button {
  inline-size: 2.75rem;
  min-block-size: 2.75rem;
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-size: 1.5rem;
}

.site-mobile-menu__links {
  display: grid;
  gap: var(--tact-space-3);
}

.site-mobile-menu__links a {
  display: flex;
  min-block-size: 3rem;
  align-items: center;
  border-block-end: 0.0625rem solid currentColor;
  font-family: var(--tact-font-display);
  font-size: 1.75rem;
  padding-inline: var(--tact-space-3);
  text-decoration: none;
}

.site-mobile-menu__links a[aria-current="page"] {
  border-color: currentColor;
}

.site-mobile-menu__cta {
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  justify-content: center;
  margin-block-start: var(--tact-space-3);
}

.site-mobile-menu__locale {
  display: grid;
  gap: var(--tact-space-2);
}

.site-mobile-menu__locale select {
  min-block-size: 3rem;
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  appearance: none;
  background: var(--tact-color-black);
  color: var(--tact-color-white);
  font: inherit;
  padding: 0 var(--tact-space-6) 0 var(--tact-space-4);
}

.site-mobile-menu__locale option {
  background: var(--tact-color-black);
  color: var(--tact-color-white);
}

.site-mobile-menu button:focus-visible,
.site-mobile-menu a:focus-visible,
.site-mobile-menu select:focus-visible {
  outline: 0.125rem solid currentColor;
  outline-offset: 0.1875rem;
}
</style>
