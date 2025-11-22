<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import InputComponent from "@/components/common/InputComponent.vue";
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
  },
});

const { value: firstName } = useField("firstName");
const { value: secondName } = useField("secondName");
const { value: phoneNumber } = useField("phoneNumber");
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

const onSubmit = handleSubmit((values) => {});
</script>

<template>
  <div
    class="w-full text-(--Text_Color) overflow-hidden relative flex justify-center"
  >
    <NuxtImg src="/logo (1).png" class="absolute bottom-[10%] right-[-90px]" />
    <NuxtImg src="/logo (1).png" class="absolute top-[20%] left-[-90px]" />

    <div class="w-full container px-35 flex justify-center items-center">
      <div
        class="my-[40px] border border-(--Secondary_Color) rounded-[15px] relative"
      >
        <NuxtImg
          src="/Frame 22.png"
          class="absolute top-[57px] right-[-15px] rotate-90"
        />
        <div class="w-[540px] px-[60px] py-[70px] flex flex-col gap-6">
          <div class="text-3xl">Створіть акаунт пошукача</div>
          <form class="flex flex-col gap-6" @submit.prevent="onSubmit">
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
            <div class="flex flex-col gap-4">
              <button
                class="h-12 border border-(--Primary_Color) rounded-[5px] flex items-center justify-center text-[20px] transition-colors bg-(--Secondary_Color_03_Opacity) hover:bg-(--Secondary_Color) cursor-pointer"
              >
                Заєреструватися
              </button>
            </div>
          </form>
          <div class="flex flex-col gap-4 relative">
            <div
              class="absolute w-[70px] h-[1px] bg-white left-0 top-[16px]"
            ></div>
            <div
              class="absolute w-[70px] h-[1px] bg-white right-0 top-[16px]"
            ></div>
            <div class="w-full flex justify-center text-2xl">
              Заєреструватися через
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-y-2 gap-x-2">
              <div
                class="p-2 flex justify-center items-center gap-1 cursor-pointer bg-(--Google_Color) border border-(--Google_Color) font-bold"
              >
                <Icon name="devicon:google" /> Google
              </div>
              <div
                class="p-2 flex justify-center items-center gap-1 cursor-pointer bg-(--Facebook_Color) border border-(--Facebook_Color) font-bold"
              >
                <Icon name="devicon:facebook" /> Facebook
              </div>
              <div
                class="p-2 flex justify-center items-center cursor-pointer bg-(--X_Color) border border-(--X_Color) font-bold"
              >
                X
              </div>
              <div
                class="p-2 flex justify-center items-center gap-1 cursor-pointer bg-(--Github_Color) border border-(--Github_Color) text-(--Text_Black_Color) font-bold"
              >
                <Icon name="garden:github-fill-16" /> Github
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
