<template >
    <div>
        孙子组件
    
        <button @click='handleClick'>改变</button>
    </div>
</template>
<script>
export default {
    inject: ['data'],
    components:{
     
    },
    created() {
        console.log("打印呢")
        console.log(this.data);
    },
    methods: {
        handleClick(){
            // this.data.name = "后代改变了"
            // console.log(this.data
            console.log("打印纸呢");
            this.$listeners.change("马冬梅2");
            // console.log(;;)
            //   this.$listener.change();
        }
    },
}
</script>

