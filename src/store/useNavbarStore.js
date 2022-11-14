import { defineStore } from "pinia";

export const useNavbarStore = defineStore("main", {
  state: () => ({ preventScroll: false }),
});
