import { defineStore } from "pinia";

export const useAuthStore = defineStore("filter", {
  state: () => ({
    accountActive: false,
    authorized: false,
    user: {
      firstName: "",
      secondName: "",
      email: "",
      phoneNumber: "",
      roles: [],
    },
  }),
  actions: {
    setAuth(authStatus: boolean) {
      this.authorized = authStatus;
    },
    setActive(activeStatus: boolean) {
      this.accountActive = activeStatus;
    },
  },
});
