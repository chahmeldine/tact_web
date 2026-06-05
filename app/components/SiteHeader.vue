<script setup lang="ts">
defineProps<{
  active?: 'home' | 'payment';
}>();

const { copy, locale, localizedPath, sectionPath } = useLandingCopy();
const isMenuOpen = ref(false);
const languageOptions = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'CH', value: 'zh' },
] as const;

function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement;
  const selectedLocale = target.value;

  if (selectedLocale === 'fr' || selectedLocale === 'en' || selectedLocale === 'zh') {
    return navigateTo(localizedPath(selectedLocale));
  }
}
</script>

<template>
  <header class="site-header">
    <nav class="site-header__nav" :aria-label="copy.nav.mainLabel">
      <NuxtLink class="site-header__brand" :to="sectionPath('')" :aria-label="copy.nav.homeLabel">
        <img src="/brand/tact-white.png" alt="" aria-hidden="true">
      </NuxtLink>

      <div class="site-header__links">
        <NuxtLink :to="sectionPath('#produit')">
          {{ copy.nav.product }}
        </NuxtLink>
        <NuxtLink :aria-current="active === 'payment' ? 'page' : undefined" :to="sectionPath('#prix')">
          {{ copy.nav.pricing }}
        </NuxtLink>
        <NuxtLink :to="sectionPath('#business')">
          {{ copy.nav.business }}
        </NuxtLink>
        <NuxtLink class="site-header__cta" :aria-current="active === 'home' ? 'page' : undefined" :to="sectionPath('#demarrer')">
          {{ copy.nav.start }}
        </NuxtLink>
      </div>

      <label class="site-header__locale">
        <span class="site-header__locale-label">Langue</span>
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

      <button
        class="site-header__menu-button"
        type="button"
        aria-controls="site-mobile-menu"
        :aria-expanded="isMenuOpen"
        aria-label="Ouvrir le menu"
        @click="isMenuOpen = true"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>

    <SiteMobileMenu
      :active="active"
      :open="isMenuOpen"
      @close="isMenuOpen = false"
    />
  </header>
</template>

<style scoped>
.site-header {
  position: fixed; z-index: 10; inset-block-start: 0; inset-inline: 0;
  background: var(--tact-color-black); color: var(--tact-color-white);
  border-block-end: 0.0625rem solid currentColor; padding: var(--tact-space-4) var(--tact-space-5);
}
.site-header__nav {
  display: flex; align-items: center; gap: var(--tact-space-4); inline-size: min(100%, 72rem); margin: 0 auto;
}
.site-header__brand {
  display: inline-flex; align-items: center; flex: 0 0 auto; min-block-size: 2.75rem; text-decoration: none;
}
.site-header__brand img {
  display: block; inline-size: 4rem; block-size: auto;
}
.site-header__links {
  display: flex; flex: 1; justify-content: center; gap: var(--tact-space-2); min-inline-size: 0;
}
.site-header__links a,
.site-header__menu-button {
  display: inline-flex; min-block-size: 2.75rem; align-items: center; border: 0.0625rem solid transparent;
  border-radius: 999rem; padding: 0 var(--tact-space-4); font-weight: 400; text-decoration: none; white-space: nowrap;
}
.site-header__links a[aria-current="page"] {
  border-color: currentColor;
}
.site-header__cta {
  background: var(--tact-color-white); color: var(--tact-color-black);
}
.site-header__locale {
  position: relative; display: inline-flex; align-items: center; flex: 0 0 auto;
}
.site-header__locale::after {
  position: absolute; inset-inline-end: var(--tact-space-3); inline-size: 0.45rem; block-size: 0.45rem;
  border-block-end: 0.0625rem solid currentColor; border-inline-end: 0.0625rem solid currentColor;
  content: ""; pointer-events: none; transform: translateY(-0.125rem) rotate(45deg);
}
.site-header__locale-label {
  position: absolute; inline-size: 1px; block-size: 1px; clip: rect(0 0 0 0);
  clip-path: inset(50%); overflow: hidden; white-space: nowrap;
}
.site-header__locale select {
  inline-size: 5.25rem; min-block-size: 2.25rem; border: 0.0625rem solid currentColor; border-radius: 999rem;
  appearance: none; background: var(--tact-color-black); color: var(--tact-color-white); cursor: pointer;
  font: inherit; font-size: 0.8125rem; padding: 0 calc(var(--tact-space-5) + var(--tact-space-1)) 0 var(--tact-space-3);
}
.site-header__locale option {
  background: var(--tact-color-black); color: var(--tact-color-white);
}
.site-header__locale select:focus-visible,
.site-header__menu-button:focus-visible {
  outline: 0.125rem solid currentColor; outline-offset: 0.1875rem;
}
.site-header__menu-button {
  display: none; flex-direction: column; justify-content: center; gap: 0.25rem; inline-size: 2.75rem;
  padding: 0; background: transparent; color: inherit; cursor: pointer;
}
.site-header__menu-button span {
  inline-size: 1.125rem; border-block-start: 0.0625rem solid currentColor;
}
@media (max-width: 58rem) {
  .site-header {
    padding: var(--tact-space-3) var(--tact-space-4);
  }
  .site-header__nav {
    justify-content: space-between;
  }
  .site-header__links,
  .site-header__locale {
    display: none;
  }
  .site-header__menu-button {
    display: inline-flex;
  }
}

:global(.site-header + main) {
  padding-block-start: 5.75rem;
}

:global([id]) {
  scroll-margin-top: 6rem;
}

@media (max-width: 58rem) {
  :global(.site-header + main) {
    padding-block-start: 5rem;
  }

  :global([id]) {
    scroll-margin-top: 5.25rem;
  }
}
</style>
