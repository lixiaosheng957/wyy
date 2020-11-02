<template>
  <!-- 单个排行榜的容器 -->
  <dl v-if="playList!=null" class="blk">
    <!-- 头部部分 -->
    <dt class="top">
      <div class="cver u-cover u-cover-4">
        <img :src="playList.coverImgUrl" alt class="j-img">
        <a href="#" class="msk" />
      </div>
      <div class="tit">
        <a href="/discover/toplist?id=19723756">
          <h3 class="f-fs1 f-thide">{{ playList.name }}</h3>
        </a>
        <div class="btn">
          <a href="#" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放">播放</a>
          <a href="#" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag">收藏</a>
        </div>
      </div>
    </dt>
    <!-- 排行列表部分 -->
    <dd>
      <ol>
        <li
          v-for="(item,index) in topItems"
          :key="index"
          @mouseover="canplay.splice(index,1,true)"
          @mouseleave="canplay.splice(index,1,false)"
        >
          <span class="no no-top">{{ index+1 }}</span>
          <a href="/song?id=1481121346" class="nm s-fc0 f-thide" title="LA DI DA" :class="{'nm-active':canplay[index]}">{{ item.name }}</a>
          <div class="oper" :class="{'oper-active':canplay[index]}">
            <a href="#" class="s-bg s-bg-11" />
            <a href="#" class="u-icn u-icn-81" />
            <a href="#" class="s-bg s-bg-12" />
          </div>
        </li>
      </ol>
      <!-- 加载更多 -->
      <div class="more">
        <a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a>
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'TopContainer',
  props: {
    topListType: { // 排行榜的类型
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      playList: null,
      topItems: [],
      canplay: [false, false, false, false, false, false, false, false, false, false] // 控制播放按钮的显示
    }
  },
  mounted() {
    this.axios
      .get(`/top/list?id=${this.topListType}`)
      .then((res) => {
        this.playList = res.data.playlist
      })
      .then(() => {
        this.topItems = this.playList.tracks.slice(0, 10) // 只取十条
      })
  }
}
</script>

<style lang="scss" scoped>
.blk {
  position: relative;
  float: left;
  width: 230px;
  .top {
    height: 100px;
    padding: 20px 0 0 19px;
    .cver {
      float: left;
      //   display: inline;
    }
    .u-cover-4 {
      width: 80px;
      height: 80px;
    }
    .u-cover {
      position: relative;
      // display: block;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .msk {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(https://s2.music.126.net/style/web2/img/coverall.png?93ee9574ef1b3e912d2682f59c611a4a)
          no-repeat;
        background-position: -145px -57px;
      }
    }
    .tit {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;
      color: #333;
      .btn {
        margin-top: 10px;

        a {
          display: block;
          float: left;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          text-indent: -9999px;
        }
        .s-bg {
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
            no-repeat 0 9999px;
        }
        .s-bg-9 {
          background-position: -267px -205px;
        }
        .s-bg-10 {
          background-position: -300px -205px;
        }
      }
    }
  }
  ol {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;

    li {
      height: 32px;
      font-size: 12px;
      .no {
        float: left;
        position: relative;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      .no-top {
        color: #c10d0c;
      }
      .nm {
        float: left;
        // position: absolute;
        width: 170px;
        height: 32px;
        color: #000;
        &:hover {
          text-decoration: underline;
        }
      }
      .nm-active {
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .oper {
        display: none;
        float: right;
        width: 82px;
        margin-top: 7px;

        a {
          float: left;
          width: 17px;
          height: 17px;
          margin-right: 10px;
        }
        .s-bg {
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?67779f3e0cabf7dc41b5a5cdb35f2753)
            no-repeat 0 9999px;
        }
        .s-bg-11 {
          background-position: -267px -268px;
        }
        .s-bg-12 {
          background-position: -297px -268px;
        }
        .u-icn {
          display: inline-block;
          overflow: hidden;
          background: url(https://s2.music.126.net/style/web2/img/icon.png?f1b2e0a1a6590b779ddb88b32012c5e4)
            no-repeat 0 9999px;
        }
        .u-icn-81 {
          margin: 2px 6px 0 0;
          background-position: 0 -700px;
        }
      }
      .oper-active{
          display: block;
      }
    }
  }
  .more {
    font-size: 12px;
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
    color: #000;
  }
}

.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.f-fs1 {
  font-size: 14px;
}
</style>
