<script setup lang="ts">
const {
  items,
  title,
  other = true,
} = defineProps({
  title: String,
  items: Array<string>,
  other: Boolean,
  routeStyle: String,
  buttonStyle: String,
});
</script>

<template>
  <div>
    <div v-if="title" class="text-3xl">{{ title }}</div>
    <div
      class="flex gap-2.5 items-center mt-[15px] flex-wrap"
      :class="[routeStyle]"
    >
      <button
        class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
        :class="[buttonStyle]"
        v-for="value in items"
      >
        {{ value }}
      </button>
      <button
        v-if="other"
        class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) bg-(--Secondary_Color) cursor-pointer"
      >
        Інше
      </button>
    </div>
  </div>
</template>
