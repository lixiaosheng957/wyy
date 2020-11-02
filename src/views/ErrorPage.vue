<template>
  <div class="container" :style="background">
    <div class="back-to-home" @click="backToHome">
      <span class="text">返回首页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      background: {
        'background-image': `url(${require('../static/timg.jpg')})`,
        'background-size': 'cover'
      }
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
    width: 100vw;
    height: 100vh;
    .back-to-home{
        position: fixed;
        top: 40px;
        left: 30px;
        width: 100px;
        height: 40px;
        background-color: blue;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>
