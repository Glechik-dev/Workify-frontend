<template>
  <div
    class="w-full text-(--Text_Color) overflow-hidden relative flex justify-center"
  >
    <NuxtImg src="/logo (1).png" class="absolute bottom-[5%] right-[-90px]" />
    <NuxtImg src="/logo (1).png" class="absolute top-[10%] left-[-90px]" />

    <div class="w-full container px-35 flex">
      <div class="w-full my-[40px] flex justify-between">
        <div class="w-[570px] flex flex-col gap-5">
          <div class="text-5xl">
            Зареєструйтеся та опублікуйте
            <span class="text-(--Primary_Color) font-bold"
              >безкоштовну вакансію</span
            >
          </div>
          <div class="text-4xl text-(--Text_Muted_Color)">
            Отримуйте відгуки на вакансії та знаходьте кандидатів в Україні
          </div>
          <div>
            <div>
              Так ваші контакти будуть виглядати для пошукачів
              <div></div>
            </div>
            <div>
              Так може виглядати інформація про вашу компанію
              <div></div>
            </div>
          </div>
        </div>
        <div class="border border-(--Secondary_Color) rounded-[15px] relative">
          <NuxtImg
            src="/Frame 22.png"
            class="absolute top-[57px] right-[-15px] rotate-90"
          />
          <div class="w-[540px] px-[60px] py-[70px] flex flex-col gap-3">
            <div class="text-3xl">Створіть акаунт роботодавця</div>
            <form class="flex flex-col gap-2">
              <div class="flex flex-col gap-6">
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Ім'я та прізвище *"
                />
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Email *"
                />
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Пароль *"
                />
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Підтвердити пароль *"
                />
              </div>
              <div class="flex flex-col gap-4"></div>
              <div class="text-2xl">та розкажіть про свою компанію</div>
              <div class="flex flex-col gap-6 mt-2">
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Назва компанії *"
                />
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Ваша посада *"
                />
                <input
                  type="text"
                  class="px-5 py-3 h-[60px] rounded-[5px] border border-(--Primary_Color) text-2xl text-(--Text_Color)"
                  placeholder="Галузь компанії *"
                />
              </div>
              <div class="flex flex-col gap-4">
                <button
                  class="h-12 mt-2 border border-(--Primary_Color) rounded-[5px] flex items-center justify-center text-[20px] transition-colors bg-(--Secondary_Color_03_Opacity) hover:bg-(--Secondary_Color) cursor-pointer"
                >
                  Готово
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
