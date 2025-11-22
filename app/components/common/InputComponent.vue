<script setup lang="ts">
const { placeholder, error } = defineProps({
  placeholder: String,
  error: String,
});

const model = defineModel<any>();
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <input
      type="text"
      class="px-5 py-3 w-full h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
      :class="{ '!border-(--Error_Color)': error }"
      v-model="model"
      :placeholder="placeholder"
    />
    <CommonInputErrorComponent :error="error" />
  </div>
</template>
