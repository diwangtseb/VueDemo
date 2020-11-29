<template>
    <div>
        <MycomponentSon v-model="msg"></MycomponentSon>
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg: '',
            }
        },
        components:{
            MycomponentSon:()=>import('@/components/MycomponentSon')
        }
    }
</script>

<style lang="scss" scoped>

</style>