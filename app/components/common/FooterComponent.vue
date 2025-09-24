<script></script>

<template>
  <footer
    class="w-full mt-15 border-t border-t-(--Secondary_Color_Opacity) flex flex-col items-center text-(--Text_Color) relative overflow-hidden"
  >
    <div class="absolute bottom-15 right-5 rotate-90">
      <NuxtImg src="/Frame 22.png" />
    </div>

    <div class="container px-35 w-full h-full py-3">
      <div class="flex justify-between">
        <div class="flex flex-col gap-2.5 w-50">
          <NuxtImg
            src="/site logo.png"
            class="relative left-[-10px] cursor-pointer"
          />
          <div class="flex gap-4">
            <Icon name="entypo-social:instagram" class="cursor-pointer" />
            <Icon name="entypo-social:facebook" class="cursor-pointer" />
            <Icon name="entypo-social:twitter" class="cursor-pointer" />
            <Icon name="entypo-social:youtube" class="cursor-pointer" />
            <Icon name="akar-icons:telegram-fill" class="cursor-pointer" />
            <Icon
              name="basil:viber-solid"
              class="cursor-pointer text-[20px] relative top-[-2px]"
            />
          </div>
        </div>
        <div class="w-[190px]">
          <div class="text-2xl text-(--Text_Muted_Color)">Пошукачу</div>
          <ul class="relative left-[18px] flex flex-col gap-2 mt-2.5">
            <li class="cursor-pointer">Знайти роботу</li>
            <li class="cursor-pointer">Розмістити резюме</li>
            <li class="cursor-pointer">Як скласти резюме</li>
          </ul>
        </div>
        <div class="w-[190px]">
          <div class="text-2xl text-(--Text_Muted_Color)">Роботодавцю</div>
          <ul class="relative left-[17px] flex flex-col gap-2 mt-2.5">
            <li class="cursor-pointer">Додати вакансію</li>
            <li class="cursor-pointer">Знайти резюме</li>
            <li class="cursor-pointer">Наші послуги</li>
          </ul>
        </div>
        <div>
          <div class="text-2xl text-(--Text_Muted_Color)">Workify</div>
          <ul class="relative left-[20px] flex flex-col gap-2 mt-2.5">
            <li class="cursor-pointer">Про компанію</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="container px-35 w-full h-full py-3 mt-6 border-t border-t-(--Secondary_Color_Opacity)"
    >
      <div class="flex flex-col text-(--Text_Muted_Color)">
        <div class="text-[10px] w-[450px]">
          ТОВ «Workify» © 2025 Всі права захищені та охороняються чинним
          законодавством України. Використання будь-яких матеріалів даного сайту
          дозволяється виключно за умови збереження оригінального змісту та
          обов’язкового зазначення гіперпосилання на першоджерело. Адміністрація
          не несе відповідальності за зміст розміщених користувачами оголошень.
        </div>
        <ul class="flex gap-10 text-[10px] mt-4 relative left-[14px]">
          <li class="cursor-pointer">Конфіденційність</li>
          <li class="cursor-pointer">Умови користування</li>
          <li class="cursor-pointer">Договір публічної оферти</li>
          <li class="cursor-pointer">Кодекс етичної поведінки</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
li {
  list-style-type: square;
}
</style>
