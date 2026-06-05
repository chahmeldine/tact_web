<script setup lang="ts">
const config = useRuntimeConfig();
const { copy, locale } = useLandingCopy();

useHead(() => ({
  title: copy.value.meta.title,
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
    <SiteHeader active="home" />
    <main>
      <InstallLanding
        :android-url="config.public.androidAppUrl"
        :app-gallery-url="config.public.appGalleryUrl"
        :ios-url="config.public.iosAppUrl"
      />
      <LandingStats />
      <LandingFeatures />
      <LandingSteps />
      <PaymentOptions />
      <LandingTestimonials />
      <LandingFinalCta
        :android-url="config.public.androidAppUrl"
        :app-gallery-url="config.public.appGalleryUrl"
        :ios-url="config.public.iosAppUrl"
      />
    </main>
  </div>
</template>
