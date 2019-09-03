<template>
  <div class="index-a-container">
    <div class="lt-wrapper">
      <div class="news" @click="jumpto('news')">重要新闻</div>
      <pageRow :pagedata="pagedata[0]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
      <pageRow :pagedata="pagedata[1]" />
    </div>
    <div class="rt-wrapper">
      <div class="news" style="padding-left:10px">导航</div>
      <div style="overflow:hidden">
        <div class="block-btn short" @click="jumpto('kztj')">
          <img src="/kztj.jpg" alt />
        </div>
        <div class="block-btn short" @click="jumpto('sqzx')">
          <img src="/sqzx.jpg" alt />
        </div>
      </div>
      <div>
        <div class="block-btn long" @click="jumpto('kzgzq')">
          <img src="/kzgzq.jpg" alt />
        </div>
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
    jumpto: function(dir) {
      switch (dir) {
        case "news":
          this.$router.push("/society/news");
          break;
        case "kztj":
          this.$router.push("/society/cards");
          break;
        case "sqzx":
          this.$router.push("/society");
          break;
        case "kzgzq":
          this.$router.push("/teambuilder");
          break;
      }
    }
  }
};
</script>

<style scoped>
.index-a-container {
  z-index: 50;
  background: url("/bgimage.jpg") no-repeat;
  background-size: cover;
  padding: 50px 100px;
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
  width: 320px;
  padding: 10px;
}

.block-btn {
  float: left;
  margin: 10px 5px 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  filter: brightness(0.8) grayscale(0.5);
  cursor: pointer;
  transition: 0.2s;
}
.short {
  width: 145px;
}
.block-btn:hover {
  filter: brightness(1.1);
}
.block-btn img:hover {
  transform: scale(1.1);
}
.block-btn img {
  display: block;
  height: 145px;
  transform: scale(1);
  transition: 0.4s;
}
.short img {
  width: 145px;
}
.long img {
  width: 302px;
}
</style>