<template>
  <div class="recommend-container">
    <!-- 
        ---------------------
              阵容 栏
        ---------------------
    -->
    <!-- 顶端logo + 标题 -->
    <div class="top">
      <div class="chess-img">
        <img src="/team.png" alt />
      </div>
      <p class="p1">您的阵容 (最多10人口) :</p>
    </div>
    <!-- 阵容框 -->
    <div class="yourchess-container">
      <div class="pickedchess" :class="{none:!pickedChess.length}">
        <div
          v-for="(item, index) in pickedChess"
          :key="index"
          @click="cancelChess(`${item.cnname}`)"
        >
          <img :src="`/headpics2/${item.name}.jpg`" :class="`mychess-cost${item.cost}`" />
        </div>
      </div>
      <!-- 
        ---------------------
              Buff 栏
        ---------------------
      -->
      <!-- 显示按键 -->
      <div style="overflow:hidden;position:relative;margin:10px 0px;">
        <p class="buff-text">BUFF 显示</p>
        <div class="ios-toggle buff" @click="checked = !checked" :class="{checked:checked}"></div>
      </div>
      <!-- 展示栏 -->
      <div class="yourbuff-container" :class="{open:checked}">
        <!-- 种族buff -->
        <template v-for="item in raceBuffArray">
          <template v-if="item.length">
            <template v-for="obj in item">
              <div class="each-buff">
                <div class="buff-logo">
                  <img :src="`/races/${obj.logo}.png`" />
                </div>
                <p class="p-name p">{{obj.name}}</p>
                <p class="p-buff p">{{obj.buff}}</p>
              </div>
            </template>
          </template>
        </template>
        <!-- 职业buff -->
        <template v-for="item in classBuffArray">
          <template v-if="item.length">
            <template v-for="obj in item">
              <div class="each-buff">
                <div class="buff-logo">
                  <img :src="`/classes/${obj.logo}.png`" />
                </div>
                <p class="p-name p">{{obj.name}}</p>
                <p class="p-buff p">{{obj.buff}}</p>
              </div>
            </template>
          </template>
        </template>
      </div>
      <!-- 
        ---------------------
              推荐 栏
        ---------------------
      -->
      <div class="rec-container" v-if="recChessFilter.length">
        <div style="overflow:hidden;position:relative;margin:10px 0px 15px 0;">
          <p class="buff-text">详细数据</p>
          <div
            class="ios-toggle detail"
            @click="buildDetailCheckedMethod()"
            :class="{checked:buildDetailChecked}"
          ></div>
        </div>
        <template v-for="item in recChessFilter">
          <div v-for="(value, key) in item[0]" class="rec">
            <!-- key:value -->
            <!-- {卡组名:[棋子编号...]} -->
            <div class="each-rec">
              <div class="each-rec-wrapper"></div>
              <div class="rec-name">{{key}}</div>
              <div class="rec-chess brief">
                <div v-for="chessno in value" class="chess-wrapper">
                  <!-- chessno:每一个棋子编号 -->
                  <img :src="`/headpics/${chessdata[chessno].name}.jpg`" />
                  <div class="hover-details">
                    <p>{{chessdata[chessno].cnname}}</p>
                    <p>职业: {{chessdata[chessno].classes}}</p>
                    <p>种族: {{chessdata[chessno].races}}</p>
                  </div>
                </div>
              </div>
              <div class="more" v-for="(value, key) in item[1]">
                <!-- key:value -->
                <!-- {no:卡组编号} -->
                <img
                  src="/more.png"
                  @click="showDetail(value)"
                  :class="{showDetail:builds[value].detail}"
                />
              </div>
            </div>
            <template v-for="(value,key) in item[1]">
              <!-- key:value -->
              <!-- {no:卡组编号} -->
              <!-- 访问指定卡组：builds[value] -->
              <div class="each-detail" :class="{show:builds[value].detail}">
                <div class="detail-1">
                  <div class="early-build">
                    <p class="little-title">前期阵容:</p>
                    <div class="rec-chess detail">
                      <div v-for="i in builds[value].earlyBuild" class="chess-wrapper">
                        <img :src="`/headpics/${chessdata[i].name}.jpg`" />
                      </div>
                    </div>
                  </div>
                  <div class="mid-build">
                    <p class="little-title">中期阵容:</p>
                    <div class="rec-chess detail">
                      <div v-for="i in builds[value].midBuild" class="chess-wrapper">
                        <img :src="`/headpics/${chessdata[i].name}.jpg`" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="detail-2">
                  <p class="little-title">核心卡组及玩法介绍:</p>
                  <div class="core">
                    <template v-for="eachCoreBuild in builds[value].coreBuild">
                      <div class="each-core-build">
                        <div class="core-chess-img">
                          <template v-for="eachChessNo in eachCoreBuild['chess']">
                            <img :src="`/headpics/${chessdata[eachChessNo].name}.jpg`" />
                          </template>
                        </div>
                        <div class="introduction">
                          <p>{{eachCoreBuild['introduction']}}</p>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      checked: false,
      buildDetailChecked: false,
      showBuff: true
    };
  },
  computed: {
    ...mapState([
      "pickedChess",
      "raceCount",
      "classCount",
      "builds",
      "chessdata"
    ]),
    ...mapGetters([
      "recChess",
      "recChessFilter",
      "raceBuffArray",
      "classBuffArray"
    ])
  },
  methods: {
    cancelChess(chessname) {
      this.$store.commit("cancelChess", chessname);
    },
    // 切换卡组激活状态
    activeBuild(build) {
      if (build.actived) {
        build.actived = false;
      } else {
        build.actived = true;
      }
      console.log(build.actived);
    },
    showDetail(index) {
      console.log(index);
      if (this.$store.state.builds[index].detail) {
        this.$store.state.builds[index].detail = false;
      } else {
        this.$store.state.builds[index].detail = true;
      }
    },
    buildDetailCheckedMethod() {
      if (this.buildDetailChecked) {
        for (let i in this.$store.state.builds) {
          this.$store.state.builds[i].detail = false;
        }
        this.buildDetailChecked = false;
      } else {
        for (let i in this.$store.state.builds) {
          this.$store.state.builds[i].detail = true;
        }
        this.buildDetailChecked = true;
      }
    }
  }
};
</script>

<style scoped>
.recommend-container {
  z-index: 1;
  width: 60%;
  float: left;
  box-sizing: border-box;
  padding: 10px 10px 10px 20px;
}
.yourchess-container {
  margin: 10px 30px;
}
.pickedchess {
  display: flex;
  justify-content: flex-start;
  padding: 2px 5px 5px 5px;
  border: 1px solid green;
  height: 70px;
  margin: 20px 0px;
}
.pickedchess.none {
  border: 1px solid red;
}
.pickedchess div {
  cursor: pointer;
  width: 10%;
  line-height: 0;
  position: relative;
}
.pickedchess div:hover > img {
  border: 2px solid red;
}
.pickedchess img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}
p {
  margin: 0;
}
.p1 {
  text-align: left;
  color: white;
  margin: 26px 15px 10px 15px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}
.p3 {
  text-align: left;
  color: white;
  margin: 20px 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.p2 {
  color: white;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px 30px 5px 30px;
  padding: 4px 8px;
  width: 100px;
  cursor: pointer;
}

/* buff栏样式 */
.yourbuff-container {
  display: flex;
  flex-flow: column nowrap;
  padding: 0px;
  margin-bottom: 10px;
  height: 0px;
  overflow: hidden;
}
.yourbuff-container.open {
  transition: 0.3s;
  height: auto;
}
.each-buff {
  display: flex;
  height: 40px;
  margin: 3px 0px;
}
.buff-logo {
  line-height: 0;
  width: 40px;
  position: relative;
  z-index: 4;
}
.buff-logo::after {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 7px 20px black;
  z-index: 5;
}
.buff-logo img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  filter: brightness(1.3);
}
.p {
  color: white;
  text-align: left;
  display: flex;
}
.p-name {
  padding: 0 5px 0 8px;
  width: 80px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 900;
  text-shadow: 5px 7px 10px rgba(0, 0, 0, 0.521);
}
.p-buff {
  padding: 0 5px 0 12px;
  font-size: 14px;
  line-height: 30px;
  margin: 5px 0;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.builds-container {
  padding: 5px 0px;
  display: flex;
  flex-wrap: wrap;
}
.build-btn {
  box-sizing: border-box;
  margin-right: 15px;
  width: 20%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
}

.rec-container {
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.each-rec {
  display: flex;
  position: relative;

  height: 50px;
}
.each-rec-wrapper {
  height: 50px;
  width: 140px;
  overflow: hidden;
  position: absolute;
}
.each-rec-wrapper::before {
  content: "";
  height: 80px;
  width: 20px;
  position: absolute;
  top: -5px;
  left: 105px;
  transform: rotate(15deg);
  background-color: #3498db;
  z-index: 80;
}
.rec-name {
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 17%;
  text-align: left;
  padding-left: 8px;
  line-height: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  box-sizing: border-box;
  background-color: #3498db;
  z-index: 81;
}
.rec-chess {
  display: flex;
}
.brief::after {
  content: "";
  width: 8px;
  height: 50px;
  background-color: #3498db;
  position: absolute;
  top: 0px;
  right: 0px;
}
.brief {
  padding-left: 3%;
  width: 80%;
  background-color: #2980b9;
  box-shadow: inset 0 0 1px black;
}
.chess-wrapper {
  width: 40px;
  position: relative;
}
.chess-wrapper::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.349);
}
.chess-wrapper:hover > .hover-details {
  display: block;
}
.hover-details {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 45px;
  left: 5px;
  width: 100px;
  padding: 5px;
  display: none;
  z-index: 999;
}
.hover-details p {
  color: white;
  text-align: left;
  margin: 2px 0;
}
.hover-details p:nth-child(1) {
  font-size: 13px;
  font-weight: 600;
}
.hover-details p:nth-child(2),
.hover-details p:nth-child(3) {
  font-size: 10px;
  font-weight: 400;
}
.rec-chess img {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  background-color: #27ae60;
  transition: 0.3s;
  filter: brightness(0.8);
}
.btn:hover {
  filter: brightness(1);
}
.btn.active {
  background-color: #2ecc71;
  filter: brightness(1.3);
}

.ios-toggle {
  width: 40px;
  height: 23px;
  background-color: grey;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  z-index: 97;
}
.ios-toggle::after {
  content: "";
  border-radius: 50%;
  width: 45%;
  height: 0;
  padding-top: 45%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  transition: 0.3s;
  z-index: 99;
}
.ios-toggle::before {
  content: "";
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  z-index: 98;
  box-shadow: 3px 1px 10px black;
  transition: 0.3s;
}
.ios-toggle.checked::before {
  left: 20px;
  box-shadow: 0px 3px 10px black;
}
.ios-toggle.checked::after {
  left: 20px;
}
.ios-toggle.checked {
  background-color: #2ecc71;
  z-index: 97;
}
.ios-toggle.buff,
.ios-toggle.detail {
  float: left;
  margin-left: 10px;
  position: relative;
}
.buff-text {
  text-align: center;
  float: left;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}
.mychess-cost1 {
  border: 2px solid #d2d2d2;
}
.mychess-cost2 {
  border: 2px solid #b6e4ec;
}
.mychess-cost3 {
  border: 2px solid #526dec;
}
.mychess-cost4 {
  border: 2px solid #ae7ff7;
}
.mychess-cost5 {
  border: 2px solid #f29a38;
}
.chess-img {
  height: 50px;
  width: 50px;
  position: relative;
  margin-left: 30px;
  float: left;
}
.chess-img img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 3px;
  left: 0;
}
.p1 {
  float: left;
}
.top {
  overflow: hidden;
}
.more {
  position: absolute;
  right: 20px;
  top: 50%;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  opacity: 1;
  cursor: pointer;
}
.more img {
  width: 30px;
  height: 30px;
  opacity: 0.8;
  transition: 0.3s;
}
.more img:hover {
  opacity: 1;
}
.showDetail {
  transform: rotate(90deg);
}

.rec {
  margin: 10px 0;
}
.each-detail {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #297fb99d;
  z-index: 998;
  height: 0;
  transition: 0.3s;
  overflow: hidden;
}
.each-detail.show {
  height: 200px;
}

.each-detail p {
  font-size: 15px;
  font-weight: bold;
  color: #d1d8dd;
}
.little-title {
  line-height: 40px;
  margin: 0 5px;
}
.detail-1 {
  display: flex;
  margin: 10px 0;
  padding: 0 10px;
}
.early-build,
.mid-build {
  flex: 5;
  display: flex;
  height: 40px;
}
.detail-2 {
  border-top: 1px solid rgba(255, 255, 255, 0.342);
  margin: 5px 10px;
}
.detail-2 .little-title {
  line-height: 18px;
  text-align: left;
  margin: 10px 5px;
}

.core {
  display: flex;
  flex-wrap: wrap;
}
.each-core-build {
  display: flex;
  margin: 5px;
  background-color: #54a0ff;
  padding: 3px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.507);
}
.core-chess-img {
  line-height: 0;
}
.core-chess-img img {
  height: 30px;
  width: 30px;
  position: relative;
  bottom: 2px;
}
.introduction {
  margin: 0 3px;
  line-height: 30px;
}
.introduction p {
  font-size: 18px;
  color: white;
  font-weight: bold;
}
</style>