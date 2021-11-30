
<template >
    <div>
        <button @click="$listeners.change">Test1</button>
        <TestSon v-on="$listeners"></TestSon>
        
    </div>
</template>
<script>
import TestSon from './Son';     
export default {
    components:{
        TestSon,
    },
    created() {
        // console.log("zhixingle");
        // // console.log(this.$listeners)
        //  this.$listeners.change();
    },
    activated() {
    console.log("actived1")
  },
  deactivated(){
    console.log("directived1")
  },
}
</script>
<style lang="">
    
</style>