<template>
  <div>
    <Parent @changeName='changeName'></Parent>
    <!-- <div>{{par}}</div>-->
   <!-- <button @click='handleShow'>出现</button> -->
<!-- <Dilog :dialogVisible="isShow" @closee="closeDia"> -->
  <slot>
   <!-- <button>ok</button> -->
  </slot>
</Dilog> 
    <!-- <Parent v-if="true"></Parent>
    <!-- <Banner :banners="banners" :duration="3000" />
    <Channels @change="handleChange" />
    <Loading v-show="isLoading"/>
    <NewsList v-show="!isLoading" :news="news" /> -->
    <!-- <button @click="handleClick">按钮级别的权限控制{{name}}</button> -->
 <!-- <keep-alive>
  <component :is="com"></component>
 </keep-alive> -->
 <!-- <Test1 @change='change'></Test1> -->
    <!-- <button v-has='buttonPermission.edit' >编辑</button>
    <button v-has='buttonPermission.add'  >新增</button>
    <button v-has='buttonPermission.del'>删除</button> -->

  </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
import NewsList from "../components/news/NewsList";
import Loading from "../components/Loading";
import { getNews } from "../services/newsService";
import store from "../store";
import has from '../directive/has.js'
import {mapState} from 'vuex'
import Test1 from './test1'
import Test2 from './test2'
import Parent from './chuancan/parent'
import {test1,test2} from '@/services/test.js'
import Dilog from '@/components/Common/dialog.vue'
export default {
  // activated() {
  //   console.log("actived")
  // },
  // deactivatd(){
  //   console.log("directived1")
  // },
  computed:{
    ...mapState("btn", ['buttonPermission']),
 },
 created(){
  test1();
  test2();
 },
  directives:{has},

  components: {
    Banner,
    Channels,
    NewsList,
    Loading,
    Test1,
    // Test2,
     Parent,
    Dilog,
   // Parent:()=>import (/*webpackChunkName:'async'*/'./chuancan/parent')
  },

  

  data() {
    return {
      name:"父组件值",
      age:88
    //   par:'父组件的值',
    //   isShow:false,
    //   com:"Test1",
    //   name:'zhoyapeng',
    //   i:0,
    //   banners: [
    //     {
    //       link: "https://duyi.ke.qq.com",
    //       url: require("../assets/banner/banner1.jpeg"),
    //     },
    //     {
    //       link: "https://duyi.ke.qq.com",
    //       url: require("../assets/banner/banner2.jpeg"),
    //     },
    //     {
    //       link: "https://duyi.ke.qq.com",
    //       url: require("../assets/banner/banner3.jpeg"),
    //     },
    //   ],
    //   news: [],
    //   isLoading: true,
    //   listData:["列表项1",'列表项2','列表项3']
     };
  },

  methods: {

    handleShow(){
      console.log("出现了");
      // this.show =  true;
      this.isShow = true;
    },
    closeDia(){
      console.log("进来了");
      this.isShow = false;
    },
    changeName(){
      this.par ='哈罗';
    },
    async handleChange(channelId) {
      this.isLoading = true;
      var resp = await getNews(channelId, 1, 10); //经过一段时间
      this.news = resp.contentlist;
      this.isLoading = false;
    },
    addItem(){
      this.listData.push(Date.now() );
      this.listData.push(Date.now() );
      this.listData.push(Date.now() );
      
      // this.$nextTick(()=>{
      
        const listRef = this.$refs.list;
        console.log(listRef.childNodes.length);
      
      // })
    },

    handleClick(){
      this.i++;
      console.log(this.i);
      if(this.i%2!=0){
      this.com= "Test2"
      }
      else{
        this.com='Test1'
      }
    },

    change(){
      console.log("该变啦")
      this.name='zyl';
    },
  

  },
};
</script>

<style></style>
