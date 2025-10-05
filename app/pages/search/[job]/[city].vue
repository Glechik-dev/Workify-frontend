<script setup lang="ts">
const route = useRoute();
console.log(route.params);
</script>

<template>
  <SearchHeaderComponent />
  <SearchBodyComponent />
</template>
