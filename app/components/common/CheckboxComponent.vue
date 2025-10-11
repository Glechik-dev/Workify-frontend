<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from "reka-ui";

const { title = "" } = defineProps({
  title: String,
  flag: Boolean,
});

const checkboxOne = ref(false);
const filterStore = useFilterStore();
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label
      class="flex items-center gap-2"
      @click="() => filterStore.changeRef(title, checkboxOne)"
    >
      <CheckboxRoot
        v-model="checkboxOne"
        class="flex w-[22px] h-[20px] items-center justify-center rounded-[5px] bg-(--Secondary_Color_03_Opacity) border border-(--Primary_Color)"
      >
        <CheckboxIndicator
          class="text-(--Text_Color) rounded-[2px] w-full h-full flex items-center justify-center bg-(--Secondary_Color)"
        >
          <Icon
            name="radix-icons:check"
            class="w-[22px] h-[20px] text-grass9"
          />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="text-(--Text_Color) text-[18px]">{{ title }}</span>
    </label>
  </div>
</template>
