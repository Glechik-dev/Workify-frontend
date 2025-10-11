<script setup lang="ts">
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from "reka-ui";

const { options, placeholder, searchFunction, value } = defineProps({
  options: {
    type: Array<{ name: string; children: Array<{ name: string }> }>,
    required: true,
  },
  placeholder: String,
  searchFunction: {
    type: Function,
    required: true,
  },
  value: String,
});
</script>

<template>
  <ComboboxRoot
    class="relative text-(--Text_Black_Color) w-full"
    v-on:update:model-value="(value) => searchFunction(value)"
    :model-value="value"
  >
    <ComboboxAnchor
      class="w-full p-2 my-2 flex items-center justify-between bg-(--BG_White_Color) rounded-r-[15px] gap-[5px]"
    >
      <ComboboxInput
        class="outline-none text-grass11 h-full w-full selection:bg-grass5 placeholder-stone-400 text-(--Text_Black_Color)"
        :placeholder="placeholder"
      />
      <ComboboxTrigger class="w-[50px] h-full flex justify-center items-center">
        <Icon name="radix-icons:chevron-down" class="text-grass11 text-black" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent
      class="absolute z-10 w-full mt-1 min-w-[160px] bg-white border-2 border-(--Primary_Color) overflow-hidden rounded-[15px]"
    >
      <ComboboxViewport class="p-[5px]">
        <ComboboxEmpty class="text-mauve8 font-medium text-center py-2" />

        <template v-for="(group, index) in options" :key="options.name">
          <ComboboxGroup class="h-[180px] overflow-auto">
            <ComboboxSeparator
              v-if="index !== 0"
              class="h-[1px] bg-grass6 m-[5px]"
            />

            <ComboboxLabel class="px-[25px] text-2xl font-bold">
              {{ group.name }}
            </ComboboxLabel>

            <ComboboxItem
              v-for="option in group.children"
              :key="option.name"
              :value="option.name"
              class="text-xl leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none hover:bg-(--BG_Muted_Color) transition-colors cursor-pointer"
            >
              <ComboboxItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon name="radix-icons:check" class="text-black" />
              </ComboboxItemIndicator>
              <span>
                {{ option.name }}
              </span>
            </ComboboxItem>
          </ComboboxGroup>
        </template>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
