import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

import "aos/dist/aos.css";
import "./css/style.css";

import en from "./translations/en-US.json";
import zh from "./translations/zh-CN.json";

// Retrieve the user's language preference from Local Storage or default to English
const savedLanguage = localStorage.getItem('userLanguage') || 'en';

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: "en",
  messages: { zh, en },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
