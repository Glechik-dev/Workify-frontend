<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from "reka-ui";
</script>

<template>
  <PaginationRoot
    :total="100"
    :sibling-count="1"
    :items-per-page="10"
    show-edges
    class="w-full"
  >
    <PaginationList
      v-slot="{ items }"
      class="w-full flex items-center justify-center gap-5"
    >
      <PaginationFirst
        class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-(--Secondary_Color_03_Opacity) transition rounded-[15px] cursor-pointer"
      >
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev
        class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-(--Secondary_Color_03_Opacity) rounded-[15px] cursor-pointer"
      >
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="w-9 h-9 border border-(--Primary_Color) bg-(--Secondary_Color_03_Opacity) data-[selected]:!bg-(--Secondary_Color) rounded-[15px] transition hover:bg-(--Secondary_Color) cursor-pointer"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext
        class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-(--Secondary_Color_03_Opacity) transition rounded-[15px] cursor-pointer"
      >
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast
        class="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-(--Secondary_Color_03_Opacity) transition rounded-[15px] cursor-pointer"
      >
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
