<template>
  <div class="w-full text-(--Text_Color) text-xl flex justify-center">
    <div class="w-full container px-35 py-10">
      <div class="flex gap-8">
        <div
          class="w-[250px] h-fit p-4.5 flex flex-col gap-3 text-2xl font-bold border border-(--Primary_Color) rounded-[15px]"
        >
          <div>Тип зайнятості</div>
          <div>Тип вакансії</div>
          <div>Рівень досвіду</div>
        </div>
        <div class="w-full flex flex-col">
          <div
            class="w-full p-4 flex justify-between bg-(--Secondary_Color_Opacity) border border-(--Primary_Color) rounded-[15px]"
          >
            <div><strong>8,746</strong> Вакансій знайдено</div>
            <div>Сортирувати по:</div>
          </div>
          <div class="w-full pt-5 flex justify-between gap-4 flex-wrap">
            <SearchCardComponent />
            <SearchCardComponent />
            <SearchCardComponent />
            <SearchCardComponent />
            <SearchCardComponent />
            <SearchCardComponent />
            <SearchCardComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
