<template>
    <div>
        <input :type="type" :value="curVal" @input="handleInput">
    </div>
</template>

<script>
    export default {
        props:{
            type:String
        },
        data(){
            return {
                curVal:""
            }
        },
        methods:{
            handleInput(e){
                this.curVal=e.target.value;
                this.$emit('input',this.curVal)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>