import { defineStore } from 'pinia';
import {useI18n} from "vue-i18n";

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    locale: 'fr', // langue par défaut
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
    },
    getLocale() {
      return this.locale;
    },
  },
});