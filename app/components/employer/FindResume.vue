<template>
  <div class="w-full text-(--Text_Color) overflow-hidden relative">
    <NuxtImg src="/logo (1).png" class="absolute left-[-100px] top-25" />
    <NuxtImg src="/logo (1).png" class="absolute right-[-100px] bottom-20" />
    <div class="w-full container px-35 pt-15 pb-7 flex flex-col gap-2">
      <div class="text-4xl font-bold">
        Знайдіть потрібне <span class="text-(--Primary_Color)">резюме</span>
      </div>
      <div class="text-(--Text_Muted_Color)">
        Шукайте спеціалістів за професією, навичками чи ключовими словами.
      </div>
      <div class="w-full mb-4 flex justify-between">
        <div class="h-[49px] flex input__container rounded-[15px]">
          <div
            class="w-[70px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) rounded-l-[15px] flex items-center justify-center cursor-pointer find"
          >
            <Icon name="heroicons-solid:search" size="25" />
          </div>
          <input
            type="text"
            name="findJob"
            placeholder="Почніть вводити посаду"
            class="w-[870px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) py-[5px] px-[10px] text-[25px] rounded-r-[15px]"
          />
        </div>
        <div
          class="w-[240px] h-12 border border-(--Primary_Color) rounded-[15px] flex items-center justify-center text-[20px] transition-colors hover:bg-(--Secondary_Color) cursor-pointer gap-2"
        >
          <Icon name="el:search-alt" size="17" class="pb-0.5" /> Знайти резюме
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-right: 2px solid var(--Primary_Hover_Color);
}

.input__container:focus-within .find {
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-left: 2px solid var(--Primary_Hover_Color);
}
</style>
