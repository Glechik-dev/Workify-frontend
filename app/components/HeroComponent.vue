import { HeroCompoboxComponent, NuxtImg } from '../../.nuxt/components';
<script setup lang="ts">
const options = [
  {
    name: "cities",
    children: [
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
    class="w-full h-[350px] bg-(--BG_Second_Color) text-(--Text_Color) flex justify-center relative overflow-hidden"
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
      <div class="w-full mt-8 mb-4 flex gap-[20px]">
        <div class="h-[49px] flex input__container rounded-[15px]">
          <div
            class="w-[40px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) rounded-l-[15px] flex items-center justify-center cursor-pointer find"
          >
            <Icon name="heroicons-solid:search" size="25" />
          </div>
          <input
            type="text"
            name="findJob"
            placeholder="Ким або в якій компанії Ви хочете працювати?"
            class="w-[830px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) py-[5px] px-[10px] text-[25px]"
          />
          <div
            class="w-[150px] h-12 bg-(--BG_White_Color) rounded-r-[15px] flex items-center drop"
          >
            <div class="w-[2px] h-10 bg-gray-600"></div>
            <!-- <HeroCompoboxComponent :options="options" /> -->
          </div>
        </div>
        <div
          class="w-[240px] h-12 border border-(--Primary_Color) rounded-[15px] flex items-center justify-center text-[20px] transition-colors hover:bg-(--Secondary_Color) cursor-pointer gap-2"
        >
          <Icon name="el:search-alt" size="17" class="pb-0.5" /> Знайти роботу
        </div>
      </div>
      <div class="flex gap-2.5 items-center">
        <div
          class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
          v-for="value in items"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input:focus {
  outline: none;
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
}

.input__container:focus-within .find {
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-left: 2px solid var(--Primary_Hover_Color);
}

.input__container:focus-within .drop {
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-right: 2px solid var(--Primary_Hover_Color);
}
</style>
