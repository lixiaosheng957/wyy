<template>
  <!-- 更多新碟页面 -->
  <div class="page">
    <!-- 头部导航，并自定义副导航 -->
    <topbar>
      <template>
        <ul class="child-nav">
          <li v-for="item in childNav" :key="item.name">
            <a :class="{active:item.active}" :href="item.src">{{ item.name }}</a>
          </li>
        </ul>
      </template>
    </topbar>
    <!-- 页面主体部分 -->
    <div class="g-bd">
      <div class="g-wrap p-pl f-pr">
        <!-- 热门新碟头部 -->
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">热门新碟</span>
          </h3>
        </div>
        <!-- 热门新碟数据列表 -->
        <ul class="m-cvrlst1 f-cb">
          <li v-for="(item,index) in hotPlaylist" :key="index">
            <CDItem :cd-info="item" :big="true" />
          </li>
        </ul>
        <!-- 全部新碟头部 -->
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">热门新碟</span>
          </h3>
          <div class="tab">
            <a href="/discover/album/#/?area=ALL" class="s-fc6">全部</a>
            <span class="line">|</span>
            <a href="/discover/album/#/?area=ZH" class="s-fc3">华语</a>
            <span class="line">|</span>
            <a href="/discover/album/#/?area=EA" class="s-fc3">欧美</a>
            <span class="line">|</span>
            <a href="/discover/album/#/?area=KR" class="s-fc3">韩国</a>
            <span class="line">|</span>
            <a href="/discover/album/#/?area=JP" class="s-fc3">日本</a>
          </div>
        </div>
        <!-- 全部新碟数据列表 -->
        <ul class="m-cvrlst f-cb">
          <li v-for="(item,index) in newPlaylist" :key="index">
            <CDItem :cd-info="item" :big="true" />
          </li>
        </ul>
        <!-- 全部新碟分页器 -->
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
    <Footer />
  </div>
</template>

<script>
import topbar from '../../components/topbar/topbar'
import CDItem from '../Home/components/CDItem'
import Footer from '../../components/footer'
import { Pagination } from 'element-ui'
export default {
  name: 'LoadingMoreNew',
  components: {
    topbar,
    CDItem,
    Footer,
    'el-pagination': Pagination
  },
  data() {
    return {
      hotPlaylist: [],
      newPlaylist: [],
      total: 0,
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
          active: false,
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
          active: true,
          src: '/discover/album'
        }
      ]
    }
  },
  mounted() {
    // 加载热门新碟数据
    this.axios.get('/top/album?limit=10').then((res) => {
      this.hotPlaylist = res.data.monthData
    })
    // 加载全部新碟第一页数据
    this.axios.get('/album/new?limit=35&offset=1').then((res) => {
      console.log(res.data)
      this.newPlaylist = res.data.albums
      this.total = res.data.total
    })
  },
  methods: {
    // 点击分页器的页数按钮
    changeCurrent(index) {
      this.newPlaylist.splice(0)
      this.axios.get(`/album/new?limit=35&offset=${index}`).then(res => {
        this.newPlaylist = res.data.albums
      })
    },
    // 点击上一页按钮
    prev(index) {
      this.newPlaylist.splice(0)
      this.axios.get(`/album/new?limit=35&offset=${index}`).then(res => {
        this.newPlaylist = res.data.albums
      })
    },
    // 点击下一页
    next(index) {
      this.newPlaylist.splice(0)
      this.axios.get(`/album/new?limit=35&offset=${index}`).then(res => {
        this.newPlaylist = res.data.albums
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // 首部副导航
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
      // 数据列表头部
      .u-title {
        height: 40px;
        border-bottom: 2px solid #c20c0c;

        h3 {
          float: left;
          font-size: 24px;
          font-weight: normal;
        }
      }
      // 数据列表头部副导航列表
      .tab {
        font-size: 12px;
        float: left;
        margin: 12px 0 0 20px;
        a{
            color: #666;
            &:hover{
                text-decoration: underline;
            }
        }
        .line {
          margin: 0 10px;
          color: #c7c7c7;
        }
      }
      // 带分页的数据列表
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
      // 不带分页的数据列表
      .m-cvrlst1 {
        margin: 30px 0 0 -50px;
        li {
          float: left;
          width: 140px;
          height: 188px;
          overflow: hidden;
          padding: 0 0 30px 50px;
          line-height: 1.4;
        }
      }
      // 分页器容器
      .chang-page {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
