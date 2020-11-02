<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
//引入重置样式表
@import "./styles/reset.scss";
//引入一些常用的样式
@import "./styles/function.scss";
html{
  overflow-x:hidden ;
}
</style>
