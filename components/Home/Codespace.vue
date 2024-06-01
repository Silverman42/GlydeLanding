<script setup lang="ts">
const testimonies = [
  {
    heading: "Supa-fast Integration",
    body: `Payment surge from customers requires a few clicks and
                  commuted reach across dev while ensuring a whole lot of
                  change.`,
    author: "CEO, Vent Africa",
  },
];

const activeIndex = ref(0);
</script>
<template>
  <section
    class="rounded-3xl px-5 mt-4 bg-[#F8F9FC] pt-[90px] md:pt-[286px] pb-[56px]"
  >
    <div class="max-w-[1300px] mx-auto">
      <h2
        class="mx-auto max-w-[520px] text-[20px] md:text-[32px] font-bold -tracking-wider text-center"
      >
        Powering digital businesses <br />
        with a robust sophisticated api’s
      </h2>
      <p
        class="mx-auto max-w-[500px] text-center text-sm p-3 leading-8 mt-[12px] text-[#465572]"
      >
        Our powerful APIs are the secret sauce to get your business up and
        running faster, and stay ahead of the competition.
      </p>
      <div class="pt-[50px] grid grid-cols-1 md:grid-cols-3 gap-2">
        <div class="md:col-span-2">
          <img src="/img/code_sample.webp" class="w-full" alt="code sample" />
        </div>
        <div class="bg-[#111722] rounded-2xl p-[24px] flex flex-col gap-[32px]">
          <div class="w-full mb-[50px]">
            <h3
              class="text-[8px] uppercase font-bold tracking-[0.15rem] text-[#CDDBF4]"
            >
              Redefining the disbursement patterns
            </h3>
            <p class="text-[19px] md:text-[23px] leading-8 mt-2 text-[#D6DDEB]">
              Glyde unifies multiple businesses with the convenience of managing
              all payment workflows in a lightening speed.
            </p>
          </div>
          <div class="mt-auto relative">
            <div
              class="w-full bg-[#A0B0CF29] top-[-30%] rounded-lg pt-[24px] flex absolute z-[1] scale-[0.8]"
            >
              <div class="flex-shrink-0 p-[24px] pt-0"></div>
              <div
                class="p-[24px] flex-grow flex flex-col gap-4 pt-0 border-l border-transparent"
              >
                <h4
                  class="text-[8px] uppercase font-bold tracking-[0.15rem] text-transparent"
                >
                  {{ testimonies[activeIndex].heading }}
                </h4>
                <p class="text-xs leading-6 text-transparent">
                  {{ testimonies[activeIndex].body }}
                </p>
                <p class="text-[#1F293D] text-transparent font-semibold">
                  {{ testimonies[activeIndex].author }}
                </p>
              </div>
            </div>
            <div
              class="w-full bg-[#454e61f3] top-[-15%] rounded-lg pt-[24px] flex absolute z-[2] scale-[0.9]"
            >
              <div class="flex-shrink-0 p-[24px] pt-0"></div>
              <div
                class="p-[24px] flex-grow flex flex-col gap-4 pt-0 border-l border-transparent"
              >
                <h4
                  class="text-[8px] uppercase font-bold tracking-[0.15rem] text-transparent"
                >
                  {{ testimonies[activeIndex].heading }}
                </h4>
                <p class="text-xs leading-6 text-transparent">
                  {{ testimonies[activeIndex].body }}
                </p>
                <p class="text-[#1F293D] text-transparent font-semibold">
                  {{ testimonies[activeIndex].author }}
                </p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg pt-[24px] flex relative z-[3]"
            >
              <div class="flex-shrink-0 p-[24px] pt-0">
                <img
                  src="/img/code_sample_icon.png"
                  class="w-[32px] rounded-full aspect-square"
                  alt="code sample icon"
                />
              </div>
              <div
                class="p-[24px] flex-grow flex flex-col gap-4 pt-0 border-l border-[#EBEEF5]"
              >
                <h4
                  class="text-[8px] uppercase font-bold tracking-[0.15rem] text-[#3A4F74]"
                >
                  {{ testimonies[activeIndex].heading }}
                </h4>
                <p class="text-xs leading-6 text-[#47618F]">
                  {{ testimonies[activeIndex].body }}
                </p>
                <p class="text-[#1F293D] text-[0.68rem] font-semibold">
                  {{ testimonies[activeIndex].author }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
