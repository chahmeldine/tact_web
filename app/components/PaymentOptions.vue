<script setup lang="ts">
const { copy, sectionHref } = useLandingCopy();
</script>

<template>
  <section id="prix" class="payment-options" aria-labelledby="payment-title">
    <div class="payment-options__intro">
      <p>{{ copy.pricing.eyebrow }}</p>
      <h1 id="payment-title">
        {{ copy.pricing.title }}
      </h1>
    </div>

    <div class="payment-options__table" role="table" :aria-label="copy.pricing.tableLabel">
      <div class="payment-options__head" role="row">
        <span v-for="header in copy.pricing.headers" :key="header" role="columnheader">
          {{ header }}
        </span>
      </div>

      <article
        v-for="[name, type, price, content, action] in copy.pricing.offers"
        :key="name"
        class="payment-option"
        :class="{ 'payment-option--featured': name === 'Premium' }"
        role="row"
      >
        <h2 role="cell">{{ name }}</h2>
        <p role="cell" class="payment-option__type" :data-type-label="copy.pricing.headers[1]">
          {{ type }}
        </p>
        <p role="cell" class="payment-option__price" :data-price-label="copy.pricing.headers[2]">
          {{ price }}
        </p>
        <p role="cell" class="payment-option__content">{{ content }}</p>
        <a role="cell" :href="sectionHref('#demarrer')">
          {{ action }}
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.payment-options {
  display: grid;
  gap: var(--tact-space-6);
  inline-size: min(100%, 72rem);
  margin: 0 auto;
  padding: var(--tact-space-6) var(--tact-space-5);
}

.payment-options__intro {
  display: grid;
  gap: var(--tact-space-3);
  max-inline-size: 48rem;
}

.payment-options__intro p,
.payment-options__intro h1,
.payment-option h2,
.payment-option p {
  margin: 0;
}

.payment-options__intro p,
.payment-options__head,
.payment-option__type {
  font-weight: 400;
  text-transform: uppercase;
}

.payment-options__intro h1 {
  font-family: var(--tact-font-display);
  font-size: clamp(2.75rem, 7vw, 5rem);
  line-height: 0.95;
}

.payment-options__table {
  display: grid;
  border: 0.0625rem solid currentColor;
  border-radius: var(--tact-radius-card);
  overflow: hidden;
}

.payment-options__head,
.payment-option {
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) minmax(6rem, 0.7fr) minmax(8rem, 0.8fr) minmax(14rem, 1.6fr) minmax(8rem, 0.8fr);
  gap: var(--tact-space-4);
  align-items: center;
  padding: var(--tact-space-4);
}

.payment-options__head {
  border-block-end: 0.0625rem solid currentColor;
  font-size: 0.8125rem;
}

.payment-option {
  border-block-end: 0.0625rem solid currentColor;
}

.payment-option:last-child {
  border-block-end: 0;
}

.payment-option--featured {
  background: var(--tact-color-white);
  color: var(--tact-color-black);
}

.payment-option h2,
.payment-option__price {
  font-family: var(--tact-font-display);
  font-size: 1.5rem;
  line-height: 1;
}

.payment-option__content {
  line-height: 1.45;
}

.payment-option a {
  display: inline-flex;
  min-block-size: 2.75rem;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid currentColor;
  border-radius: 999rem;
  padding: 0 var(--tact-space-4);
  font-weight: 400;
  text-decoration: none;
}

@media (max-width: 58rem) {
  .payment-options__head {
    display: none;
  }

  .payment-option {
    grid-template-columns: 1fr;
    gap: var(--tact-space-3);
    padding: var(--tact-space-5);
  }

  .payment-option__type::before {
    content: attr(data-type-label) " : ";
  }

  .payment-option__price::before {
    content: attr(data-price-label) " : ";
    font-family: var(--tact-font-body);
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
