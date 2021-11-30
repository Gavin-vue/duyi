<template>
    <el-dialog title="自己封装的" :visible.sync="dialogVisible" width="30%"
    @close="closeDia">
        <span>这是自己封装的disLog信息</span>
        <span slot="footer" class="dialog-footer">
            <slot></slot>
            <el-button @click="">取 消</el-button>
            <el-button type="primary" @click="">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        props:["dialogVisible"],
        methods: {
            closeDia(){
                console.log("关闭了");
                this.$emit('closee');
            }
        },
    }
</script>
<style>

</style>