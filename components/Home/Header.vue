<script lang="ts" setup>
type HeaderTypes = "Light" | "Dark";
withDefaults(
  defineProps<{
    type?: HeaderTypes;
    zIndex?: string;
  }>(),
  {
    type: "Light",
    zIndex: "10",
  }
);
</script>
<template>
  <header class="fixed top-0 px-5 pt-3 w-full" :style="{ 'z-index': zIndex }">
    <div class="header header-light">
      <nuxt-link to="/">
        <img
          src="/img/glyde_logo.svg"
          class="w-[35px] md:w-[40px]"
          alt="Glyde logo"
        />
      </nuxt-link>
      <ul class="flex items-center gap-6 md:gap-16">
        <li class="">
          <a href="#" class="text-xs md:text-sm header-links"> Products </a>
        </li>
        <li class="">
          <a href="#" class="text-xs md:text-sm header-links"> Pricing </a>
        </li>
        <li class="">
          <a href="#" class="text-xs md:text-sm header-links"> FAQ's </a>
        </li>
      </ul>
      <a
        href="/"
        class="border inline-block text-xs md:text-sm header-button transition-all duration-300 rounded-full px-4 py-3"
      >
        Sign in
      </a>
    </div>
  </header>
</template>
<style>
.header {
  @apply max-w-[1060px] mx-auto flex items-center justify-between shadow-black/5 shadow-lg backdrop-blur-2xl rounded-full px-[15px] py-[15px] md:py-[21px] md:px-[32px];
}

.header-light {
  @apply bg-white/60;
}

.header-light .header-links {
  @apply text-[#373758] transition-all duration-300 ease-in hover:text-[#48487b];
}

.header-light .header-button {
  @apply text-[#373758] hover:text-[#D7D6FF] border-[#D7D6FF] hover:bg-[#373758];
}

.header-dark {
  @apply bg-[#090b16]/60;
}

.header-dark .header-links {
  @apply text-[#9c9cc2] transition-all duration-300 ease-in hover:text-[#c5c5f0];
}

.header-dark .header-button {
  @apply text-[#9c9cc2] hover:hover:text-[#c5c5f0] border-[#4c4b67] hover:bg-[#9494c8];
}
</style>
