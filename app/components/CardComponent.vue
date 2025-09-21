<script setup lang="ts">
const {
  w = "w-[580px]",
  h = "h-[250px]",
  border = "border-(--Primary_Color)",
  rounded = "rounded-[15px]",
  bg = "bg-(--Secondary_Color_Opacity)",
} = defineProps<{
  bg?: string;
  rounded?: string;
  w?: string;
  h?: string;
  border?: string;

  title: string;
  text: string;
  buttons: Array<string>;
  image?: string;
}>();
</script>

<template>
  <div
    class="border text-white p-5 flex flex-col justify-between relative"
    :class="[w, h, border, rounded, bg]"
  >
    <div>
      <div class="text-[40px]">{{ title }}</div>
      <div class="text-[25px] mb-[10px]">
        {{ text }}
      </div>
    </div>
    <div class="flex gap-3">
      <button
        class="w-fit text-[20px] mb-[10px] px-2.5 py-1 border border-(--Primary_Color) rounded-[15px] cursor-pointer hover:bg-(--Secondary_Color)"
        v-for="button in buttons"
      >
        {{ button }}
      </button>
    </div>
    <NuxtImg
      v-if="image"
      :src="image"
      class="absolute bottom-[20px] right-[15px]"
    />
  </div>
</template>
