<template>
  <div
    class="w-full text-(--Text_Color) bg-(--BG_Second_Color) overflow-hidden"
  >
    <div
      class="w-full container px-35 flex pt-14 flex justify-between relative"
    >
      <NuxtImg src="/Frame 31.png" class="absolute top-0 left-0 rotate-90" />
      <NuxtImg
        src="/Frame 31.png"
        class="absolute bottom-0 right-0 rotate-90"
      />

      <div class="flex flex-col gap-15 w-[45%]">
        <div class="relative">
          <div
            class="text-5xl bg-(--BG_Second_Color) relative overflow-hidden z-10 py-[10px] text-center font-bold"
          >
            Тисячі спеціалістів шукають роботу зараз
          </div>
          <div
            class="absolute w-[20px] h-[20px] bg-(--Primary_Color) top-[-3px] left-[-3px]"
          ></div>
          <div
            class="absolute w-[20px] h-[20px] bg-(--Primary_Color) bottom-[-3px] left-[-3px]"
          ></div>
          <div
            class="absolute w-[20px] h-[20px] bg-(--Primary_Color) top-[-3px] right-[-3px]"
          ></div>
          <div
            class="absolute w-[20px] h-[20px] bg-(--Primary_Color) bottom-[-3px] right-[-3px]"
          ></div>
        </div>
        <div
          class="relative z-20 back py-[40px] pr-[100px] bg-(--BG_Color) rounded-tr-[15px]"
        >
          <NuxtImg
            src="/Frame 22.png"
            class="absolute rotate-90 top-[50%] left-[-160px] z-10"
          />
          <div
            class="py-2 px-5 text-2xl w-fit border border-(--Primary_Color) rounded-[15px] cursor-pointer transition-colors hover:bg-(--Secondary_Color)"
          >
            Опублікувати безкоштовну вакансію
          </div>
        </div>
      </div>
      <div class="w-[540px] flex flex-col justify-between pb-[40px]">
        <div
          class="w-[80%] rounded-[15px] bg-(--Secondary_Color_03_Opacity) self-start border border-(--Primary_Color) py-2 px-5"
        >
          <div class="text-[15px] font-bold">
            Легка реєстрація та створення акаунту
          </div>
          <div class="text-[12px]">
            Підтвердіть номер телефону та додайте основну інформацію про вашу
            компанію. Реєстрація займає лише кілька хвилин!
          </div>
        </div>
        <div
          class="w-[80%] rounded-[15px] bg-(--Secondary_Color_03_Opacity) self-center border border-(--Primary_Color) py-2 px-5"
        >
          <div class="text-[15px] font-bold">Безкоштовна вакансія щомісяця</div>
          <div class="text-[12px]">
            Публікуйте оголошення безкоштовно, щоб оцінити всі переваги
            robota.ua. Пропозиція доступна один раз на місяць і не поєднується з
            іншими акціями.
          </div>
        </div>
        <div
          class="w-[80%] rounded-[15px] bg-(--Secondary_Color_03_Opacity) self-end border border-(--Primary_Color) py-2 px-5"
        >
          <div class="text-[15px] font-bold">
            Залучайте кандидатів та отримуйте відгуки
          </div>
          <div class="text-[12px]">
            Пошукачі побачать вашу вакансію на сайті, у мобільному застосунку та
            листах і почнуть надсилати свої резюме.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.back::before {
  content: "";
  z-index: 1;
  position: absolute;
  left: -100vw;
  width: 100vw;
  bottom: 0;
  top: 0;
  background-color: var(--BG_Color);
}
</style>
