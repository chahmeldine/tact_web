import type { PublicCard } from '~/types/public-card';

export async function fetchPublicCard(
  apiBaseUrl: string,
  tactId: string,
  source: 'nfc' | 'link' | 'qr' | 'direct' = 'direct',
) {
  return $fetch<PublicCard>(`/public/cards/${encodeURIComponent(tactId)}`, {
    baseURL: apiBaseUrl,
    query: { source },
  });
}

export async function trackPublicCardClick(
  apiBaseUrl: string,
  tactId: string,
  field: string,
) {
  await $fetch(`/public/cards/${encodeURIComponent(tactId)}/click`, {
    baseURL: apiBaseUrl,
    method: 'POST',
    body: { field },
  });
}
