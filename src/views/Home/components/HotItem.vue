<template>
  <!-- 热门推荐单个歌单容器 -->
  <div>
    <div class="container">
      <!-- 图片 -->
      <img :src="itemInfo.picUrl?itemInfo.picUrl:itemInfo.coverImgUrl" alt>
      <!-- 蒙层 -->
      <div class="msk" />
      <!-- 播放按钮以及播放次数 -->
      <div class="bottom">
        <div class="icon-play f-fr" />
        <span class="icon-headset" />
        <span class="nb">{{ itemInfo.playCount }}</span>
      </div>
    </div>
    <!-- 描述 -->
    <p class="dec">
      <a href="#" class="text">{{ itemInfo.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HotItem',
  props: {
    itemInfo: { // 单个歌单数据
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 140px;
  height: 140px;
  position: relative;
  display: block;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .msk {
    background-position: 0 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://s2.music.126.net/style/web2/img/coverall.png?93ee9574ef1b3e912d2682f59c611a4a)
      no-repeat;
    cursor: pointer;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
    background: url(https://s2.music.126.net/style/web2/img/coverall.png?93ee9574ef1b3e912d2682f59c611a4a)
      no-repeat;

    .icon-play {
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 16px;
      cursor: pointer;
      height: 17px;
      background-position: 0 0;
      background: url(https://s2.music.126.net/style/web2/img/iconall.png?d5ccc31accd581c788c8b09fc5807076)
        no-repeat;
    }
    .icon-headset {
      float: left;
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
      margin: 9px 5px 9px 10px;
      background: url(https://s2.music.126.net/style/web2/img/iconall.png?d5ccc31accd581c788c8b09fc5807076)
        no-repeat;
    }
    .nb {
      float: left;
      margin: 7px 0 0 0;
      font-size: 12px;
    }
  }
}
.dec {
  margin: 8px 0 3px;
  font-size: 14px;
  .text {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
