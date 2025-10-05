<script setup lang="ts">
const {
  companyName = "BigBob",
  jobTitle = "Front-End Developer",
  companyIndustry = "Programming",
} = defineProps({
  companyName: String,
  jobTitle: String,
  companyIndustry: String,
});
</script>

<template>
  <div class="text-xl">
    Так може виглядати інформація про вашу компанію
    <div
      class="px-5 py-4 mt-1.5 border border-(--Primary_Color) rounded-[15px]"
    >
      <div>
        <div class="text-2xl font-bold text-(--Primary_Color)">
          {{ companyName }}
        </div>
        <div class="text-[15px] text-(--Text_Muted_Color) mt-1.5">
          {{ jobTitle }}
        </div>
        <div>{{ companyIndustry }}</div>
      </div>
    </div>
  </div>
</template>
