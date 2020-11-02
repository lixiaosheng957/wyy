<template>
  <!-- 轮播图组件 -->
  <div ref="swiper" class="swiper" :style="{width:getWidth,height:getHeight}">

    <!-- 轮播内容插槽 -->
    <slot />

    <!-- 时间关系左右箭头不做进一步定制，直接写死 -->
    <!-- 右箭头 -->
    <div class="next" :style="{right:((clientWidth-980)/2-70)+'px'}" @click="nextHandle">
      <img src="https://s2.music.126.net/style/web2/img/ie6/arrr.png?=1" alt>
    </div>

    <!-- 左箭头 -->
    <div class="prev" :style="{left:((clientWidth-980)/2-70)+'px'}" @click="prevHandle">
      <img src="https://s2.music.126.net/style/web2/img/ie6/arrl.png?=1" alt>
    </div>

    <!-- 根据轮播个数计算下方按钮数量 -->
    <div ref="navbtn" class="nav-btn" :style="{width:navBtnWidth,left:btnLeft+'px'}">
      <div v-for="(item,index) in navBtnNum" :key="item" class="btn" @click="navBtnHandle(index)" />
    </div>

    <!-- 下载客户端遮罩层 -->
    <div class="download f-pr" :style="{right:((clientWidth-982)/2-10)+'px'}">
      <div class="btn" hidefocus="true">下载客户端</div>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      <span class="shadow" />
      <span class="shadowr" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    width: { // 轮播容器宽度
      type: [Number, String],
      default: '800px'
    },
    height: { // 轮播容器高度
      type: [Number, String],
      default: '400px'
    }
  },
  data() {
    return {
      clientWidth: window.screen.availWidth,
      swiperItems: [], // 接收轮播内容
      currentIndex: 0, // 当前正在播放内容
      navBtnWidth: '', // 下方按钮总宽度
      navBtnNum: 0, // 按钮数量
      btnLeft: 0, // 定位用
      navBtn: [] // 获取按钮实例
    }
  },
  computed: {
    getWidth() { // 计算宽度 支持输入字符串和数字
      return typeof this.$props.width === 'string'
        ? this.$props.width
        : this.$props.width + 'px'
    },
    getHeight() { // 计算高度  支持输入字符串和数字
      return typeof this.$props.height === 'string'
        ? this.$props.height
        : this.$props.height + 'px'
    }
  },
  mounted() {
    setTimeout(() => {
      this.autoPlay() // 默认自动播放  放在这是因为这样能只执行一次并且延时执行是因为要等初始化完成
    }, 4000)
  },

  /* 由于只能在在beforeUpdate和updated直接操作dom，故初始化操作放在这两部进行，这两个函数会在一开始调用多次
     会造成一定冗余操作，暂时未能想到更改好的方法
  */
  beforeUpdate() {
    this.navBtnNum = this.$slots.default.length // 根据轮播图类数组长度决定导航按钮数量
    this.navBtnWidth = this.$slots.default.length * 25 + 'px' // 计算宽度
    this.btnLeft = // 计算位置
      typeof this.width === 'string'
        ? (Number(this.width.slice(0, -2)) -
            Number(this.navBtnWidth.slice(0, -2))) /
          2
        : (this.width - Number(this.navBtnWidth.slice(0, -2))) / 2
  },
  updated() {
    // 筛选轮播内容插槽的项，由于没做其他插槽，故筛选可以省去
    this.swiperItems = this.$children.filter((item) => {
      return Object.prototype.hasOwnProperty.call(item.$refs, 'swiper-item')
    })

    // 初始化以及获取导航按钮实例
    this.swiperItems[0].$el.classList.add('current')
    this.navBtn = this.$refs.navbtn.children
    this.navBtn[0].classList.add('current')
  },
  methods: {

    // 轮播图的核心思想是通过索引的改变驱动轮播图播放,动画主要有CSS的过渡完成，过渡的属性是透明度

    // 为每个按钮添加事件
    navBtnHandle(index) {
      console.log(index)
      if (this.swiperItems.length !== 0) {
        const current = this.swiperItems[this.currentIndex]
        current.$el.classList.remove('current')
        this.navBtn[this.currentIndex].classList.remove('current')

        this.currentIndex = index

        this.swiperItems[this.currentIndex].$el.classList.add('current')
        this.navBtn[this.currentIndex].classList.add('current')
      }
    },

    // 向右播放一张
    nextHandle() {
      if (this.swiperItems.length !== 0) {
        const current = this.swiperItems[this.currentIndex]
        current.$el.classList.remove('current')
        this.navBtn[this.currentIndex].classList.remove('current')
        this.currentIndex++
        if (this.currentIndex >= this.swiperItems.length - 1) {
          this.currentIndex = 0
        }
        this.swiperItems[this.currentIndex].$el.classList.add('current')
        this.navBtn[this.currentIndex].classList.add('current')
      }
    },

    // 后左播放一张
    prevHandle() {
      if (this.swiperItems.length !== 0) {
        const current = this.swiperItems[this.currentIndex]
        current.$el.classList.remove('current')
        this.navBtn[this.currentIndex].classList.remove('current')
        this.currentIndex--
        if (this.currentIndex < 0) {
          this.currentIndex = this.swiperItems.length - 1
        }
        this.swiperItems[this.currentIndex].$el.classList.add('current')
        this.navBtn[this.currentIndex].classList.add('current')
      }
    },

    // 自动播放  默认想右播放
    // 时间关系暂时先不做 切换轮播方向 间隔时间 以及鼠标移入移出
    autoPlay() {
      setInterval(() => {
        this.nextHandle()
      }, 3000)
    }
  }

}
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  // 右按钮
  .next {
    z-index: 1000;
    position: absolute;
    right: 200px;
    width: 37px;
    height: 63px;
    top: calc(142.5px - 31.5px);
    &:hover{
      background-color: black;
    }
    cursor: pointer;
    img{
      width: 37px;
      height: 63px;
    }
  }
  // 左按钮
  .prev {
    z-index: 1000;
    position: absolute;
    width: 37px;
    height: 63px;
    left: 200px;
    top: calc(142.5px - 31.5px);
    cursor: pointer;
    &:hover{
      background-color: black;
    }
    img{
      width: 37px;
      height: 63px;
    }
  }
  // 底部按钮
  .nav-btn {
    position: absolute;
    z-index: 100;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 10px;
    .btn {
      width: 6px;
      height: 6px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color:brown;
      }
    }
    .current {
      background-color: brown;
    }
  }
  //下载客户端
  .download{
    position: absolute;
    top: 0;
    z-index: 100;
    right: 268px;
    width: 254px;
    height: 285px;
    background: url(https://s2.music.126.net/style/web2/img/index/download.png?529d9dd1df4be69d5fdca576dd15e0e9)
    no-repeat 0 0;
    .btn{
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background-position: 0 9999px;
      text-indent: -9999px;
    }
  }
}
</style>
