<template>
  <div class="recommend-container">
    <p class="p1">您的阵容 (最多10人口) :</p>
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
      <div style="overflow:hidden;position:relative;margin:10px 0px;">
        <p class="buff-text">BUFF 显示</p>
        <div class="ios-toggle buff" @click="checked = !checked" :class="{checked:checked}"></div>
      </div>
      <div class="yourbuff-container" v-show="checked">
        <template v-for="item in raceBuffArray">
          <template v-if="item.length">
            <template v-for="obj in item">
              <div class="each-buff">
                <div class="buff-logo">
                  <img :src="`/races/${obj.logo}.png`" />
                </div>
                <div class="p">
                  <p class="p-name">{{obj.name}}</p>
                  <p class="p-buff">{{obj.buff}}</p>
                </div>
              </div>
            </template>
          </template>
        </template>
      </div>
      <p class="p3">选择您的卡组 :</p>
      <div class="builds-container">
        <template v-for="build in builds">
          <div
            @click="activeBuild(build)"
            class="build-btn btn"
            :class="{active:build.actived}"
            style="cursor:pointer"
          >
            <div>{{build.name}}</div>
          </div>
        </template>
      </div>
      <div v-if="recChessFilter.length">
        <template v-for="item in recChessFilter">
          <div class="each-rec" v-for="(value, key) in item">
            <div class="each-rec-wrapper"></div>
            <div class="rec-name">{{key}}</div>
            <div class="rec-chess">
              <div v-for="chessno in value" class="chess-wrapper">
                <img :src="`/headpics/${chessdata[chessno].name}.jpg`" />
                <div class="hover-details">
                  <p>{{chessdata[chessno].cnname}}</p>
                  <p>职业: {{chessdata[chessno].classes}}</p>
                  <p>种族: {{chessdata[chessno].races}}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { print } from "graphql";
export default {
  data() {
    return {
      checked: false,
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
    }
  }
};
</script>

<style scoped>
.recommend-container {
  z-index: 1;
  width: 67%;
  float: left;
  box-sizing: border-box;
  padding: 10px 40px 40px 20px;
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
.pickedchess img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.yourbuff-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: space-between;
}
.each-buff {
  width: 48%;
  display: flex;
  height: 80px;
  margin: 5px 1%;
}
p {
  margin: 0;
}
.p1 {
  text-align: left;
  color: white;
  margin: 10px 30px;
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
.buff-logo {
  line-height: 0;
  width: 80px;
  background-color: #2980b9;
  position: relative;
  z-index: 4;
}
.buff-logo::after {
  content: "";
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 7px 20px black;
  z-index: 5;
}
.buff-logo img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
}
.p {
  flex: 7;
  padding: 0 15px;
  background: #3498db;
  overflow: hidden;
  color: white;
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.p-name {
  font-size: 20px;
  font-weight: 900;
}
.p-buff {
  font-size: 10px;
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

.each-rec {
  margin: 10px 0;
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
  padding-left: 3%;
  width: 80%;
  display: flex;
  background-color: #2980b9;
}
.rec-chess::after {
  content: "";
  width: 8px;
  height: 50px;
  background-color: #3498db;
  position: absolute;
  top: 0px;
  right: 0px;
}
.chess-wrapper {
  width: 40px;
  position: relative;
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
.ios-toggle.buff {
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
  border: 1px solid #d2d2d2;
}
.mychess-cost2 {
  border: 1px solid #b6e4ec;
}
.mychess-cost3 {
  border: 1px solid #526dec;
}
.mychess-cost4 {
  border: 1px solid #ae7ff7;
}
.mychess-cost5 {
  border: 1px solid #f29a38;
}
</style>