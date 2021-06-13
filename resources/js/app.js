require("./bootstrap");

import { createApp } from "vue";
import TheApp from "./TheApp.vue";

const app = createApp({
  components: {
    TheApp
  }
});

app.mount("#app");