<script setup lang="ts">
import type { NuxtError } from "#app";

const { error = { statusCode: "" } } = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <CommonHeaderComponent />
  <div class="w-full text-(--Text_Color) flex justify-center">
    <div class="w-full container px-35 mt-10 flex">
      <div>
        <NuxtImg src="/404page.png" width="500" />
      </div>
      <div class="w-full text-3xl flex justify-around items-center">
        <div class="flex flex-col gap-2">
          Пошукачу
          <ul
            class="flex flex-col gap-3 text-(--Primary_Color) [&>li]:cursor-pointer"
          >
            <li><NuxtLink>Розмістити резюме</NuxtLink></li>
            <li><NuxtLink>Знайти вакансію</NuxtLink></li>
            <li><NuxtLink to="/">На головну</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          Роботодавцю
          <ul
            class="flex flex-col gap-3 text-(--Primary_Color) [&>li]:cursor-pointer"
          >
            <li><NuxtLink>Розмістити вакансію</NuxtLink></li>
            <li><NuxtLink>Знайти резюме</NuxtLink></li>
            <li><NuxtLink to="/employer">На головну</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <CommonFooterComponent />
</template>
