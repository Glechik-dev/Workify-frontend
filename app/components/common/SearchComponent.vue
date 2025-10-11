<script setup lang="ts">
import CompoboxComponent from "@/components/common/CompoboxComponent.vue";

const router = useRouter();

const {
  options = [],
  placeholder = "",
  routing = false,
} = defineProps<{
  options: Array<{ name: string; children: { name: string }[] }>;
  placeholder: string;
  routing?: boolean;
}>();

const search = useJobSeekerSearchStore();
</script>

<template>
  <div class="w-full mt-8 mb-4 flex gap-[20px]">
    <div class="h-[49px] flex input__container rounded-[15px]">
      <div
        class="w-[40px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) rounded-l-[15px] flex items-center justify-center cursor-pointer find"
      >
        <Icon name="heroicons-solid:search" size="25" />
      </div>
      <input
        :value="search.input"
        @input="(event: Event) => {
          const target = event.target as HTMLInputElement
          search.changeInput(target.value)
        }"
        type="text"
        name="findJob"
        placeholder="Ким або в якій компанії Ви хочете працювати?"
        class="w-[780px] h-12 bg-(--BG_White_Color) text-(--Text_Black_Color) py-[5px] px-[10px] text-[25px] input"
      />
      <div
        class="w-[200px] h-12 bg-(--BG_White_Color) rounded-r-[15px] flex items-center drop"
      >
        <div class="w-[2px] h-10 bg-gray-600"></div>
        <CompoboxComponent
          :options="options"
          :placeholder="placeholder"
          :search-function="search.changeCompobox"
          :value="search.compobox"
        />
      </div>
    </div>
    <button
      @click="
        () => {
          if (routing) {
            router.replace(
              `/search/${
                search.input !== '' ? search.input.split(' ').join('-') : 'all'
              }/${search.compobox}`
            );
          } else {
            router.replace(
              `/search/${
                search.input !== '' ? search.input.split(' ').join('-') : 'all'
              }/${search.compobox}`
            );
          }
        }
      "
      class="w-[240px] h-12 border border-(--Primary_Color) rounded-[15px] flex items-center justify-center text-[20px] transition-colors hover:bg-(--Secondary_Color) cursor-pointer gap-2"
    >
      <Icon name="el:search-alt" size="17" class="pb-0.5" /> Знайти роботу
    </button>
  </div>
</template>

<style scoped>
.input__container:focus-within .input {
  outline: none;
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
}

.input__container:focus-within .find {
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-left: 2px solid var(--Primary_Hover_Color);
}

.input__container:focus-within .drop {
  border-top: 2px solid var(--Primary_Hover_Color);
  border-bottom: 2px solid var(--Primary_Hover_Color);
  border-right: 2px solid var(--Primary_Hover_Color);
}
</style>
