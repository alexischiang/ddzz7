<template>
  <div class="index-a-container">
    <div class="lt-wrapper">
      <div class="news" @click="jumptoNews">重要新闻</div>
      <pageRow :pagedata="pagedata[0]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
    </div>
    <div class="rt-wrapper">
      <div class="news" @click="jumptoNews" style="padding-left:10px">导航</div>
      <div class="block-btn">
        <img src="/kztj.jpg" alt />
      </div>
      <div class="block-btn" style="margin-left:10px">
        <img src="/sqzx.jpg" alt />
      </div>
    </div>
  </div>
</template>


<script>
import pageRow from "./tools/page-row";
export default {
  components: {
    pageRow
  },
  data() {
    return {
      pagedata: [
        {
          src: "/pg1.jpg",
          part: "《新手攻略》",
          title: "什么是自走棋?",
          brief:
            "玩家通过搭建个人局内经济体系，使用各具特色的英雄卡牌进行对战。",
          time: "2019/8/27"
        },
        {
          src: "/pg2.jpg",
          part: "《新手攻略》",
          title: "电竞赛事战火激燃",
          brief: "做最纯粹的公平竞技游戏！",
          time: "2019/8/27"
        }
      ]
    };
  },
  methods: {
    jumptoNews: function() {
      this.$router.push("/society/news");
    }
  }
};
</script>

<style scoped>
.index-a-container {
  z-index: 50;
  background: url("/bgimage.jpg") no-repeat;
  background-size: cover;
  padding: 50px 45px;
  margin: 0 auto 0;
  display: flex;
}
.lt-wrapper {
  flex: 2;
  padding: 20px;
  margin-right: 10px;
}
.news {
  text-align: left;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 15px auto;
  cursor: pointer;
}
.rt-wrapper {
  flex: 1;
  padding: 10px;
}

.block-btn {
  width: 35%;
  float: left;
  margin: 10px 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  filter: brightness(0.8);
  cursor: pointer;
  transition: 0.2s;
}
.block-btn:hover {
  filter: brightness(1.1);
}
.block-btn img:hover {
  transform: scale(1.1);
}
.block-btn img {
  display: block;
  width: 100%;
  transform: scale(1);
  transition: 0.4s;
}
</style>