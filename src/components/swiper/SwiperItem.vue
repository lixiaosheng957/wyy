<template>
  <div ref="swiper-item" class="swiper-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  data() {
    return {
      isCurrent: true
    }
  }
}
</script>

<style lang="scss" scoped>
// 绝对定位让所有图片叠在一起，通过透明度控制显示
  .swiper-item{
    width: inherit;
    height: inherit;
    position: absolute;
    transition: all linear 0.8s;
    opacity: 0;
  }
  .current{
    opacity: 1;
  }
</style>
