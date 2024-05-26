<template>
  <footer class="mt-4 bg-[#F8F9FC] px-5 pt-[90px] md:pt-[192px] pb-[56px]">
    <div class="max-w-[1300px] mx-auto flex flex-col gap-[56px]">
      <img src="/img/footer_img.webp" class="w-full" alt="glyde footer" />
      <div
        class="border-y border-[#EBEEF5] py-[16px] flex flex-col items-start md:items-center md:flex-row gap-y-[30px] md:justify-between"
      >
        <span
          class="inline-flex w-auto gap-3 px-3 py-2 border border-[#DDE3EE] rounded-full text-[8px] uppercase tracking-[0.15rem] md:flex-shrink-0"
        >
          <i class="block rounded-full w-2 h-2 bg-[#9B99FF] mt-[1px]"></i>
          Open to beta testing
        </span>
        <ul
          class="inline-flex w-full items-center md:w-auto md:gap-12 justify-between md:justify-end"
        >
          <li>
            <nuxt-link
              to="/"
              class="text-[#8191B1] transition-all duration-300 hover:text-[#4e5d7c] font-medium text-xs"
            >
              Privacy Policy</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="text-[#8191B1] transition-all duration-300 hover:text-[#4e5d7c] font-medium text-xs"
            >
              Terms of Service</nuxt-link
            >
          </li>
          <li>
            <p
              to="/"
              class="text-[#8191B1] transition-all duration-300 font-medium text-xs"
            >
              © 2024 Glyde Inc.
            </p>
          </li>
        </ul>
      </div>
      <div class="flex flex-col md:flex-row gap-[50px] md:justify-between">
        <ul>
          <li class="flex gap-2 items-center mb-[20px]">
            <p
              class="uppercase text-xs font-bold text-[#717E98] tracking-[0.15rem] pr-3 border-r border-[#C0C8D8]"
            >
              Location
            </p>
            <p class="text-xs text-[#111722]">
              251 Little Falls Drive, Wilmington DE, 19808.
            </p>
          </li>
          <li class="flex gap-2 items-center">
            <p
              class="uppercase text-xs font-bold text-[#717E98] tracking-[0.15rem] pr-3 border-r border-[#C0C8D8]"
            >
              Connect
            </p>
            <div class="flex gap-5 items-center">
              <a href="#">
                <img
                  src="/img/facebook_icon.svg"
                  class="w-[28px]"
                  alt="facebook link"
                />
              </a>
              <a href="#">
                <img
                  src="/img/linkedin_icon.svg"
                  class="w-[24px]"
                  alt="facebook link"
                />
              </a>
              <a href="#">
                <img
                  src="/img/twitter_icon.svg"
                  class="w-[24px]"
                  alt="facebook link"
                />
              </a>
              <a href="#">
                <img
                  src="/img/instagram_icon.svg"
                  class="w-[24px]"
                  alt="facebook link"
                />
              </a>
            </div>
          </li>
        </ul>
        <ul class="inline-flex items-center w-auto gap-[50px]">
          <li>
            <p
              class="uppercase text-[0.65rem] font-bold mb-4 text-[#717E98] tracking-[0.15rem]"
            >
              Legal links
            </p>
            <nuxt-link class="text-xs text-[#111722] hover:text-black" to="/">
              AML/KYC & Compliance
            </nuxt-link>
          </li>
          <li>
            <p
              class="uppercase text-[0.65rem] font-bold mb-4 text-[#717E98] tracking-[0.15rem]"
            >
              Other Links
            </p>
            <a class="text-xs text-[#111722] hover:text-black" href="mailto:">
              Official Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
