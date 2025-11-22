<script setup lang="ts">
const links: Array<{ text: string; name: string }> = [
  { text: "Мій аккаунт", name: "" },
  { text: "Моє резюме", name: "resume" },
  { text: "Мої відгуки", name: "reviews" },
  { text: "Обрані вакансії", name: "vacancies" },
];
</script>

<template>
  <CommonUIContainer container="py-5">
    <div class="w-full flex gap-2.5">
      <div
        class="min-w-[350px] h-full border border-(--Primary_Color) rounded-[15px] flex flex-col gap-2.5 p-4 text-2xl"
      >
        <NuxtLink
          v-for="{ text, name } in links"
          :to="`/my/jobseeker/${name}`"
          class="w-full h-full bg-(--Secondary_Color_03_Opacity) flex items-center justify-center rounded-[5px] border border-(--Primary_Color) cursor-pointer"
        >
          {{ text }}
        </NuxtLink>
      </div>
      <div class="w-full h-full border border-(--Primary_Color) rounded-[15px]">
        <NuxtPage />
      </div>
    </div>
  </CommonUIContainer>
</template>
