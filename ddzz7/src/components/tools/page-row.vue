<template>
  <!-- 
    example:

    <indexList :pagedata="pagedata[0]" />

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
        }
      ]
    };
  -->
  <div class="page-row">
    <a class="page">
      <div class="page-img">
        <img :src="pagedata.src" alt />
      </div>
      <div class="page-p">
        <p class="part">{{pagedata.part}}</p>
        <p class="title">{{pagedata.title}}</p>
        <p class="brief">{{pagedata.brief}}</p>
        <p class="time">{{pagedata.time}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["pagedata"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.page-row {
  margin: 1px 0;
}
.page {
  height: 150px;
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  filter: brightness(100%);
  cursor: pointer;
  transition: 0.3s;
}
.page:hover {
  padding-left: 16px;
  background-color: rgba(60, 73, 156, 0.5);
  filter: brightness(1.1);
  border: 1px solid white;
}
.page-img {
  width: 280px;
  position: relative;
}
img {
  width: 250px;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}
p {
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 1.5;
}
.page-p {
  flex: 7;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  margin: 18px 0 18px -10px;
}

.part {
  font-size: 1rem;
  color: #ffffff80;
}
.title {
  font-size: 1.8rem;
  color: white;
  font-size: bold;
}
.brief {
  font-size: 1rem;
  color: #bdc3c7;
}
.time {
  font-size: 0.8rem;
  color: #ffffff80;
}
</style>