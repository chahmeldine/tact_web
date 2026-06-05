<script setup lang="ts">
const { copy, locale } = useLandingCopy();

useHead(() => ({
  title: copy.value.pricing.eyebrow,
  htmlAttrs: {
    lang: locale.value === 'zh' ? 'zh-CN' : locale.value,
  },
  meta: [
    {
      name: 'description',
      content: copy.value.meta.description,
    },
  ],
}));
</script>

<template>
  <div>
    <SiteHeader active="payment" />
    <main>
      <PaymentOptions />
    </main>
  </div>
</template>
