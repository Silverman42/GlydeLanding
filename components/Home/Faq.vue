<template>
  <div class="relative overflow-hidden">
    <section class="mt-4 bg-[#090B16] px-5 pt-[90px] md:pt-[228px] pb-[150px]">
      <div class="max-w-[1300px] mx-auto">
        <div class="max-w-[943px] mx-auto relative">
          <div
            class="absolute z-[3] pt-[80px] md:pt-[220px] w-[80%] md:w-[600px] left-[50%] translate-x-[-50%]"
          >
            <h2
              class="bg-gradient-to-b from-gray-600 to-white bg-clip-text text-transparent text-blur text-center font-semibold text-[40px] md:text-[120px]"
            >
              FAQs
            </h2>
            <p
              class="text-[0.56rem] md:text-sm text-center leading-4 md:leading-8 mt-5 w-[90%] md:w-[80%] mx-auto text-[#C2CDE0]"
            >
              We believe this few questions are most likely to be asked by you,
              so we ensured to curate the best answers for them.
            </p>
          </div>
          <img src="/img/faq.webp" class="w-full relative" alt="glyde faq" />
        </div>
        <div class="mt-5">
          <ul class="grid grid-cols-1 gap-4">
            <HomeFaqAccordion id="faq_one" value="one">
              What is Glyde all about?
              <template #body>
                <p class="mb-4">
                  If you're applying as a sole proprietor, you'll need to
                  provide proof of identity with your SSN. If you're applying as
                  a U.S. C-Corp or LLC, you'll need to provide a federal EIN
                  number, company formation documents, and proof of identity
                  (SSN for U.S. citizens. Passport for non-U.S. citizens).
                </p>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <Icon
                      name="material-symbols:arrow-forward-rounded"
                      size="1.3rem"
                    ></Icon>
                    Basic personal information (full legal name, email, phone,
                    address and date of birth).
                  </li>
                </ul>
              </template>
            </HomeFaqAccordion>
            <HomeFaqAccordion id="faq_two" value="two">
              How do I contact support when faced with an unresolved issue?
              <template #body>
                <p class="mb-4">
                  If you're applying as a sole proprietor, you'll need to
                  provide proof of identity with your SSN. If you're applying as
                  a U.S. C-Corp or LLC, you'll need to provide a federal EIN
                  number, company formation documents, and proof of identity
                  (SSN for U.S. citizens. Passport for non-U.S. citizens).
                </p>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <Icon
                      name="material-symbols:arrow-forward-rounded"
                      size="1.3rem"
                    ></Icon>
                    Basic personal information (full legal name, email, phone,
                    address and date of birth).
                  </li>
                </ul>
              </template>
            </HomeFaqAccordion>
            <HomeFaqAccordion id="faq_three" value="three">
              What are the Glyde fees I should be aware of?
              <template #body>
                <p class="mb-4">
                  If you're applying as a sole proprietor, you'll need to
                  provide proof of identity with your SSN. If you're applying as
                  a U.S. C-Corp or LLC, you'll need to provide a federal EIN
                  number, company formation documents, and proof of identity
                  (SSN for U.S. citizens. Passport for non-U.S. citizens).
                </p>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <Icon
                      name="material-symbols:arrow-forward-rounded"
                      size="1.3rem"
                    ></Icon>
                    Basic personal information (full legal name, email, phone,
                    address and date of birth).
                  </li>
                </ul>
              </template>
            </HomeFaqAccordion>
            <HomeFaqAccordion id="faq_four" value="four">
              Are my funds insured on Glyde?
              <template #body>
                <p class="mb-4">
                  If you're applying as a sole proprietor, you'll need to
                  provide proof of identity with your SSN. If you're applying as
                  a U.S. C-Corp or LLC, you'll need to provide a federal EIN
                  number, company formation documents, and proof of identity
                  (SSN for U.S. citizens. Passport for non-U.S. citizens).
                </p>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <Icon
                      name="material-symbols:arrow-forward-rounded"
                      size="1.3rem"
                    ></Icon>
                    Basic personal information (full legal name, email, phone,
                    address and date of birth).
                  </li>
                </ul>
              </template>
            </HomeFaqAccordion>
            <HomeFaqAccordion id="faq_five" value="five">
              What documents do I need to process and verify my KYC?
              <template #body>
                <p class="mb-4">
                  If you're applying as a sole proprietor, you'll need to
                  provide proof of identity with your SSN. If you're applying as
                  a U.S. C-Corp or LLC, you'll need to provide a federal EIN
                  number, company formation documents, and proof of identity
                  (SSN for U.S. citizens. Passport for non-U.S. citizens).
                </p>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <Icon
                      name="material-symbols:arrow-forward-rounded"
                      size="1.3rem"
                    ></Icon>
                    Basic personal information (full legal name, email, phone,
                    address and date of birth).
                  </li>
                </ul>
              </template>
            </HomeFaqAccordion>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
