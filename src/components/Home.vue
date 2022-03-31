<template>
  <div>
    <h1>我是home根组件</h1>
    <router-view></router-view>
    <router-link to="./Login">去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang=scss>

</style>