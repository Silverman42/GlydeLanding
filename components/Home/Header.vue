<template>
  <header class="fixed top-0 px-5 z-[100] pt-3 w-full">
    <div
      class="max-w-[1060px] mx-auto flex items-center justify-between bg-white/60 shadow-black/5 shadow-lg backdrop-blur-xl rounded-full px-[15px] py-[15px] md:py-[21px] md:px-[32px]"
    >
      <nuxt-link to="/">
        <img
          src="/img/glyde_logo.svg"
          class="w-[35px] md:w-[40px]"
          alt="Glyde logo"
        />
      </nuxt-link>
      <ul class="flex items-center gap-6 md:gap-16">
        <li class="">
          <a href="#" class="text-sm text-[#373758]"> Products </a>
        </li>
        <li class="">
          <a href="#" class="text-sm text-[#373758]"> Pricing </a>
        </li>
        <li class="">
          <a href="#" class="text-sm text-[#373758]"> FAQ's </a>
        </li>
      </ul>
      <a
        href="/"
        class="border inline-block text-sm text-[#373758] hover:text-[#D7D6FF] transition-all duration-300 hover:bg-[#373758] rounded-full border-[#D7D6FF] px-4 py-3"
      >
        Sign in
      </a>
    </div>
  </header>
</template>
