<template>
  <header
    class="w-full h-[100px] bg-(--BG_Second_Color) text-(--Text_Color) flex justify-center items-center"
  >
    <div class="container mx-auto px-35 flex items-center justify-between">
      <div
        class="text-[50px] cursor-pointer w-[250px] font-extrabold flex justify-center items-center"
      >
        <span class="w-[70px] flex items-center justify-center mb-0.5"
          ><NuxtImg src="/Group 3 (1).png" height="45" width="45"
        /></span>
        Workify
      </div>
      <nav>
        <ul
          class="flex items-center justify-between gap-[30px] h-full text-[20px]"
        >
          <li
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer"
          >
            Пошукачу
          </li>
          <li
            class="text-(--Text_Muted_Color) hover:text-(--Text_Color) transition-colors cursor-pointer"
          >
            Роботодавцю
          </li>
        </ul>
      </nav>
      <div class="flex justify-center items-center gap-5 text-[24px] w-[250px]">
        <div
          class="px-[10px] py-[2px] rounded-[5px] bg-(--Primary_Color) cursor-pointer hover:bg-(--Primary_Hover_Color) transition"
        >
          Login
        </div>
        <div class="cursor-pointer">Sign Up</div>
      </div>
    </div>
  </header>
</template>

<style></style>
