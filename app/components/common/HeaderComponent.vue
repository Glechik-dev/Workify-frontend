<script setup lang="ts">
const { authorized, user } = useAuthStore();
</script>

<template>
  <header
    class="w-full h-[100px] bg-(--BG_Second_Color) text-(--Text_Color) flex justify-center items-center"
  >
    <div class="container mx-auto px-35 flex items-center justify-between">
      <div
        class="text-[50px] cursor-pointer w-[250px] font-extrabold flex justify-start items-center gap-1.5"
      >
        <span class="flex items-center justify-start mb-0.5"
          ><NuxtImg src="/Group 3 (1).png" height="45" width="45"
        /></span>
        Workify
      </div>
      <nav v-if="!authorized">
        <ul
          class="flex items-center justify-between gap-[30px] h-full text-[20px]"
        >
          <NuxtLink
            to="/"
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer py-1 px-2.5"
          >
            Пошукачу
          </NuxtLink>
          <NuxtLink
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer py-1 px-2.5"
            to="/employer"
          >
            Роботодавцю
          </NuxtLink>
        </ul>
      </nav>
      <nav v-else-if="authorized && user.roles[0] === 'JobSeeker'">
        <ul
          class="flex items-center justify-between gap-[30px] h-full text-[20px]"
        >
          <NuxtLink
            to="/search/all/Україна"
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer py-1 px-2.5"
          >
            Вакансії
          </NuxtLink>
        </ul>
      </nav>
      <nav v-else-if="authorized && user.roles[0] === 'Employer'">
        <ul
          class="flex items-center justify-between gap-[30px] h-full text-[20px]"
        >
        <NuxtLink
            to="/search/all/Україна"
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer py-1 px-2.5"
          >
            Ваші Вакансії
          </NuxtLink>
          <NuxtLink
            to="/search/all/Україна"
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer py-1 px-2.5"
          >
            Резюме
          </NuxtLink>
        </ul>
      </nav>
      <div class="flex justify-end items-center gap-8 text-[24px] w-[230px]" v-if="!authorized">
        <NuxtLink
          to="/auth/login"
          class="px-[10px] py-[2px] rounded-[5px] bg-(--Secondary_Color) border border-(--Primary_Color) cursor-pointer transition"
          active-class="c"
          exact-active-class="c"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/auth/registration"
          class="cursor-pointer"
          active-class="c"
          exact-active-class="c"
          >Sign Up</NuxtLink
        >
      </div>
      <div class="flex justify-end items-center text-[24px] w-[230px]" v-else>
        <NuxtLink
          to="/my"
          class="px-[10px] py-[2px] flex justify-end items-center gap-2 rounded-[5px] bg-(--Secondary_Color) border border-(--Primary_Color) cursor-pointer transition"
          active-class="c"
          exact-active-class="c"
          ><Icon name="material-symbols:person" /> Account</NuxtLink
      </div>
      </div>
    </div>
  </header>
</template>

<style>
.router-link-active {
  color: white;
  border: 1px solid var(--Primary_Color);
  border-radius: 5px;
  background-color: var(--Secondary_Color);
}
</style>
