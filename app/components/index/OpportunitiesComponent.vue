<script setup lang="ts">
import RubricsComponent from "@/components/common/RubricsComponent.vue";
const itemsArea = ref([
  "HR спеціаліси",
  "IT",
  "Автобізнес",
  "Адміністративний персонал",
  "Банки",
  "Будівництво",
  "Бухгалтерія",
  "Готелі",
  "Виробництво",
  "Дизайн",
  "Закупівлі",
]);
const itemsProf = ref([
  "Водій",
  "Бармен",
  "Юрист",
  "Кур'єр",
  "Бухгалтер",
  "Менеджер",
  "Офіціант",
  "Бариста",
  "Патрульний",
]);
const itemsCity = ref([
  "Вся Україна",
  "Київ",
  "Харків",
  "Львів",
  "Одеса",
  "Дніпро",
  "Запоріжжя",
  "Кривий Ріг",
  "Тернопіль",
  "Івано-Франківськ",
  "Вінниця",
  "Інші Країни",
]);
</script>

<template>
  <div
    class="w-full h-full mt-5 relative overflow-x-hidden flex justify-center"
  >
    <div class="absolute bottom-[425px] right-[-65px]">
      <NuxtImg src="logo (1).png" />
    </div>
    <div class="absolute bottom-[25px] left-[-25px]">
      <NuxtImg src="Rectangle 25 (1).png" />
    </div>

    <div class="w-full h-full container px-35">
      <div class="flex justify-between h-[250px]">
        <CommonCardComponent
          title="Створіть резюме"
          text="Створіть власне резюме для збільшення шансів знайти ідеальну вакансію   "
          :buttons="['Створити резюме']"
        />
        <CommonCardComponent
          bg=""
          title=""
          text="Свіжі вакансії миттєво з’являються в месенджерах!"
          :buttons="['Telegram', 'Viber']"
          image="/Frame 31.png"
        />
      </div>
      <div
        class="text-(--Text_Color) mt-[30px] mb-5 w-full py-4 flex flex-col gap-10"
      >
        <RubricsComponent title="Професійні сфери" :items="itemsArea" />
        <RubricsComponent title="Популярні професії" :items="itemsProf" />
        <RubricsComponent title="Популярні міста" :items="itemsCity" />
      </div>
    </div>
  </div>
</template>
