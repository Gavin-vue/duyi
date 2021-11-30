<template lang="">
    <div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
            }
        },
        components: {
            Parent: () => import(/*webpackChunkName:'async'*/'./chuancan/parent')
            //动态引入，将这个包命名为async
        },
        methods: {
            handleShow() {
                console.log("出现了");
                this.show = true;
            }
        }
    }

</script>
<style lang="">

</style>