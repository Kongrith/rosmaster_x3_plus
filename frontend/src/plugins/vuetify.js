//
import "vue-material-design-icons/styles.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// material design icon
const icons = {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi,
  },
};

export default createVuetify({
  icons,
  components,
  directives,
});
