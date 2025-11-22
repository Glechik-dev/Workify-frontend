<script setup lang="ts">
import CompanyExampleTabComponent from "~/components/common/CompanyTabComponent.vue";
import ContactExampleTabComponent from "~/components/common/ContactTabComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import { useField, useForm } from "vee-validate";
import * as zod from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const validationSchema = toTypedSchema(
  zod
    .object({
      firstName: zod.string().min(1, { message: "This is required" }),
      secondName: zod.string().min(1, { message: "This is required" }),
      phoneNumber: zod
        .string()
        .min(10, { message: "Must be a valid mobile number" })
        .max(14, { message: "Must be a valid mobile number" })
        .regex(phoneRegex, "Invalid Number!"),
      email: zod
        .string()
        .min(1, { message: "This is required" })
        .email({ message: "Must be a valid email" }),
      password: zod
        .string()
        .min(1, { message: "This is required" })
        .min(8, { message: "Too short" }),
      confirmPassword: zod
        .string()
        .min(1, { message: "This is required" })
        .min(8, { message: "Too short" }),
      companyName: zod
        .string()
        .min(1, { message: "This is required" })
        .min(2, { message: "Too short" }),
      jobTitle: zod
        .string()
        .min(1, { message: "This is required" })
        .min(2, { message: "Too short" }),
      companyIndustry: zod
        .string()
        .min(1, { message: "This is required" })
        .min(2, { message: "Too short" }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    firstName: "",
    secondName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    jobTitle: "",
    companyIndustry: "",
  },
});

const { value: firstName } = useField("firstName");
const { value: secondName } = useField("secondName");
const { value: phoneNumber } = useField("phoneNumber");
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");
const { value: companyName } = useField("companyName");
const { value: jobTitle } = useField("jobTitle");
const { value: companyIndustry } = useField("companyIndustry");

const onSubmit = handleSubmit((values) => {});
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
            <form class="flex flex-col gap-2" @submit="onSubmit">
              <div class="flex flex-col gap-6">
                <InputComponent
                  placeholder="Ім'я *"
                  v-model="firstName"
                  :error="errors.firstName"
                />
                <InputComponent
                  placeholder="Прізвище *"
                  v-model="secondName"
                  :error="errors.secondName"
                />
                <InputComponent
                  placeholder="Email *"
                  v-model="email"
                  :error="errors.email"
                />
                <InputComponent
                  placeholder="Номер телефону"
                  v-model="phoneNumber"
                  :error="errors.phoneNumber"
                />
                <InputComponent
                  placeholder="Пароль *"
                  v-model="password"
                  :error="errors.password"
                />
                <InputComponent
                  placeholder="Підтвердити пароль *"
                  v-model="confirmPassword"
                  :error="errors.confirmPassword"
                />
              </div>
              <div class="flex flex-col gap-4"></div>
              <div class="text-2xl">та розкажіть про свою компанію</div>
              <div class="flex flex-col gap-6 mt-2">
                <InputComponent
                  placeholder="Назва компанії *"
                  v-model="companyName"
                  :error="errors.companyName"
                />
                <InputComponent
                  placeholder="Ваша посада *"
                  v-model="jobTitle"
                  :error="errors.jobTitle"
                />
                <InputComponent
                  placeholder="Галузь компанії *"
                  v-model="companyIndustry"
                  :error="errors.companyIndustry"
                />
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
