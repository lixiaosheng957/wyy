<template>
  <!-- 单个新碟的容器 -->
  <div>
    <!-- 图片区 -->
    <div class="u-cover u-cover-alb1" :style="{width:big?'130px':'',height:big?'130px':''}">
      <!-- 图片区 -->
      <img :src="cdInfo.picUrl" alt="" class="j-img">
      <!-- 蒙层 -->
      <div class="msk" />
      <!-- 播放 -->
      <div class="icon-play f-alpha f-fr" />
    </div>
    <!-- 专辑名 -->
    <p class="f-thide">
      <a title="Pretty Please" href="/album?id=94832688" class="s-fc0 tit">{{ cdInfo.name }}</a>
    </p>
    <!-- 歌手名 -->
    <p class="tit f-thide">
      <a class="s-fc3" href="/artist?id=1083118">{{ cdInfo.artist.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CDItem',
  props: {
    cdInfo: { // 单个新碟的数据
      type: Object,
      default: null
    },
    big: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.u-cover {
    margin-bottom: 7px;
    img{
        display: block;
    width: 100%;
    height: 100%;
    }
    .msk{
    width: 118px;
    height: 100px;
    cursor: pointer;
    background: url(https://s2.music.126.net/style/web2/img/coverall.png?93ee9574ef1b3e912d2682f59c611a4a) no-repeat;
    background-position: 0 -570px;
    position: absolute;
    top: 0;
    left: 0;
    }
    .icon-play{
    opacity: 0;
    left: 72px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background: url(https://s2.music.126.net/style/web2/img/iconall.png?d5ccc31accd581c788c8b09fc5807076) no-repeat;
    background-position: 0 -85px;
    position: absolute;
    right: 10px;
    bottom: 5px;
    &:hover{
        opacity: 1;
    }
    }
}
.u-cover-alb1 {
    width: 100px;
    height: 100px;
}
.u-cover {
    position: relative;
    display: block;
}
p{
    width: 90%;
    line-height: 18px;
    font-size: 12px;
    z-index: 10;
}
.f-thide{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
</style>
