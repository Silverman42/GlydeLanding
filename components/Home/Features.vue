import type { HomeFeatures } from '#build/components';
<script lang="ts" setup>
const features = [
  {
    icon: "/img/feats_hands_free.svg",
    heading: "Hands-free Approach",
    content_one: ` Error free disbursement for businesses with influx payments is
              certain,`,
    content_two: `while keeping the cashflow unified within a fiat wallet.`,
    link_title: `Get my business cashflow unified?`,
    link: `/`,
  },
  {
    icon: "/img/feats_business_unify.svg",
    heading: "Business Unification",
    content_one: `Glyde unifies multiple businesses with the convenience of managing`,
    content_two: `all payment workflows in a lightening speed.`,
    link_title: `Onboard all my individual businesses?`,
    link: `/`,
  },
  {
    icon: "/img/feats_lightening_speed.svg",
    heading: "Lightening speed settlement",
    content_one: `Payment surge from customers requires a few clicks and not an`,
    content_two: `additional employers, so, no more hiring spree.`,
    link_title: `Exit the sphere of continuous hiring spree?`,
    link: `/`,
  },
];
</script>
<template>
  <section
    class="rounded-3xl mt-4 bg-[#F8F9FC] px-5 pt-[90px] md:pt-[286px] pb-[56px]"
  >
    <div class="max-w-[1300px] mx-auto">
      <h2
        class="mx-auto max-w-[520px] text-[20px] md:text-[32px] font-bold -tracking-wider text-center"
      >
        Administrative burdens reduced without increasing your hiring streaks
      </h2>
      <p
        class="mx-auto max-w-[352px] text-center text-sm p-3 leading-8 mt-[12px]"
      >
        Grow your business with laser focus without hiring extra hands - let us
        handle the repetitive tasks.
      </p>
      <div class="pt-[50px] grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-[#F2F2F8] rounded-2xl p-[24px] flex flex-col gap-[32px] border border-[#ECECF3]"
          v-for="(feat, index) in features"
        >
          <img :src="feat.icon" class="w-[64px]" alt="Hands-free Approach" />
          <div>
            <h3 class="text-[8px] uppercase tracking-widest font-extrabold">
              {{ feat.heading }}
            </h3>
            <p class="text-lg leading-8 mt-2">
              {{ feat.content_one }}
              <span class="text-[#7D7DA1]">
                {{ feat.content_two }}
              </span>
            </p>
          </div>
          <img
            src="/img/features_img.webp"
            class="w-full"
            alt="glyde features"
          />
          <div>
            <nuxt-link
              class="p-3 rounded-full text-xs flex justify-between hover:bg-[#474785] hover:text-[#E8E8F3] transition-all duration-300 ease-out group items-center bg-[#E8E8F3] text-[#474785]"
              :to="feat.link"
            >
              <span> {{ feat.link_title }}</span>
              <span
                class="rounded-full flex justify-center items-center w-10 h-10 bg-[#F2F2F8] border group-hover:border-[#272752] border-[#E4E4F1] text-black"
              >
                <Icon
                  name="material-symbols:arrow-right-alt"
                  size="1.5rem"
                ></Icon>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
