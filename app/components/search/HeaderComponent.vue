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
  <div
    class="w-full text-(--Text_Color) bg-(--BG_Second_Color) flex justify-center relative overflow-hidden"
  >
    <NuxtImg src="/Frame 31.png" class="absolute left-0 rotate-90" />
    <NuxtImg src="/Frame 31.png" class="absolute right-0 rotate-90" />
    <div class="w-full container px-35 pb-3.5">
      <div>
        <SearchComponent
          :options="options"
          placeholder="Виберіть місто/країну"
        />
      </div>
    </div>
  </div>
</template>
