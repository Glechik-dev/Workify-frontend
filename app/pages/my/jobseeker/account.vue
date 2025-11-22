<template>
  <div class="flex flex-col gap-2.5">
    <div
      class="w-full py-2 px-4 border border-(--Primary_Color) bg-(--Secondary_Color_Opacity) flex flex-col gap-2.5 text-2xl rounded-[5px]"
    >
      <div
        class="text-3xl font-bold border-b border-dashed border-(--Primary_Color) pb-2"
      >
        Данні для входу в Workify
      </div>
      <div>Логін: example@gmail.com</div>
      <div>Пароль: ffsewfwd</div>
    </div>
    <div
      class="w-full py-2 px-4 border border-(--Primary_Color) bg-(--Secondary_Color_Opacity) flex flex-col gap-4 text-2xl rounded-[5px]"
    >
      <div
        class="text-3xl font-bold border-b border-dashed border-(--Primary_Color) pb-2"
      >
        Контактні данні
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <label
              for="name"
              class="absolute text-xs px-2 top-[-8px] left-6 bg-(--Secondary_Dark_Color) border border-(--Primary_Color) border-dashed rounded-[3px]"
              >Контактна особа</label
            >

            <div class="flex">
              <div
                class="border border-(--Primary_Color) rounded-[15px] w-[40px] flex justify-center pt-4 border-r-0 rounded-r-none"
              >
                <Icon name="material-symbols:person" />
              </div>
              <input
                type="text"
                id="name"
                class="w-[450px] border border-(--Primary_Color) p-2 pt-3 rounded-[15px] rounded-l-none border-l-0"
              />
            </div>
          </div>
          <div class="relative">
            <label
              for="name"
              class="absolute text-xs px-2 top-[-8px] left-6 bg-(--Secondary_Dark_Color) border border-(--Primary_Color) border-dashed rounded-[3px]"
              >Контактний номер</label
            >

            <div class="flex">
              <div
                class="border border-(--Primary_Color) rounded-[15px] w-[40px] flex justify-center pt-4 border-r-0 rounded-r-none"
              >
                <Icon name="material-symbols:phone-iphone-outline" />
              </div>
              <input
                type="text"
                id="name"
                class="w-[450px] border border-(--Primary_Color) p-2 pt-3 rounded-[15px] rounded-l-none border-l-0"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="w-[150px] h-[150px] rounded-full bg-(--Secondary_Color_Opacity) border-2 border-(--Primary_Color) border-dashed relative top-[-8px]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
