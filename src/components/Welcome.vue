<template>
  <div>
    <h1>我是欢迎界面,欢迎{{msg}}</h1>
    <router-link to='/login'></router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props:['msg'],
  methods: {},
};
</script>

<style scoped lang=scss>
</style>