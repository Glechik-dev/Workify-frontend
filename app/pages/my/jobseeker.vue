<script setup lang="ts">
const links: Array<{ text: string; name: string }> = [
  { text: "Мій аккаунт", name: "account" },
  { text: "Моє резюме", name: "resume" },
  { text: "Мої відгуки", name: "reviews" },
  { text: "Обрані вакансії", name: "vacancies" },
];
definePageMeta({
  redirect: "/my/jobseeker/account",
});
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
          class="w-full h-full bg-(--Secondary_Color_03_Opacity) flex items-center justify-center gap-2.5 rounded-[5px] border border-(--Primary_Color) cursor-pointer"
        >
          {{ text }} <Icon name="material-symbols:arrow-forward-ios" />
        </NuxtLink>
      </div>
      <div
        class="w-full h-full border border-(--Primary_Color) rounded-[15px] p-2.5"
      >
        <NuxtPage />
      </div>
    </div>
  </CommonUIContainer>
</template>
