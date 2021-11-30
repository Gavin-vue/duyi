<template >
    <div>
        儿子组件
        <GrandSon v-bind='$attrs' v-on="$listeners"></GrandSon>
    </div>
</template>
<script>
import GrandSon from './grandson'
export default {
    components:{
        GrandSon
    }
}
</script>
