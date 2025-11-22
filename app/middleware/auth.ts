import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(() => {
  const { authorized } = useAuthStore();
  if (authorized) {
    return navigateTo("/my/jobseeker/account");
  }
});
