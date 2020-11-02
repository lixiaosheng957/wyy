<template>
  <!-- 搜索页面 -->
  <div class="search-page">
    <!-- 头部导航栏 -->
    <topbar :show-search="false" />
    <!-- 主体部分 -->
    <div class="g-bd">
      <div class="g-wrap n-srch">
        <!-- 搜索框 -->
        <div class="pgsrch f-pr j-suggest">
          <input v-model="keyword" type="text" class="srch j-flag" style="opacity: 1;" @keydown.enter="search">
          <div class="btn j-flag" @click="search" />
        </div>
        <!-- 搜索结果 -->
        <div class="m-search">
          <!-- 搜索到多少数据 -->
          <div class="snote">
            搜索“{{ keyword }}”，找到
            <em>{{ searchData.length }}</em>首单曲
          </div>
          <!-- 搜索分类导航 -->
          <ul class="m-tabs m-tabs-srch f-cb ztag" style="margin-bottom: auto;">
            <li>
              <div class="nav-item now">
                <span>单曲</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>歌手</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>专辑</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>视频</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>歌词</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>歌单</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>主播电台</span>
              </div>
            </li>
            <li>
              <div class="nav-item">
                <span>用户</span>
              </div>
            </li>
          </ul>
          <!-- 搜索结果列表，只取20条 -->
          <div class="search-result">
            <div class="n-srchrst">
              <div class="srchsongst">
                <!-- 单个搜索结果容器 -->
                <div
                  v-for="(item,index) in searchData"
                  :key="index"
                  class="item f-cb h-flag"
                  :class="{double:index%2===0?false:true}"
                >
                  <div class="td">
                    <div class="hd">
                      <div class="ply" />
                    </div>
                  </div>
                  <div class="td w0">
                    <div class="sn">
                      <div class="text">
                        <a href>
                          <b title>{{ item.name }}</b>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="td">
                    <div class="opt hshow" />
                  </div>
                  <div class="td w1">
                    <div class="text">
                      <a href>{{ item.artists[0].name }}</a>
                    </div>
                  </div>
                  <div class="td w2">
                    <div class="text">
                      <a href>《{{ item.album.name }}》</a>
                    </div>
                  </div>
                  <div class="td">03:10</div>
                </div>
                <div v-if="searchData.length===0" class="item f-cb">
                  <span>搜索结果为空</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/'
export default {
  name: 'Search',
  components: {
    topbar,
    Footer
  },
  data() {
    return {
      keyword: '', // 关键字
      searchData: [] // 搜索结果数据
    }
  },
  mounted() {
    this.keyword = this.$route.query.keyword
    this.axios
      .get(`/search?keywords=${this.keyword}&limit=20&type=1`)
      .then((res) => {
        res.data.result.songs.forEach((item) => {
          this.searchData.push(item)
        })
      })
  },
  methods: {
    search() {
      this.searchData.splice(0) // 搜索前先清空之前的数据
      this.axios
        .get(`/search?keywords=${this.keyword}&limit=20&type=1`)
        .then((res) => {
          res.data.result.songs.forEach((item) => {
            this.searchData.push(item)
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
// 页面主体部分
.g-bd {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .g-wrap {
    padding: 40px;
    // 搜索框
    .pgsrch {
      width: 420px;
      height: 40px;
      margin: 0 auto;
      background: url(https://s2.music.126.net/style/web2/img/sprite.png?a98637f40ec14f914f2447e3b1b6713d)
        no-repeat 0 9999px;
      background-position: 0 0;
      z-index: 10;
      font-size: 12px;
      .srch {
        float: left;
        width: 320px;
        height: 17px;
        margin: 12px 0 0 20px;
        padding: 0;
        background: #fff;
        border: none;
      }
      .btn {
        float: right;
        width: 50px;
        cursor: pointer;
        height: 40px;
        text-indent: -9999px;
        background: url(https://s2.music.126.net/style/web2/img/sprite.png?a98637f40ec14f914f2447e3b1b6713d)
          no-repeat 0 9999px;
      }
    }
    //数据列表主体
    .m-search {
      //搜到有多少条数据
      .snote {
        font-size: 12px;
        margin: 28px 0 17px;
      }
      // 数据分类导航
      .m-tabs {
        height: 39px;
        border: 1px solid #ccc;
        border-width: 0 1px;
        background: url(https://s2.music.126.net/style/web2/img/tab.png?a7bda0f572601fd409cccd9be5b3bb65)
          no-repeat 0 9999px;
        background-position: 0 0;
        background-repeat: repeat-x;

        li {
          position: relative;
          left: -1px;
          float: left;
          height: 39px;
          font-size: 14px;
          .z-slt {
            background-position: left -90px;
          }
          .nav-item {
            padding-left: 2px;
            float: left;
            height: 39px;
            font-size: 14px;
            cursor: pointer;
            &:hover {
              box-sizing: border-box;
              border-top: 2px solid red;
            }
            span {
              display: block;
              width: 108px;
              text-align: center;
              line-height: 39px;
            }
          }
          .now {
            background-color: white;
            box-sizing: border-box;
            border-top: 2px solid red;
            border-left: 1px solid #cdc9c9;
          }
        }
      }
      //数据展示
      .search-result {
        .n-srchrst {
          margin-top: 20px;

          .srchsongst {
            .item {
              font-size: 12px;
              padding: 10px 10px 8px 18px;
              border: 1px solid #fff;
              &:hover{
                background: #f2f2f2;
                border: 1px solid #e1e1e1;
              }
            }
            .td {
              float: left;
              margin-right: 5px;
            }
            .hd {
              height: 17px;
              width: 17px;
              .ply {
                display: inline-block;
                width: 17px;
                height: 17px;
                margin-right: 15px;
                cursor: pointer;
                background: url(https://s2.music.126.net/style/web2/img/table.png?db3533f151d6ae6a088694ed923eaffa)
                  no-repeat 0 9999px;
                background-position: 0 -103px;
              }
            }
            .w0 {
              width: 370px;
            }
            .hshow {
              visibility: hidden;
              width: 96px;
              height: 16px;
            }
            .w1 {
              width: 15%;
              margin-right: 12px;
            }
            .w2 {
              width: 17%;
              margin-right: 12px;
              min-height: 16px;
            }
            .text {
              position: relative;
              display: inline-block;
              padding-right: 25px;
              width: auto;
              max-width: 100%;
              height: 20px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .double {
              background: #f7f7f7;
              border-color: #f7f7f7;
            }
          }
        }
      }
    }
  }
}
</style>
