<template>
  <div
    class="w-full flex justify-center text-(--Text_Color) overflow-hidden relative"
  >
    <NuxtImg
      src="/Rectangle 25 (1).png"
      class="absolute left-[-40px] top-[250px]"
    />
    <NuxtImg src="/Frame 31.png" class="absolute right-0 top-1 rotate-90" />
    <NuxtImg
      src="/Frame 31.png"
      class="absolute right-0 top-[445px] rotate-90"
    />
    <div class="w-full container px-35 flex justify-between gap-30 my-25">
      <div class="text-5xl flex flex-col gap-3">
        <div class="w-[580px]">
          <span class="text-(--Primary_Color) font-bold">Workify</span> працює
          на Вас!
        </div>
        <div>Для чого Ви наймаєте нас сьогодні?</div>
      </div>
      <div class="text-3xl flex flex-col gap-15">
        <NuxtLink
          to="/auth/registration/jobseeker"
          class="py-5 px-8 rounded-[15px] border border-(--Primary_Color) hover:bg-(--Secondary_Color_03_Opacity) cursor-pointer transition-colors"
        >
          <div class="text-(--Primary_Color) font-bold">Кандидат</div>
          <div class="text-2xl">
            На вас чекає 110 118 актуальних вакансій від 37 420 компаній.
          </div>
        </NuxtLink>
        <NuxtLink
          to="/auth/registration/employer"
          class="py-5 px-8 rounded-[15px] border border-(--Primary_Color) hover:bg-(--Secondary_Color_03_Opacity) cursor-pointer transition-colors"
        >
          <div class="text-(--Primary_Color) font-bold">Роботодавець</div>
          <div class="text-2xl">
            На вас чекають 6 210 763 кандидатів які довірили нам власне резюме.
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
