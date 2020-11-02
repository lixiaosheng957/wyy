<template>
  <!-- 在组件初始化的时候自动设置宽度，宽度等于屏幕最大宽度-->
  <div class="g-topbar" :style="{width:(screenWidth)+'px'}">
    <!-- 主导航 -->
    <div class="m-top">
      <div class="warp f-cb">
        <!-- logo -->
        <h1 class="logo">
          <a href="/">网易云音乐</a>
        </h1>
        <!-- 导航列表 -->
        <ul class="m-nav j-tflag">
          <li v-for="item in nav" :key="item.name">
            <span>
              <a hidefocus="true" :href="item.href" :class="{select:item.isActive}">
                <em>{{ item.name }}</em>
                <sub :class="{cor:item.isActive,hot:item.last}">&nbsp;</sub>
              </a>
            </span>
          </li>
        </ul>
        <!-- 登录 -->
        <div class="m-tophead f-pr j-tflag">
          <a hidefocus="true" href="#" class="link s-fc3" data-action="login">登录</a>
        </div>
        <div class="m-topvd">创作者中心</div>
        <!-- 搜索框 -->
        <div v-if="showSearch" class="m-srch f-pr j-suggest">
          <div class="srchbg">
            <span class="parent">
              <input
                v-model="searchInput"
                type="text"
                name="srch"
                class="txt j-flag"
                style="opacity: 1;"
                placeholder="音乐/视频/电台/用户"
                @keydown.enter="submitSearch"
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 子导航 -->
    <div class="m-subnav" :class="{empty:slotEmpty}">
      <div class="warp">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    logo: {
      type: String,
      default: '网易云音乐'
    },
    showSearch: { // 是否显示搜索框
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      screenWidth: document.body.clientWidth, // 屏幕宽度
      slotEmpty: false, // 插槽是否为空
      searchInput: '', // 搜索框输入内容
      nav: [ // 导航项
        {
          name: '发现音乐',
          isActive: true,
          href: '/'
        },
        {
          name: '我的音乐',
          isActive: false,
          href: '/my'
        },
        {
          name: '朋友',
          isActive: false,
          href: '/friend'
        },
        {
          name: '商城',
          isActive: false,
          href: 'store'
        },
        {
          name: '音乐人',
          isActive: false,
          href: 'nmusician'
        },
        {
          name: '下载客户端',
          isActive: false,
          last: true,
          href: 'download'
        }
      ]
    }
  },
  created() {
    // 判断插槽是否为空
    if (Object.keys(this.$slots).length === 0) {
      this.slotEmpty = true
    }
  },
  methods: {
    // 按回车时跳转到搜索页面，并把关键字作为参数带过去
    submitSearch() {
      this.$router.push({ path: '/search', query: { keyword: this.searchInput }})
    }
  }
}
</script>

<style lang="scss" scoped>
.g-topbar {
  z-index: 99;
  zoom: 1;
  &::after{
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
    height: 0;
  }
  // 主导航上部样式
  .m-top {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .warp {
      width: 1100px;
      margin: 0 auto;

      .logo {
        float: left;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?beb2f83b0c872f1653d6ccd75151e384);
        background-repeat: no-repeat;
        cursor: pointer;
        a {
          float: left;
          width: 157px;
          height: 100%;
          padding-right: 20px;
          text-indent: -9999px;
        }
      }
      .m-nav {
        float: left;

        li {
          position: relative;
          background-position: right -300px;
          float: left;
          height: 70px;
          font-size: 14px;
          span {
            @extend li;
            a {
              @extend li;
              padding: 0 19px;
              text-align: center;
              line-height: 70px;
              text-decoration: none;
              color: #ccc;
              &:hover {
                background: #000;
                color: #fff;
              }
              em {
                @extend li;
                font-weight: normal;
              }
            }
          }
        }
        .cor {
          display: block;
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
          background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?beb2f83b0c872f1653d6ccd75151e384);
          background-repeat: no-repeat;
        }
        .hot {
          display: block;
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-position: -190px 0;
          background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?beb2f83b0c872f1653d6ccd75151e384);
          background-repeat: no-repeat;
        }
        .select {
          background: #000;
          color: #fff;
        }
      }
      .m-tophead {
        float: right;
        height: 45px;
        margin: 19px 0 0 20px;
        padding: 0 22px 0 0;

        .link {
          font-size: 12px;
          display: block;
          width: 28px;
          margin-top: 7px;
          color: #787878;
          &:hover {
            color: #999;
            text-decoration-line: underline;
          }
        }
      }

      .m-topvd {
        font-size: 12px;
        float: right;
        width: 90px;
        height: 32px;
        margin: 19px 0 0 12px;
        box-sizing: border-box;
        padding-left: 16px;
        border: 1px solid #4f4f4f;
        background-position: 0 -140px;
        line-height: 33px;
        color: #ccc;
        border-radius: 20px;
      }

      .m-srch {
        float: right;
        width: 158px;
        height: 32px;

        .srchbg {
          margin-top: 19px;
          background-position: 0 -99px;
          background-color: #fff;
          border-radius: 32px;
          background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?beb2f83b0c872f1653d6ccd75151e384);
          background-repeat: no-repeat;
          float: right;
          width: 158px;
          height: 32px;

          .parent {
            display: flex;
            align-items: center;
            position: relative;
            margin: 8px 0 0 30px;

            input {
              font-size: 12px;
              color: #333;
              line-height: 16px;
              width: 95%;
              margin: 0;
              padding: 0;
              background: transparent;
              border: none;
            }
          }
        }
      }
    }
  }
  // 副导航默认样式
  .m-subnav{
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    .warp{
      width: 1100px;
      height: 34px;
      margin: 0 auto;
    }
  }
  //导航栏为空的样式
  .empty{
    height: 5px;
    border-bottom: none;
  }
}
</style>
