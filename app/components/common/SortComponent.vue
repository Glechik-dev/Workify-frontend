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

const option = ref();

const options = [
  {
    name: "",
    children: [
      { name: "Всі" },
      { name: "Нові" },
      { name: "Старі" },
      { name: "З найвищим рейтингом" },
    ],
  },
];
</script>

<template>
  <ComboboxRoot
    class="w-[210px] relative text-(--Text_Color)"
    :default-value="options[0]?.children[0]?.name"
  >
    <ComboboxAnchor
      class="w-full p-2 my-2 flex items-center justify-between bg-(--Secondary_Color_Opacity) rounded-[5px] gap-[5px] border border-(--Primary_Color)"
    >
      <ComboboxInput
        class="outline-none h-full w-full selection:bg-grass5 placeholder-stone-400 text-(--Text_Color)"
      />
      <ComboboxTrigger class="w-[50px] h-full flex justify-center items-center">
        <Icon name="radix-icons:chevron-down" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent
      class="absolute z-10 w-full mt-1 bg-(--Secondary_Dark_Color) border-2 border-(--Primary_Color) overflow-hidden rounded-[15px]"
    >
      <ComboboxViewport class="p-[8px]">
        <ComboboxEmpty class="text-mauve8 font-medium text-center py-2" />

        <template v-for="(group, index) in options" :key="options.name">
          <ComboboxGroup class="flex flex-col gap-2">
            <ComboboxItem
              v-for="option in group.children"
              :key="option.name"
              :value="option.name"
              class="text-xl rounded-[3px] flex items-center pr-[35px] pl-[25px] py-1.5 relative select-none hover:bg-(--Secondary_Color) transition-colors cursor-pointer"
            >
              <ComboboxItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon name="radix-icons:check" />
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
