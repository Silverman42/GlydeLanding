<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Glyde : Automated disbursement in a flash",
  meta: [
    {
      name: "description",
      content: "Glyde : Automated disbursement in a flash",
    },
    {
      property: "og:description",
      content: `Glyde : Automated disbursement in a flash`,
    },
    {
      property: "twitter:description",
      content: `Glyde : Automated disbursement in a flash`,
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
