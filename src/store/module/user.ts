import { defineStore } from "pinia";

export default defineStore("userStore", {
  state: () => {
    return {
      token: "",
      userInfo: {},
    };
  },
  getters: {},
  actions: {
    SET_TOKEN(token: string) {
      this.token = token;
    },
    SET_USER_INFO(userInfo: object) {
      this.userInfo = userInfo;
    },
  },
});
