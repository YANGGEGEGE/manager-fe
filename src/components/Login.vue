<template>
  <div>
    <h1>我是登录界面</h1>
    <Welcome msg="yang"/>
    <el-button @click="goHome">首页</el-button>
  </div>
</template>

<script >
import Welcome from "./Welcome.vue";
export default {
  name: "",
  components: {
    Welcome,
  },
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("./welcome");
    },
  },
  mounted(){
    this.$request({
      methods:'get',
      url:'/login',
      data:{
        name:'jack'
      }
    }).then((res)=>{
      console.log(res);
    })
  }
};
</script>

<style scoped lang=scss>
</style>
