<script setup lang="ts">
const { placeholder } = defineProps({
  placeholder: String,
});
</script>

<template>
  <input
    type="text"
    class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
    :placeholder="placeholder"
  />
</template>
