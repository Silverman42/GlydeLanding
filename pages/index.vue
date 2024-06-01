<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Glyde : Automated disbursement in a flash",
  meta: [
    {
      name: "description",
      content: "Crypto conversion in 60 seconds !!",
    },
    {
      property: "og:description",
      content: `Crypto conversion in 60 seconds !!`,
    },
    {
      property: "twitter:description",
      content: `Crypto conversion in 60 seconds !!`,
    },
  ],
});
</script>
<template>
  <div class="font-body text-[#111722]">
    <HomeHero> </HomeHero>
    <HomeFeatures> </HomeFeatures>
    <HomeCodespace> </HomeCodespace>
    <HomePricing></HomePricing>
    <HomeFaq></HomeFaq>
    <HomeFoot></HomeFoot>
  </div>
</template>
