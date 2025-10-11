import { defineStore } from "pinia";
import type { FilterType } from "@/types/filter";

export const useJobSeekerSearchStore = defineStore("joobseekersearch", {
  state: (): { input: string; compobox: string } => ({
    input: "",
    compobox: "Україна",
  }),
  actions: {
    changeInput(input: string) {
      this.input = input;
    },
    changeCompobox(compobox: string) {
      this.compobox = compobox;
    },
  },
});
