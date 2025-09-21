<script setup lang="ts">
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
        <CardComponent
          title="Створіть резюме"
          text="Створіть власне резюме для збільшення шансів знайти ідеальну вакансію   "
          :buttons="['Створити резюме']"
        />
        <CardComponent
          bg=""
          title=""
          text="Свіжі вакансії миттєво з’являються в месенджерах!"
          :buttons="['Telegram', 'Viber']"
          image="/Frame 31.png"
        />
      </div>
      <div class="text-white mt-[30px] mb-5 w-full py-4 flex flex-col gap-10">
        <div>
          <div class="text-3xl">Професійні сфери</div>
          <div class="flex gap-2.5 items-center mt-[15px] flex-wrap">
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
              v-for="value in itemsArea"
            >
              {{ value }}
            </button>
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) bg-(--Secondary_Color) cursor-pointer"
            >
              Інше
            </button>
          </div>
        </div>
        <div>
          <div class="text-3xl">Популярні професії</div>
          <div class="flex gap-2.5 items-center mt-[15px] flex-wrap">
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
              v-for="value in itemsProf"
            >
              {{ value }}
            </button>
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) bg-(--Secondary_Color) cursor-pointer"
            >
              Інше
            </button>
          </div>
        </div>
        <div>
          <div class="text-3xl">Популярні міста</div>
          <div class="flex gap-2.5 items-center mt-[15px] flex-wrap">
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) hover:bg-(--Secondary_Color) cursor-pointer"
              v-for="value in itemsCity"
            >
              {{ value }}
            </button>
            <button
              class="text-[15px] rounded-[15px] py-1 px-2.5 border border-(--Primary_Color) bg-(--Secondary_Color) cursor-pointer"
            >
              Інше
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
