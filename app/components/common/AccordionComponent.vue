<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "reka-ui";
import type { FilterType } from "@/types/filter";

const { items } = defineProps({
  items: Array<FilterType>,
});
</script>

<template>
  <AccordionRoot
    class="flex flex-col gap-2.5"
    :collapsible="true"
    type="multiple"
  >
    <template v-for="item in items" :key="item.value">
      <AccordionItem :value="item.value">
        <AccordionHeader
          class="w-full p-2 mb-2 bg-(--Secondary_Color_Opacity) border border-(--Primary_Color) rounded-[15px]"
        >
          <AccordionTrigger class="text-xl">
            <div class="w-full h-full text-left cursor-pointer">
              {{ item.title }}
            </div>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          class="p-2.5 pt-0 flex flex-col gap-1.5 AccordionContent"
        >
          <template v-for="value in item.contents">
            <CommonCheckboxComponent :title="value.title" />
          </template>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style>
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state="open"] {
  animation: slideDown 300ms ease-out forwards;
}
.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms ease-out forwards;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
