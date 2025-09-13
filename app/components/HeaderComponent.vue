<template>
  <header
    class="w-full h-[100px] bg-[var(--BG_Second_Color)] text-[var(--Text_Color)] flex justify-center items-center"
  >
    <div class="container mx-auto px-20 flex items-center justify-between">
      <div class="text-[50px] cursor-pointer w-[200px]">Workify</div>
      <nav>
        <ul
          class="flex items-center justify-between gap-[30px] h-full text-[20px]"
        >
          <li
            class="text-[var(--Text_Muted_Color)] hover:text-[var(--Text_Color)] transition-colors cursor-pointer"
          >
            Пошукачу
          </li>
          <li
            class="text-[var(--Text_Muted_Color)] hover:text-[var(--Text_Color)] transition-colors cursor-pointer"
          >
            Роботодавцю
          </li>
        </ul>
      </nav>
      <div class="flex justify-center items-center gap-5 text-[24px] w-[200px]">
        <div
          class="px-[10px] py-[2px] rounded-[5px] bg-[var(--Primary_Color)] cursor-pointer hover:bg-[var(--Primary_Hover_Color)] transition"
        >
          Login
        </div>
        <div class="cursor-pointer">Sign Up</div>
      </div>
    </div>
  </header>
</template>
