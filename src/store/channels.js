// channels 的仓库数据
import { getNewsChannels } from "../services/newsService";

export default {
  namespaced: true, // 开启命名空间
  state: {
    data: [1,2],
    isLoading: false,
  },
  getters:{
    data1:state=> {
      return state.data},

  },

  mutations: {
    // store中如何获取其他参数的id,
    // 这里配置多种变异方式
    // state: 原来的状态
    // payload： 负荷, true 或 false
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    // payload： 负荷，约定是一个数组
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchDatas({ dispatch, commit, getters, rootGetters }) {
      console.log("111");
      console.log(getters);
      console.log(rootGetters);
      // 设置isLoading为true
      // context.commit("setIsLoading", true);
      // var channels = await getNewsChannels();
      // // 设置data为channels
      // context.commit("setData", channels);
      // // 设置isLoading为false
      // context.commit("setIsLoading", false);
    },
  },
};
