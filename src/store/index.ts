import { createStore } from "vuex";

import numbersModule from "./modules/numbersModule";

const store = createStore({
  modules: {
    numbersModule
  }
});

export default store;
