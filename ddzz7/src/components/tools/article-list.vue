<template>
  <div class="article-list-container">
    <ul class="a-list">
      <a href="#" class="page">
        <p>什么是自走棋?</p>
        <div class="page-hover">
          <div class="hover-img">
            <img src="../../assets/pg1.jpg" alt />
          </div>
          <div class="hover-p">
            <p>《自走棋》是由巨鸟多多工作室自主研发，龙渊网络提供技术及发行的全新局内集换式战棋类手游。玩家通过搭建个人局内经济体系，使用各具特色的英雄卡牌进行对战，形成别致的八人割据式的战斗局势。同时游戏将由IMBA传媒搭建全球电竞体系，无论来自哪里，都可以与世界范围内的顶尖玩家切磋战斗，更有世界顶级电竞联赛等你来战！</p>
          </div>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 列表总样式 */
.a-list {
  padding: 0;
  margin: auto 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
/* 标题样式 */
.page {
  margin: 3px 0;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  color: white;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
}
/* 悬浮下拉样式 */
.page-hover {
  display: flex;
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  height: 0px;
  overflow: hidden;
  background-color: #000;
  transition: height 0.3s;
}
.page:hover > .page-hover {
  height: 125px;
}
.hover-img {
  flex: 3;
}
.hover-img img {
  width: 100%;
  height: 100%;
}
.hover-p {
  flex: 7;
}
.hover-p p {
  padding: 10px;
  text-align: left;
}
a {
  text-decoration: none;
}
p {
  margin: 0;
  padding: 0;
}
</style>