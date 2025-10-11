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

const items = ref([
  "Всі вакансії",
  "Віддалена робота",
  "Без досвіду",
  "Часткова зайнятість",
  "Без резюме",
  "Для людей з інвалідністю",
  "Для ветеранів",
]);
</script>

<template>
  <div
    class="w-full h-[350px] bg-(--BG_Second_Color) text-(--Text_Color) flex justify-center relative"
  >
    <div class="absolute bottom-[5px] left-0 rotate-90">
      <NuxtImg src="/Frame 31.png" />
    </div>
    <div class="absolute top-0 right-0 rotate-90">
      <NuxtImg src="/Frame 31.png" />
    </div>
    <div class="w-full h-full px-35 py-14 container">
      <div
        class="text-[50px] flex items-end justify-start h-[60px] font-bold gap-2.5"
      >
        Знайдіть <span class="text-(--Primary_Color)"> роботу </span> вже
        сьогодні
      </div>
      <div
        class="text-[20px] flex items-center justify-start h-[20px] font-bold mt-[10px] text-(--Text_Muted_Color)"
      >
        Тисячі вакансій у сфері комп’ютерних наук, інженерії та технологій
        чекають саме на тебе.
      </div>
      <SearchComponent
        :options="options"
        placeholder="Виберіть місто/країну"
        :routing="true"
      />
      <div class="flex gap-2.5 items-center">
        <button
          class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
          v-for="value in items"
        >
          {{ value }}
        </button>
      </div>
    </div>
  </div>
</template>
