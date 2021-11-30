import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from "./routes";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select,Input, Table, TableColumn} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(ElementUI);
// 频道数据一开始就需要获取
store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoAmI");


new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
