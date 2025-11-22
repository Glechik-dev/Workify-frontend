<script setup lang="ts">
defineProps({
  route: String,
  container: String,
});
</script>

<template>
  <div
    class="w-full text-(--Text_Color) overflow-hidden"
    :class="[route || '']"
  >
    <div class="w-full container px-35" :class="[container || '']">
      <slot />
    </div>
  </div>
</template>
