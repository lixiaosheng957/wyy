<template>
  <!-- 内容区导航组件 -->
  <div class="v-hd2">
    <!-- 标题 -->
    <div class="tit f-ff2 f-tdn">
      <span>{{ title }}</span>
    </div>
    <!-- 导航内容插槽 -->
    <slot />
    <!-- 更多 -->
    <span class="more">
      <a :href="moreLink">更多</a>
      <i class="cor s-bg s-bg-6">&nbsp;</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContentNav',
  props: { // 导航标题
    title: {
      type: String,
      default: ''
    },
    moreLink: { // 加载更多对应的链接
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-hd2 {
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
    no-repeat 0 9999px;
  background-position: -225px -156px;
  .tit {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .more {
    float: right;
    margin-top: 9px;
    .s-fc3 {
      color: #666;
    }
    .cor {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
    }
    .s-bg {
      background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
        no-repeat 0 9999px;
    }
    .s-bg-6 {
      background-position: 0 -240px;
    }
  }
}
</style>
