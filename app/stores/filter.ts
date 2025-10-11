import { defineStore } from "pinia";
import type { FilterType } from "@/types/filter";

export const useFilterStore = defineStore("filter", {
  state: (): { items: FilterType[] } => ({
    items: [
      {
        value: "item-1",
        title: "Тип зайнятості",
        contents: [
          { title: "Повна зайнятість", flag: false },
          { title: "Неповна зайнятість", flag: false },
          { title: "Позмінна робота", flag: false },
        ],
      },
      {
        value: "item-2",
        title: "Професійні сфери",
        contents: [
          { title: "Full time job", flag: false },
          { title: "Part time job", flag: false },
        ],
      },
    ],
  }),
  actions: {
    setStore(state: Array<FilterType>) {
      this.items = [...state];
    },
    changeRef(title: string, val: boolean) {
      this.items.forEach((item) =>
        item.contents.forEach((content) => {
          if (content.title === title) content.flag = val;
        })
      );
      console.log(this.items);
    },
  },
});
