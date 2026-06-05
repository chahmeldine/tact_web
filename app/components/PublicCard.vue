<script setup lang="ts">
import type { PublicCard } from '~/types/public-card';

defineProps<{
  card: PublicCard;
}>();

const emit = defineEmits<{
  clickField: [field: string];
}>();

function emitFieldClick(field: string) {
  emit('clickField', field);
}
</script>

<template>
  <article class="public-card" :data-theme="card.theme" aria-labelledby="public-card-title">
    <div class="public-card__surface">
      <img
        v-if="card.avatarUrl"
        class="public-card__avatar"
        :src="card.avatarUrl"
        :alt="`Portrait de ${card.displayName ?? 'ce contact'}`"
      >

      <div class="public-card__identity">
        <p v-if="card.company" class="public-card__company">
          {{ card.company }}
        </p>
        <h1 id="public-card-title" class="public-card__name">
          {{ card.displayName ?? 'Carte TACT' }}
        </h1>
        <p v-if="card.jobTitle" class="public-card__job">
          {{ card.jobTitle }}
        </p>
      </div>

      <p v-if="card.bio" class="public-card__bio">
        {{ card.bio }}
      </p>

      <ul class="public-card__links" aria-label="Coordonnées">
        <li v-if="card.phone">
          <a :href="`tel:${card.phone}`" @click="emitFieldClick('phone')">
            Téléphone
          </a>
        </li>
        <li v-if="card.email">
          <a :href="`mailto:${card.email}`" @click="emitFieldClick('email')">
            Email
          </a>
        </li>
        <li v-if="card.location">
          <span>{{ card.location }}</span>
        </li>
      </ul>

      <ul v-if="card.socials.length > 0" class="public-card__links" aria-label="Réseaux sociaux">
        <li v-for="social in card.socials" :key="social.id">
          <a
            :href="social.url"
            rel="noopener noreferrer"
            target="_blank"
            @click="emitFieldClick(social.platform)"
          >
            {{ social.label ?? social.platform }}
          </a>
        </li>
      </ul>

      <ul v-if="card.websites.length > 0" class="public-card__links" aria-label="Sites web">
        <li v-for="website in card.websites" :key="website.id">
          <a
            :href="website.url"
            rel="noopener noreferrer"
            target="_blank"
            @click="emitFieldClick(`website:${website.position}`)"
          >
            {{ website.label ?? website.url }}
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.public-card {
  display: grid;
  inline-size: min(100%, 18.75rem);
  min-block-size: 31.25rem;
  border: 0.0625rem solid currentColor;
  border-radius: var(--tact-radius-card);
  color: var(--tact-color-white);
  background: var(--tact-color-black);
  animation: tact-card-float var(--tact-motion-float) ease-in-out infinite;
}

.public-card[data-theme="light"] {
  color: var(--tact-color-black);
  background: var(--tact-color-white);
}

.public-card__surface {
  display: flex;
  flex-direction: column;
  gap: var(--tact-space-5);
  justify-content: space-between;
  padding: var(--tact-space-6);
}

.public-card__avatar {
  inline-size: 5rem;
  block-size: 5rem;
  border: 0.0625rem solid currentColor;
  border-radius: 50%;
  object-fit: cover;
}

.public-card__identity {
  display: grid;
  gap: var(--tact-space-2);
}

.public-card__company,
.public-card__job,
.public-card__bio {
  margin: 0;
}

.public-card__company {
  font-size: 0.8125rem;
  font-weight: 400;
  text-transform: uppercase;
}

.public-card__name {
  margin: 0;
  overflow-wrap: anywhere;
  font-family: var(--tact-font-display);
  font-size: clamp(2.25rem, 12vw, 3.25rem);
  line-height: 0.95;
}

.public-card__job,
.public-card__bio {
  line-height: 1.45;
}

.public-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--tact-space-2);
  padding: 0;
  margin: 0;
  list-style: none;
}

.public-card__links a,
.public-card__links span {
  display: inline-flex;
  min-block-size: 2.75rem;
  align-items: center;
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  padding: 0 var(--tact-space-4);
  font-weight: 400;
  text-decoration: none;
}

@keyframes tact-card-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-0.375rem);
  }
}
</style>
