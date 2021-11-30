import vuex from "vuex";
import Vue from "vue";
import channels from "./channels";
import loginUser from "./loginUser";
import btn from "./btn";
//1. 安装
Vue.use(vuex);
var store = new vuex.Store({
  modules: {
    channels,
    loginUser,
    btn,
  },
});

export default store;  // 等同于 vue实例中的 this.$store
