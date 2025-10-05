<script setup lang="ts">
import CompanyExampleTabComponent from "~/components/common/CompanyTabComponent.vue";
import ContactExampleTabComponent from "~/components/common/ContactTabComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
</script>

<template>
  <div
    class="w-full text-(--Text_Color) overflow-hidden relative flex justify-center"
  >
    <NuxtImg src="/logo (1).png" class="absolute bottom-[5%] right-[-90px]" />
    <NuxtImg src="/logo (1).png" class="absolute top-[10%] left-[-90px]" />

    <div class="w-full container px-35 flex">
      <div class="w-full my-[55px] flex justify-between">
        <div class="w-[570px] flex flex-col gap-12">
          <div class="flex flex-col gap-5">
            <div class="text-5xl">
              Зареєструйтеся та опублікуйте
              <span class="text-(--Primary_Color) font-bold"
                >безкоштовну вакансію</span
              >
            </div>
            <div class="text-4xl text-(--Text_Muted_Color)">
              Отримуйте відгуки на вакансії та знаходьте кандидатів в Україні
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <ContactExampleTabComponent />
            <CompanyExampleTabComponent />
          </div>
        </div>
        <div class="border border-(--Secondary_Color) rounded-[15px] relative">
          <NuxtImg
            src="/Frame 22.png"
            class="absolute top-[57px] right-[-15px] rotate-90"
          />
          <div class="w-[540px] px-[60px] py-[70px] flex flex-col gap-3">
            <div class="text-3xl">Створіть акаунт роботодавця</div>
            <form class="flex flex-col gap-2">
              <div class="flex flex-col gap-6">
                <InputComponent placeholder="Ім'я та прізвище *" />
                <InputComponent placeholder="Email *" />
                <InputComponent placeholder="Номер телефону *" />
                <InputComponent placeholder="Пароль *" />
                <InputComponent placeholder="Підтвердити пароль *" />
              </div>
              <div class="flex flex-col gap-4"></div>
              <div class="text-2xl">та розкажіть про свою компанію</div>
              <div class="flex flex-col gap-6 mt-2">
                <InputComponent placeholder="Назва компанії *" />
                <InputComponent placeholder="Ваша посада *" />
                <InputComponent placeholder="Галузь компанії *" />
              </div>
              <div class="flex flex-col gap-4">
                <button
                  class="h-12 mt-2 border border-(--Primary_Color) rounded-[5px] flex items-center justify-center text-[20px] transition-colors bg-(--Secondary_Color_03_Opacity) hover:bg-(--Secondary_Color) cursor-pointer"
                >
                  Готово
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
