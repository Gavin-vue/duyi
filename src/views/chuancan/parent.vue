<template lang="">
    <div>
        父组件
        <el-button @click = 'donghua'>{{name}}</el-button>
        <Son :name="name"  @change= "change"></Son>
        <div class="box"></div>
        <!-- <el-input v-model="inputtext" placeholder="请输入内容"></el-input> -->
        <!-- <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column v-for='item in tabLabel'
        :key='item.prop'
        :label='item.label'
        :property='item.name'
        > 
        /**
        <template v-slot='scope'>
                <span>{{scope.row.date}}</span>
                <span>{{scope.row.name}}</span>
                <span>{{scope.row.address}}</span>
        </template>
        </el-table-column>
      </el-table> -->
      
    </div>
</template>
<script>
    import Son from './son.vue'
export default {
  provide(){
    return{
      data:this
    }
  },
    data(){
        return{
        name:"爷爷辈",
        age:88
        // inputtext:'111',
        // input:'',
        
        // 表格label
        // tabLabel:[{label:"日期",prop:"date"},{label:"姓名",porp:'name'},{label:"地址",porp:'name'}],
        // tableData: [{
        //     date: '2016-05-02',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1518 弄'
        //   }, {
        //     date: '2016-05-04',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1517 弄'
        //   }, {
        //     date: '2016-05-01',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1519 弄'
        //   }, {
        //     date: '2016-05-03',
        //     name: '王小虎',
        //     address: '上海市普陀区金沙江路 1516 弄'
        //   }]
       }
    },
    components:{
        Son
    },
    methods: {
        change(val){
            this.name = val;
        },
        // handleChange(){
        //     this.$emit("changeName");
        // }
        donghua(){
          
        }
    },
}
</script>
<style >
    .box{
      width: 200px;
      height: 200px;
      background-color: pink;
    }
</style>