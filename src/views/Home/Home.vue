<template>
  <div ref="home" class="home">
    <!-- 头部组件 -->
    <topbar>
      <template>
        <ul class="child-nav">
          <li v-for="item in childNav" :key="item.name">
            <a :class="{active:item.active}" :href="item.src">{{ item.name }}</a>
          </li>
        </ul>
      </template>
    </topbar>
    <!-- 轮播图 -->
    <Swiper :width="(clientWidth-17)+'px'" height="285px">
      <template>
        <SwiperItem v-for="(item,index) in imgUrlList" :key="index">
          <div
            class="img-container"
            :style="{'background-image':`url(${item}?imageView&blur=40x20)`}"
          >
            <img :src="item" alt style="width:982px;height:285px;object-fit: cover;">
          </div>
        </SwiperItem>
      </template>
    </Swiper>
    <!-- 页面主体部分 -->
    <div class="discover-module g-bd1 f-cb">
      <!-- 主要内容部分 -->
      <div class="g-mn1">
        <div class="g-mn1c">
          <div class="g-wrap3">
            <!-- 热门推荐部分 -->
            <div class="hot">
              <ContentNav title="热门推荐" more-link="/loading-hot">
                <div class="tab">
                  <a href="/discover/playlist/cat=华语" class="s-fc3">华语</a>
                  <span class="line">|</span>
                  <a href="/discover/playlist/?cat=流行" class="s-fc3">流行</a>
                  <span class="line">|</span>
                  <a href="/discover/playlist/?cat=摇滚" class="s-fc3">摇滚</a>
                  <span class="line">|</span>
                  <a href="/discover/playlist/?cat=民谣" class="s-fc3">民谣</a>
                  <span class="line">|</span>
                  <a href="/discover/playlist/?cat=电子" class="s-fc3">电子</a>
                </div>
              </ContentNav>
              <ul class="m-cvrlst f-cb">
                <li v-for="item in hotItems" :key="item.id">
                  <HotItem :item-info="item" />
                </li>
              </ul>
            </div>
            <!-- 做间隔用 -->
            <div class="n-clmnad" data-has-music-ad="0">
              <div class="j-flag f-hide" />
            </div>
            <!-- 新碟上架部分 -->
            <div class="n-new">
              <ContentNav title="新碟上架" more-link="/loading-new" />
              <div class="n-disk">
                <div class="inner">
                  <div class="click-flag pre s-bg s-bg-7 f-tdn" @click="prevItem" />
                  <div class="roll f-pr">
                    <ul
                      v-for="(item,index) in newCdItems"
                      :key="index"
                      class="f-cb roller-flag"
                      :style="{opacity:CdItemsAvtive[index]?'1':'0', transition: `${CdItemsAvtive[index]?'all':'none'} 0s ease 0s`}"
                    >
                      <li v-for="(it,i) in item" :key="i">
                        <CDItem :cd-info="it" />
                      </li>
                    </ul>
                  </div>
                  <div class="click-flag nxt s-bg s-bg-8 f-tdn" @click="nextItem" />
                </div>
              </div>
            </div>
            <!-- 排行榜部分 -->
            <div class="n-bill">
              <ContentNav title="榜单" more-link="error" />
              <div class="n-bilst">
                <TopContainer :top-list-type="19723756" />
                <TopContainer :top-list-type="3779629" />
                <TopContainer :top-list-type="2884035" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 侧边栏部分 -->
      <div class="g-sd1">
        <!-- 用户登录部分 -->
        <div class="n-user-profile">
          <div class="n-myinfo n-myinfo-1 s-bg s-bg-1">
            <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#" class="btn s-bg s-bg-2 f-tdn">用户登录</a>
          </div>
        </div>
        <!-- 入驻歌手部分 -->
        <div class="n-singer">
          <h3 class="v-hd3">
            <span class="f-fl">入驻歌手</span>
            <a href="/discover/artist/signed/" class="more s-fc3">查看全部 &gt;</a>
          </h3>
          <ul class="n-enter f-cb">
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
                    alt
                    class="j-img"
                  >
                </div>
                <div class="ifo">
                  <h4>
                    <span class="nm f-fs1 f-ib f-thide">张惠妹aMEI</span>
                  </h4>
                  <p class="f-thide s-fc3">台湾歌手张惠妹</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    src="http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"
                    alt
                    class="j-img"
                  >
                </div>
                <div class="ifo">
                  <h4>
                    <span class="nm f-fs1 f-ib f-thide">Fine乐团</span>
                  </h4>
                  <p class="f-thide s-fc3">独立音乐人</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    src="http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62"
                    alt
                    class="j-img"
                  >
                </div>
                <div class="ifo">
                  <h4>
                    <span class="nm f-fs1 f-ib f-thide">萬曉利</span>
                  </h4>
                  <p class="f-thide s-fc3">民谣歌手、中国现代民谣的代表人物之一</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    src="http://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62"
                    alt
                    class="j-img"
                  >
                </div>
                <div class="ifo">
                  <h4>
                    <span class="nm f-fs1 f-ib f-thide">音乐人赵雷</span>
                  </h4>
                  <p class="f-thide s-fc3">民谣歌手</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user/home?id=29879272" class="itm f-tdn">
                <div class="head">
                  <img
                    src="http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62"
                    alt
                    class="j-img"
                  >
                </div>
                <div class="ifo">
                  <h4>
                    <span class="nm f-fs1 f-ib f-thide">王三溥</span>
                  </h4>
                  <p class="f-thide s-fc3">音乐人</p>
                </div>
              </a>
            </li>
          </ul>
          <div>
            <a target="_blank" href="/recruit" hidefocus="true" class="u-btn2 u-btn2-1">
              <i>申请成为网易音乐人</i>
            </a>
          </div>
        </div>
        <!-- 热门主播部分 -->
        <div class="n-dj-1">
          <h3 class="v-hd3">热门主播</h3>
          <ul class="n-hotdj f-cb">
            <li>
              <a href="/user/home?id=278438485" class="cver">
                <img
                  class="j-img"
                  src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                  data-src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                >
              </a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">陈立</a>
                  <sup class="u-icn u-icn-1" />
                </p>
                <p class="f-thide s-fc3">心理学家、美食家陈立教授</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=278438485" class="cver">
                <img
                  class="j-img"
                  src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40"
                >
              </a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">DJ艳秋</a>
                  <sup class="u-icn u-icn-1" />
                </p>
                <p class="f-thide s-fc3">著名音乐节目主持人</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=278438485" class="cver">
                <img
                  class="j-img"
                  src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40"
                >
              </a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">国家大剧院古典音乐频道</a>
                  <sup class="u-icn u-icn-1" />
                </p>
                <p class="f-thide s-fc3">国家大剧院古典音乐官方</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=278438485" class="cver">
                <img
                  class="j-img"
                  src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40"
                >
              </a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">谢谢收听</a>
                  <sup class="u-icn u-icn-1" />
                </p>
                <p class="f-thide s-fc3">南京电台主持人王馨</p>
              </div>
            </li>
            <li>
              <a href="/user/home?id=278438485" class="cver">
                <img
                  class="j-img"
                  src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40"
                >
              </a>
              <div class="info">
                <p>
                  <a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">DJ晓苏 </a>
                  <sup class="u-icn u-icn-1" />
                </p>
                <p class="f-thide s-fc3">独立DJ，CRI环球旅游广播</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import topbar from '../../components/topbar/topbar'
import { Swiper, SwiperItem } from '../../components/swiper'
import Footer from '../../components/footer'
import ContentNav from './components/ContentNav'
import HotItem from './components/HotItem'
import CDItem from './components/CDItem'
import TopContainer from './components/TopContainer'
export default {
  name: 'Home',
  components: {
    topbar,
    Swiper,
    SwiperItem,
    Footer,
    ContentNav,
    HotItem,
    CDItem,
    TopContainer
  },
  data() {
    return {
      clientWidth: document.body.clientWidth, // 获取屏幕宽度
      imgUrlList: [], // 轮播图url列表
      hotItems: [], // 热门推荐item
      newCdItems: [], // 新碟item
      CdItemsAvtive: [true, false, false, false], // 控制新碟容器的切换
      currentCDIndex: 0, // 当前显示的新碟容器
      // 子导航
      childNav: [
        {
          name: '推荐',
          active: true,
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
          src: '/loading-hot'
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
          src: '/loading-new'
        }
      ]
    }
  },
  mounted() {
    // 拉取轮播图数据
    this.axios.get('/banner').then((res) => {
      res.data.banners.forEach((item) => {
        this.imgUrlList.push(item.imageUrl)
      })
    })
    // 拉取热门推荐数据
    this.axios.get('/personalized?limit=8').then((res) => {
      res.data.result.forEach((item) => {
        this.hotItems.push(item)
      })
    })
    // 拉取新碟上架数据
    for (let i = 0; i < 4; i++) {
      this.axios.get(`/top/album?limit=5&offset=${i}`).then((res) => {
        this.newCdItems.push(res.data.monthData)
      })
    }
  },
  methods: {
    // 下一个新碟容器
    nextItem() {
      this.CdItemsAvtive[this.currentCDIndex] = false

      this.currentCDIndex++
      if (this.currentCDIndex >= 4) {
        this.currentCDIndex = 0
      }
      this.CdItemsAvtive.splice(this.currentCDIndex, 1, true)
    },
    // 上一个新碟容器
    prevItem() {
      this.CdItemsAvtive[this.currentCDIndex] = false

      this.currentCDIndex--
      if (this.currentCDIndex < 4) {
        this.currentCDIndex = 4
      }
      this.CdItemsAvtive.splice(this.currentCDIndex, 1, true)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 982px;
  background: #f5f5f5;
  // 子导航
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
  //轮播图居中
  .img-container {
    display: flex;
    justify-content: center;
  }
  // 主区域
  .discover-module {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    //主内容区
    .g-mn1 {
      float: left;
      width: 100%;
      margin-right: -250px;
      .g-mn1c {
        margin-right: 250px;
        .g-wrap3 {
          padding: 20px 20px 40px;
          //热门推荐
          .hot {
            .m-cvrlst {
              margin: 20px 0 0 -42px;
              li {
                width: 140px;
                height: 204px;
                padding-left: 42px;
                // display: inline-block;
                float: left;
                overflow: hidden;
                padding: 0 0 30px 42px;
                line-height: 1.4;
              }
            }
          }
          .n-clmnad {
            position: relative;
            margin: 0 0 35px;
          }
        }
      }
      .tab {
        font-size: 12px;
        float: left;
        margin: 7px 0 0 20px;
        color: #666;
        .line {
          margin: 0 10px;
          color: #ccc;
        }
      }
      //新碟上架
      .n-new {
        .n-disk {
          position: relative;
          zoom: 1;
          height: 186px;
          margin: 20px 0 37px;
          border: 1px solid #d3d3d3;
          .inner {
            height: 184px;
            padding-left: 16px;
            background: #f5f5f5;
            border: 1px solid #fff;
            .pre {
              position: absolute;
              left: 4px;
              top: 71px;
              width: 17px;
              height: 17px;
              z-index: 10;
              cursor: pointer;
            }
            .s-bg {
              background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
                no-repeat 0 9999px;
            }
            .s-bg-7 {
              background-position: -260px -75px;
            }
            .nxt {
              position: absolute;
              top: 71px;
              width: 17px;
              height: 17px;
              right: 4px;
              cursor: pointer;
            }
            .s-bg-8 {
              background-position: -300px -75px;
            }
            .roll {
              float: left;
              width: 645px;
              height: 180px;
              overflow: hidden;
              ul {
                position: absolute;
                top: 0;
                width: 645px;
                margin: 28px 0 0 0;
                li {
                  float: left;
                  display: inline;
                  width: 118px;
                  height: 150px;
                  margin-left: 11px;
                  background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
                    no-repeat 0 9999px;
                  background-position: -260px 100px;
                }
              }
            }
          }
        }
      }
      // 排行榜
      .n-bill {
        .n-bilst {
          width: 690px;
          height: 472px;
          margin-top: 20px;
          padding-left: 1px;
          background: url(https://s2.music.126.net/style/web2/img/index/index_bill.png?410b520aa566ddcabdd4b459e8becaad)
            no-repeat;
        }
      }
    }

    //侧边栏区
    .g-sd1 {
      position: relative;
      float: right;
      width: 250px;
      zoom: 1;
      // 用户登录
      .n-user-profile {
        .n-myinfo-1 {
          height: 126px;
          padding-top: 0;
          .note {
            font-size: 12px;
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
          }
          .btn {
            margin: 0 auto;
            display: block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
          }
          .s-bg {
            background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
              no-repeat 0 9999px;
          }
          .s-bg-2 {
            background-position: 0 -195px;
          }
        }
        .s-bg {
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
            no-repeat 0 9999px;
        }
        .s-bg-1 {
          background-position: 0 0;
        }
      }
      //入驻歌手
      .n-singer {
        margin-top: 15px;
        .v-hd3 {
          font-size: 12px;
          position: relative;
          *zoom: 1;
          height: 23px;
          margin: 0 20px;
          border-bottom: 1px solid #ccc;
          color: #333;
          .f-fl {
            float: left;
          }
          .more {
            float: right;
            font-weight: normal;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .n-enter {
          margin: 6px 0 14px 20px;
          li {
            font-size: 12px;
            margin-top: 14px;
            float: left;
            width: 210px;
            height: 62px;
            background: #fafafa;
            .itm {
              float: left;
              width: 210px;
              height: 62px;
              background: #fafafa;

              .head {
                float: left;
                width: 62px;
                height: 62px;
                img {
                  float: left;
                  width: 62px;
                  height: 62px;
                }
              }
              .ifo {
                float: left;
                width: 133px;
                height: 60px;
                padding-left: 14px;
                border: 1px solid #e9e9e9;
                border-left: none;
                &:hover {
                  background-color: #f5f5f5;
                }
                h4 {
                  span {
                    font-size: 14px;
                  }
                }
              }
            }
          }
          .nm {
            width: 90%;
          }
          .f-thide {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
        }
        .u-btn2 {
          font-size: 12px;
          margin-left: 20px;
          border-radius: 4px;
          color: #333;
          background: url(https://s2.music.126.net/style/web2/img/button2.png?93ecd92f1c3c90532a5def3f50366699)
            no-repeat 0 9999px;
          background-position: right -100px;
          padding: 0 5px 0 0;
          white-space: nowrap;
          display: inline-block;
          height: 31px;
          line-height: 31px;
          overflow: hidden;
          vertical-align: top;
          text-align: center;
          cursor: pointer;
          i {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            vertical-align: top;
            text-align: center;
            width: 170px;
            font-weight: bold;
            background: url(https://s2.music.126.net/style/web2/img/button2.png?93ecd92f1c3c90532a5def3f50366699)
              no-repeat 0 9999px;
            background-position: 0 -59px;
            padding: 0 15px 0 20px;
            pointer-events: none;
          }
        }
        p {
          width: 90%;
          margin-top: 8px;
        }
      }
      //人气主播
      .n-dj-1 {
        margin-top: 30px;
        .v-hd3 {
          font-size: 12px;
          position: relative;
          *zoom: 1;
          height: 23px;
          margin: 0 20px;
          border-bottom: 1px solid #ccc;
          color: #333;
        }
        .n-hotdj {
          margin: 20px 0 0 20px;
          li {
            float: left;
            width: 210px;
            height: 50px;
            .cver {
              float: left;
              width: 40px;
              margin-right: 10px;
              img {
                width: 40px;
                height: 40px;
                box-shadow: 0 0 1px #333333 inset;
              }
            }
            .info {
              float: left;
              width: 160px;
              line-height: 21px;
              font-size: 12px;
              .nm-icn {
                display: inline-block;
                zoom: 1;
                max-width: 88%;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .u-icn {
                margin-top: -1px;
              }
              .u-icn-1 {
                width: 11px;
                height: 13px;
                background: url(https://s2.music.126.net/style/web2/img/icon.png?f1b2e0a1a6590b779ddb88b32012c5e4)
                  no-repeat 0 9999px;
                background-position: 0 1px;
                font-size: 100%;
                font-style: normal;
                display: inline-block;
                overflow: hidden;
                vertical-align: middle;
              }
            }
            .f-thide {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
          }
          p {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
