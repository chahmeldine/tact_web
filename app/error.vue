<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
    message?: string;
  };
}>();
</script>

<template>
  <main class="error-page">
    <h1>{{ error.statusCode ?? 500 }}</h1>
    <p>{{ error.statusMessage ?? error.message ?? 'Une erreur est survenue.' }}</p>
    <NuxtLink to="/">
      Retour
    </NuxtLink>
  </main>
</template>

<style scoped>
.error-page {
  display: grid;
  min-block-size: 100svh;
  place-content: center;
  gap: var(--tact-space-4);
  padding: var(--tact-space-5);
  text-align: center;
}

.error-page h1 {
  margin: 0;
  font-family: var(--tact-font-display);
  font-size: 3rem;
}

.error-page p {
  margin: 0;
}
</style>
