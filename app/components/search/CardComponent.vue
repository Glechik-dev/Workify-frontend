<template>
  <div
    class="2xl:w-[455px] w-full p-4.5 border border-(--Primary_Color) rounded-[15px] cursor-pointer"
  >
    <div class="flex justify-between">
      <div class="flex gap-3">
        <div class="h-fit rounded-[15px]">
          <NuxtImg src="/company logo.png" width="50" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="max-w-[350px] text-[18px] font-bold">
            Front-end developer (Tailwind, Alpine.js) якістна верстка, віддалено
          </div>
          <div class="text-[12px] text-(--Primary_Color)">Afganistan</div>
        </div>
      </div>
      <div>
        <Icon name="mdi:dots-horizontal" size="25" />
      </div>
    </div>
    <div
      class="mt-2 pt-2 text-[16px] text-(--Text_Muted_Color) border-t border-dashed border-(--Primary_Color)"
    >
      <div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </div>
      <div class="pt-2 flex gap-1.5">
        <div
          v-for="_ in 4"
          class="px-2 py-1 border border-(--Primary_Color) rounded-[5px] transition-colors hover:bg-(--Secondary_Color_03_Opacity)"
        >
          Full Time
        </div>
      </div>
    </div>
    <div class="pt-2.5 flex justify-between">
      <div class="text-(--Text_Muted_Color) text-[12px] relative top-[2px]">
        21 March 2025
      </div>
      <div class="flex gap-2 items-center">
        <Icon name="ic:twotone-block" size="18" />
        <Icon name="material-symbols-light:bookmark-outline" size="20" />
      </div>
    </div>
  </div>
</template>
