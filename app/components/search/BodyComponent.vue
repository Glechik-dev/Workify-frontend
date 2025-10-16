<script setup lang="ts">
const itemStore = useFilterStore();
</script>

<template>
  <div class="w-full text-(--Text_Color) text-xl flex justify-center">
    <div class="w-full container px-35 py-10">
      <div class="flex gap-8">
        <div
          class="w-[360px] h-fit p-3 flex flex-col gap-3 text-2xl font-bold border border-(--Primary_Color) rounded-[15px]"
        >
          <CommonAccordionComponent :items="itemStore.items" />
        </div>
        <div class="w-full flex flex-col">
          <div
            class="w-full p-4 flex justify-between bg-(--Secondary_Color_Opacity) border border-(--Primary_Color) rounded-[15px]"
          >
            <div><strong>8,746</strong> Вакансій знайдено</div>
            <div>Сортирувати по:</div>
          </div>
          <div class="w-full pt-5 flex justify-between gap-4 flex-wrap">
            <template v-for="key in 5">
              <SearchCardComponent :id="`${key}`" />
            </template>
          </div>
          <div class="w-full pt-5">
            <CommonPaginationComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
