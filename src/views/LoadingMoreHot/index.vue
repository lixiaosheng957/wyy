<template>
  <!-- 加载更多热门推荐页面 -->
  <div class="page">
    <!-- 头部导航 -->
    <topbar>
      <template>
        <ul class="child-nav">
          <li v-for="item in childNav" :key="item.name">
            <a :class="{active:item.active}" :href="item.src">{{ item.name }}</a>
          </li>
        </ul>
      </template>
    </topbar>
    <!-- 主体部分 -->
    <div class="g-bd">
      <div class="g-wrap p-pl f-pr">
        <!-- 主体头部 -->
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">全部</span>
            <div class="u-btn2 u-btn2-1 menu d-flag">
              <i>
                选择分类
                <em class="u-icn u-icn-38" />
              </i>
            </div>
          </h3>
          <div class="u-btn f-fr u-btn-hot d-flag">
            <a href="/discover/playlist/?order=hot" class="a1">热门</a>
          </div>
        </div>
        <!-- 数据列表 -->
        <ul class="m-cvrlst f-cb">
          <!-- 列表容器 -->
          <li v-for="(item,index) in playlist" :key="index">
            <HotItem :item-info="item" />
          </li>
        </ul>
        <!-- element的分页器 -->
        <div class="chang-page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="35"
            prev-text="上一页"
            next-text="下一页"
            @prev-click="prev"
            @next-click="next"
            @current-change="changeCurrent"
          />
        </div>
      </div>
    </div>
    <!-- 脚部 -->
    <Footer />
  </div>
</template>

<script>
import topbar from '../../components/topbar/topbar'
import HotItem from '../Home/components/HotItem'
import Footer from '../../components/footer'
import { Pagination } from 'element-ui'
export default {
  name: 'LoadingMoreHot',
  components: {
    topbar,
    HotItem,
    Footer,
    'el-pagination': Pagination
  },
  data() {
    return {
      playlist: [], // 数据列表
      total: 0, // 数据总条数

      // 子导航
      childNav: [
        {
          name: '推荐',
          active: false,
          src: '/'
        },
        {
          name: '排行榜',
          active: false,
          src: '/discover/toplist'
        },
        {
          name: '歌单',
          active: true,
          src: '/discover/playlist'
        },
        {
          name: '主播电台',
          active: false,
          src: '/discover/djradio'
        },
        {
          name: '歌手',
          active: false,
          src: '/discover/artist'
        },
        {
          name: '新碟上架',
          active: false,
          src: '/discover/album'
        }
      ]
    }
  },
  mounted() {
    // 请求第一页数据，并初始化数据列表和总条数
    this.axios.get('/top/playlist?limit=35&offset=1').then(res => {
      this.playlist = res.data.playlists
      this.total = res.data.total
    })
  },
  methods: {
    // 点击分页器页数
    changeCurrent(index) {
      console.log(index)
      this.playlist.splice(0)
      this.axios.get(`/top/playlist?limit=35&offset=${index}`).then(res => {
        this.playlist = res.data.playlists
      })
    },
    // 点击上一页
    prev(index) {
      this.playlist.splice(0)
      this.axios.get(`/top/playlist?limit=35&offset=${index}`).then(res => {
        this.playlist = res.data.playlists
      })
    },
    // 点击下一页
    next(index) {
      this.playlist.splice(0)
      this.axios.get(`/top/playlist?limit=35&offset=${index}`).then(res => {
        this.playlist = res.data.playlists
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // 头部副导航
  .child-nav {
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 180px;
    li {
      height: 34px;
      text-align: center;
      cursor: pointer;
      a {
        color: #fff;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;
        &:hover {
          background: #9b0909;
        }
      }
    }
    .active {
      background: #9b0909;
    }
  }
  // 页面主体
  .g-bd {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .g-wrap {
      padding: 40px;
      // 主体头部
      .u-title {
        height: 40px;
        border-bottom: 2px solid #c20c0c;

        h3 {
          float: left;
          font-size: 24px;
          font-weight: normal;
        }
        .menu {
          font-size: 12px;
          font-weight: normal;
          margin: 2px 0 0 12px;
          i {
            color: #0c73c2 !important;
            padding: 0 10px 0 15px;
          }
          .u-icn-38 {
            width: 8px;
            height: 5px;
            background: url(https://s2.music.126.net/style/web2/img/icon.png?c424ce02e9230b58a52037bb52cb10a6)
              no-repeat 0 9999px;
            background-position: -70px -543px;
            margin-left: 5px;
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
          }
        }
        .u-btn2 {
          font-size: 12px;
          display: inline-block;
          height: 31px;
          line-height: 31px;
          overflow: hidden;
          padding: 0 5px 0 0;
          white-space: nowrap;
          vertical-align: top;
          text-align: center;
          cursor: pointer;
          background: url(https://s2.music.126.net/style/web2/img/button2.png?7b00cb0df1d891f7a585dbf4e60f3c37)
            no-repeat 0 9999px;

          i {
            display: block;
            width: 61px;
            height: 31px;
            background: url(https://s2.music.126.net/style/web2/img/button2.png?7b00cb0df1d891f7a585dbf4e60f3c37)
              no-repeat 0 9999px;
            background-position: 0 -59px;
          }
        }
        .u-btn2-1 {
          color: #333;
          background-position: right -100px;
        }

        .u-btn-hot {
          display: inline-block;
          height: 29px;
          background: url(https://s2.music.126.net/style/web2/img/button.png?6b5caaf3c7c015445c5c77e0d33e00dd)
            no-repeat 0 9999px;
          background-position: 0 0;
          border-radius: 3px;

          .a1 {
            font-size: 12px;
            color: white;
            float: left;
            width: 46px;
            height: 29px;
            line-height: 29px;
            text-align: center;
          }
        }
      }
      // 数据列表
      .m-cvrlst {
        margin: 30px 0 0 -50px;
        height: 1526px;
        li {
          float: left;
          width: 140px;
          height: 188px;
          overflow: hidden;
          padding: 0 0 30px 50px;
          line-height: 1.4;
        }
      }
      .chang-page{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
