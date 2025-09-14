<template>
  <div class="w-full h-[420px] bg-(--BG_Second_Color) text-(--Text_Color)">
    <div class="w-full h-full px-35 py-8 container">
      <div
        class="text-[50px] flex items-center justify-center h-[120px] font-bold"
      >
        Workify - знайдіть роботу вже сьогодні
      </div>
      <div class="w-full h-full mt-8 flex">
        <div class="w-full h-15 flex">
          <input
            type="text"
            name="findJob"
            class="w-[890px] h-12 bg-(--BG_White_Color) rounded-l-[15px] text-(--Text_Black_Color) p-[5px]"
          />
          <div
            class="w-[120px] h-12 bg-(--BG_White_Color) rounded-r-[15px] flex items-center"
          >
            <div class="w-[2px] h-10 bg-gray-600"></div>
          </div>
        </div>
        <div
          class="w-[240px] h-12 border border-(--Primary_Color) rounded-[15px] flex items-center justify-center text-[20px] transition-colors hover:bg-(--Secondary_Color) cursor-pointer"
        >
          Знайти роботу
        </div>
      </div>
    </div>
  </div>
</template>
