<template>
  <!-- 网页底部 -->
  <div class="g-ft">
    <div class="m-ft">
      <div class="wrap f-cb">
        <!-- 底部左边 -->
        <div class="copy">
          <p id="music-link" class="link">
            <a
              href="//st.music.163.com/official-terms/service"
              target="_blank"
              class="item s-fc4"
            >服务条款</a>
            <span class="line">|</span>
            <a
              href="//st.music.163.com/official-terms/privacy"
              target="_blank"
              class="item s-fc4"
            >隐私政策</a>
            <span class="line">|</span>
            <a
              href="//st.music.163.com/official-terms/children"
              target="_blank"
              class="item s-fc4"
            >儿童隐私政策</a>
            <span class="line">|</span>
            <a
              href="//music.163.com/st/staticdeal/complaints.html"
              target="_blank"
              class="item s-fc4"
            >版权投诉指引</a>
            <span class="line">|</span>
            <a
              id="g_feedback"
              href="#"
              class="item s-fc4"
              onclick="nm.x.feedback();return false;"
              hidefocus="true"
            >意见反馈</a>
            <span class="line">|</span>
            <a class="s-fc4" />
          </p>
          <p class="right s-fc3">
            <span class="sep span">网易公司版权所有©1997-2020</span>
            <span class="span">杭州乐读科技有限公司运营：</span>
            <a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              target="_blank"
              class="alink s-fc3"
            >浙网文[2018]3506-263号</a>
          </p>
          <p class="contact s-fc3">
            <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
            <span class="span">举报邮箱：</span>
            <a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p class="right s-fc3">
            <span class="sep span">粤B2-20090191-18</span>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
              class="alink s-fc3"
            >工业和信息化部备案管理系统网站</a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              rel="noopener noreferrer"
              target="_blank"
              class="alink s-fc3 police-link"
            >
              <span class="police-logo" />
              <span class="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <!-- 底部右边 -->
        <ul class="enter f-fr">
          <li class="unit">
            <a
              class="logo logonew logo-amped f-tid"
              href="https://web-amped.music.163.com/"
              target="_blank"
            />
            <span class="tt tt-amped" />
          </li>
          <li class="unit">
            <a
              class="logo logonew logo-auth f-tid"
              href="//music.163.com/st/userbasic#/auth"
              target="_blank"
            />
            <span class="tt tt-auth" />
          </li>
          <li class="unit">
            <a
              class="logo logonew logo-musician f-tid"
              href="//music.163.com/recruit"
              target="_blank"
            />
            <span class="tt tt-musician" />
          </li>
          <li class="unit">
            <a
              class="logo logonew logo-reward f-tid"
              href="//music.163.com/web/reward"
              target="_blank"
            />
            <span class="tt tt-reward" />
          </li>
          <li class="unit">
            <a
              class="logo logonew logo-cash f-tid"
              href="//music.163.com/uservideo#/plan"
              target="_blank"
            />
            <span class="tt tt-cash" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.g-ft {
  font-size: 12px;
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .m-ft {
    width: 980px;
    margin: 0 auto;
    .wrap {
      .copy {
        float: left;
        width: 520px;
        padding-top: 15px;
        line-height: 24px;
        .link {
          .s-fc4 {
            color: #999;
          }
          .line {
            margin: 0 8px 0 10px;
            color: #c2c2c2;
          }
        }
        .right {
          color: #666;
          .sep {
            margin-right: 14px;
          }
          .police-link {
            margin-left: 5px;
          }
        }
        .contact {
          color: #666;
          .sep {
            margin-right: 14px;
          }
        }
      }
      .enter {
        width: 420px;
        margin-top: 33px;

        .unit {
          float: left;
          width: 60px;
          height: 70px;
            margin-left: 30px;
          text-align: center;
          color: #666;
          &:first-child {
            margin-left: 0px;
          }
          .logonew {
            background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?5fdf26fc0324246ba329a12bd43976dc)
              no-repeat;
            background-size: 110px 552px;
            display: block;
            float: none;
            width: 50px;
            height: 45px;
            margin: 0 auto;
          }
          .logo-amped{
              background-position: -63px -456.5px;
          }
          .logo-auth{
              background-position:-63px -101px;
          }
          .logo-musician{
              background-position: 0 0;
          }
          .logo-reward{
              background-position:-60px -50px;
          }
          .logo-cash{
              background-position:0 -101px;
          }
          .tt{
            display: inline-block;
            margin: 5px 5px 0;
            width: 52px;
            height: 14px;
            background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?04100c19aedc5119c8f5941bc9061e94) no-repeat;
            background-size: 180px 139px;
          }
            .tt-amped {
            background-position: 0 -108px;
            margin-left: -6px;
            width: 72px;
          }
          .tt-auth{
              background-position: -1px -91px;
          }
          .tt-musician{
              background-position:0 0;
          }
          .tt-reward{
              background-position:0 -54px;
          }
          .tt-cash{
              background-position:-1px -72px;
          }
        }
      }
    }
  }
}
</style>
