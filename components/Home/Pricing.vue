<template>
  <section
    class="rounded-3xl px-5 mt-4 bg-[#F8F9FC] pt-[90px] md:pt-[286px] pb-[56px]"
  >
    <div class="max-w-[1300px] mx-auto">
      <h2
        class="mx-auto max-w-[520px] text-[20px] md:text-[32px] font-bold -tracking-wider text-[#111722] text-center"
      >
        A financial system designed to size your pocket and not to break a bank
      </h2>
      <p
        class="mx-auto max-w-[500px] text-center text-sm p-3 leading-8 mt-[12px] text-[#4C3D2F]"
      >
        No more one-size-fits-all solutions that drain your bank account. Your
        cashflow is not synonymous to fees
      </p>
      <div
        class="mt-[50px] grid grid-cols-1 md:grid-cols-2 border border-[#EDCFAB] rounded-3xl relative border-dashed"
      >
        <img
          src="/img/pricing_border_icon.svg"
          class="w-[36px] absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
          alt=""
        />
        <img
          src="/img/pricing_border_icon.svg"
          class="w-[36px] absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]"
          alt=""
        />
        <img
          src="/img/pricing_border_icon.svg"
          class="w-[36px] absolute bottom-[50%] translate-y-[50%] left-0 translate-x-[-50%]"
          alt=""
        />
        <img
          src="/img/pricing_border_icon.svg"
          class="w-[36px] absolute bottom-[50%] translate-y-[50%] right-0 translate-x-[50%]"
          alt=""
        />
        <div
          class="p-[16px] border-b border-r-0 md:border-b-0 md:border-r border-[#EDCFAB] border-dashed"
        >
          <div
            class="bg-[#ffffff] rounded-3xl p-[32px] overflow-hidden relative"
          >
            <img
              src="/img/pricing_backdrop.svg"
              class="absolute right-[-50%] top-[-50px] md:top-[0px] md:right-[0px]"
              alt=""
            />
            <div class="mb-[40px]">
              <h3
                class="text-[10px] uppercase font-bold tracking-[0.15rem] text-[#A98E74] mb-[15px]"
              >
                Starting at
              </h3>
              <p class="text-[#221911] font-bold text-[60px] md:text-[104px]">
                $249
              </p>
              <p
                class="text-[#000000] tracking-wider uppercase text-[18px] md:text-[24px] font-bold"
              >
                Premium Start
              </p>
            </div>
            <div
              class="border-y border-[#FFEBD6] py-[13px] flex gap-5 items-center mb-[24px]"
            >
              <p
                class="text-xs md:text-sm leading-6 md:leading-8 text-[#4C3D2F]"
              >
                No more one-size-fits-all solutions that drain your bank
                account. Your cashflow is not synonymous to fees
              </p>
              <img src="/img/pricing_divider.svg" alt="divider" />
              <a
                href="#"
                class="after:contents-[''] ring-[#E0CCB8] flex-shrink-0 inline-block relative overflow-hidden rounded-full p-[1.5px] ring-2 after:absolute after:left-0 after:top-0 after:z-[0] after:h-full after:w-full after:bg-gradient-to-b after:from-[#f6efec] after:to-[#fefcfb3e] after:transition-all after:duration-500 hover:after:rotate-180"
              >
                <span
                  class="relative z-[1] text-sm inline-flex items-center gap-x-2 rounded-full bg-gradient-to-b duration-300 from-[#ecdbcc] to-[#FEF7F0] hover:from-[#FEF7F0] hover:to-[#ecdbcc] px-4 py-2 font-bold text-[#65523E] transition-all"
                >
                  <span> Monthly </span>
                </span>
              </a>
            </div>
            <ul class="flex flex-col gap-5 mb-[32px]">
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">Visibility Dashboard</p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">
                  Savings Instrument Management
                </p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">
                  Rightsizing Recommendations
                </p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">Email Support</p>
              </li>
            </ul>
            <div>
              <nuxt-link
                class="p-3 rounded-full text-sm font-semibold flex justify-between bg-[#FFECD6] transition-all duration-300 ease-out group items-center border border-[#FFE2C2] text-[#111111]"
                to="/"
              >
                <span> Start 7 Days Free - Trial</span>
                <span
                  class="rounded-full flex justify-center items-center w-10 h-10 bg-[#111722] border border-[#111722] text-white"
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
        <div class="p-[16px]">
          <div
            class="bg-[#ffffff] rounded-3xl p-[32px] overflow-hidden relative"
          >
            <img
              src="/img/pricing_backdrop.svg"
              class="absolute right-[-50%] top-[-50px] md:top-[0px] md:right-[0px]"
              alt=""
            />
            <div class="mb-[40px]">
              <h3
                class="text-[10px] uppercase font-bold tracking-[0.15rem] text-[#A98E74] mb-[15px]"
              >
                Starting at
              </h3>
              <p class="text-[#221911] font-bold text-[60px] md:text-[104px]">
                $899
              </p>
              <p
                class="text-[#000000] tracking-wider uppercase text-[18px] md:text-[24px] font-bold"
              >
                Enterprise Scale
              </p>
            </div>
            <div
              class="border-y border-[#FFEBD6] py-[13px] flex gap-5 items-center mb-[24px]"
            >
              <p
                class="text-xs md:text-sm leading-6 md:leading-8 text-[#4C3D2F]"
              >
                No more one-size-fits-all solutions that drain your bank
                account. Your cashflow is not synonymous to fees
              </p>
              <img src="/img/pricing_divider.svg" alt="divider" />
              <a
                href="#"
                class="after:contents-[''] ring-[#E0CCB8] flex-shrink-0 inline-block relative overflow-hidden rounded-full p-[1.5px] ring-2 after:absolute after:left-0 after:top-0 after:z-[0] after:h-full after:w-full after:bg-gradient-to-b after:from-[#f6efec] after:to-[#fefcfb3e] after:transition-all after:duration-500 hover:after:rotate-180"
              >
                <span
                  class="relative z-[1] text-sm inline-flex items-center gap-x-2 rounded-full bg-gradient-to-b duration-300 from-[#ecdbcc] to-[#FEF7F0] hover:from-[#FEF7F0] hover:to-[#ecdbcc] px-4 py-2 font-bold text-[#65523E] transition-all"
                >
                  <span> Monthly </span>
                </span>
              </a>
            </div>
            <ul class="flex flex-col gap-5 mb-[32px]">
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">Visibility Dashboard</p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">
                  Savings Instrument Management
                </p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">
                  Rightsizing Recommendations
                </p>
              </li>
              <li class="flex items-center gap-x-4">
                <Icon name="IconsCheckmark" size="1.3rem"></Icon>
                <p class="text-[#000000] text-xs">Email Support</p>
              </li>
            </ul>
            <div>
              <nuxt-link
                class="p-3 rounded-full text-sm font-semibold flex justify-between bg-[#111722] shadow-lg shadow-[#40291252] transition-all duration-300 ease-out group items-center text-white"
                to="/"
              >
                <span> Start 7 Days Free - Trial</span>
                <span
                  class="rounded-full flex justify-center items-center w-10 h-10 bg-[#FF4545] border border-[#FF4545] text-white"
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
    </div>
  </section>
</template>
