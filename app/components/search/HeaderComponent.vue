<script setup lang="ts">
import SearchComponent from "@/components/common/SearchComponent.vue";

const options: Array<{ name: string; children: { name: string }[] }> = [
  {
    name: "",
    children: [
      { name: "Україна" },
      { name: "Київ" },
      { name: "Львів" },
      { name: "Одеса" },
      { name: "Харків" },
      { name: "Житомир" },
      { name: "Дніпро" },
      { name: "Запоріжжя" },
      { name: "Інші Країни" },
    ],
  },
];
</script>

<template>
  <div class="w-full text-(--Text_Color) flex justify-center">
    <div class="w-full container px-35 bg-(--BG_Second_Color)">
      <div>
        <SearchComponent
          :options="options"
          placeholder="Виберіть місто/країну"
        />
      </div>
    </div>
  </div>
</template>
