import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "en", // Default language is English
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
