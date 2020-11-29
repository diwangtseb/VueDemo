<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    // if(this.$store.state.isLogin==false){
    //   this.$router.push("/Login")
    // }
    if(sessionStorage.getItem('isLogin')==null){
      this.$router.push(['/Login'])
    }
  }
};
</script>
<style>
</style>