<script setup lang="ts">
const {
  name = "Bob",
  email = "example@gmail.com",
  phoneNumber = "+380509815109",
  jobTitle = "Front-End Developer",
} = defineProps({
  name: String,
  email: String,
  phoneNumber: String,
  jobTitle: String,
});
</script>

<template>
  <div class="text-xl">
    Так ваші контакти будуть виглядати для пошукачів
    <div
      class="px-5 py-4 mt-1.5 border border-(--Primary_Color) flex gap-5 rounded-[15px]"
    >
      <div class="h-fit p-2 border border-(--Primary_Color) rounded-[15px]">
        <NuxtImg src="/userav.png" sizes="30" />
      </div>
      <div class="flex flex-col gap-2.5">
        <div>
          <div class="text-2xl font-bold">{{ name }}</div>
          <div class="text-(--Text_Muted_Color)">{{ jobTitle }}</div>
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <Icon name="material-symbols:mail-outline" /> {{ email }}
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="material-symbols:call" /> {{ phoneNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
