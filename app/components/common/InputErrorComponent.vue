<script setup lang="ts">
const { error } = defineProps({
  error: String,
});
</script>

<template>
  <div class="text-(--Error_Color)" v-if="error">
    {{ error }}
  </div>
</template>
