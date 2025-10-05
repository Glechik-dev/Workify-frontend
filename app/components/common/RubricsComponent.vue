<script setup lang="ts">
const { items, other = true } = defineProps({
  title: String,
  items: Array<string>,
  other: Boolean,
});
</script>

<template>
  <div>
    <div :if="title" class="text-3xl">{{ title }}</div>
    <div class="flex gap-2.5 items-center mt-[15px] flex-wrap">
      <button
        class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
        v-for="value in items"
      >
        {{ value }}
      </button>
      <button
        :if="other"
        class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) bg-(--Secondary_Color) cursor-pointer"
      >
        Інше
      </button>
    </div>
  </div>
</template>
