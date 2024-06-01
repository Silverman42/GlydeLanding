<script lang="ts" setup>
withDefaults(
  defineProps<{
    id?: string;
    name?: string;
    value?: string;
  }>(),
  {
    id: "",
    name: "faqs",
    value: "",
  }
);
</script>
<template>
  <li
    class="border-y border-[#151828] hover:border-[#272d4d] transition-all duration-300 cursor-pointer"
  >
    <input
      type="radio"
      class="sr-only peer"
      :name="name"
      :value="value"
      :id="id"
    />
    <label
      :for="id"
      class="flex justify-between w-full items-center gap-3 p-4 md:p-8 cursor-pointer"
    >
      <h3 class="font-medium text-lg md:text-[23px] text-white">
        <slot></slot>
      </h3>
      <Icon name="IconsAccordion" size="1.6rem"></Icon>
    </label>
    <div
      class="max-h-0 overflow-hidden transition-all duration-300 ease-out peer-checked:max-h-[1000px]"
    >
      <div class="p-4 pt-0 md:p-8 md:pt-0 text-[#DDE3EE] text-xs leading-8">
        <slot name="body"></slot>
      </div>
    </div>
  </li>
</template>
