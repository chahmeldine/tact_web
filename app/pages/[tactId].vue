<script setup lang="ts">
import { fetchPublicCard, trackPublicCardClick } from '~/services/public-cards';

const route = useRoute();
const config = useRuntimeConfig();
const tactId = computed(() => String(route.params.tactId));

const { data: card, error } = await useAsyncData(
  () => `public-card-${tactId.value}`,
  () => fetchPublicCard(config.public.apiBaseUrl, tactId.value, 'direct'),
);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Carte introuvable',
  });
}

useHead(() => ({
  title: card.value?.displayName ?? 'Carte',
  meta: [
    {
      name: 'description',
      content: card.value?.bio ?? 'Carte de visite digitale TACT.',
    },
  ],
}));

async function handleClickField(field: string) {
  try {
    await trackPublicCardClick(config.public.apiBaseUrl, tactId.value, field);
  } catch {
    // Le tracking ne doit jamais bloquer le parcours utilisateur.
  }
}
</script>

<template>
  <main class="public-page">
    <PublicCard
      v-if="card"
      :card="card"
      @click-field="handleClickField"
    />
    <footer class="public-page__footer">
      Créé avec TACT
    </footer>
  </main>
</template>

<style scoped>
.public-page {
  display: grid;
  min-block-size: 100svh;
  place-items: center;
  gap: var(--tact-space-5);
  padding: var(--tact-space-5);
}

.public-page__footer {
  font-size: 0.875rem;
  font-weight: 300;
}
</style>
