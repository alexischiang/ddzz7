<template>
  <div class="cardbuilds-container">
    <div class="top">
      <div class="chess-img">
        <img src="/cards.png" alt />
      </div>
      <p class="p1">已激活卡组:</p>
    </div>
    <div class="builds-container">
      <template v-for="build in builds">
        <div v-if="build.actived" class="build-btn">
          <div class="cancel" @click="cancelBuild(build)">x</div>
          <div class="name">{{build.name}}</div>
        </div>
      </template>
    </div>
    <p class="p3">候选卡组 :</p>
    <p>Search</p>
    <div class="rest-builds-container">
      <template v-for="build in builds">
        <div v-if="!build.actived" class="rest-build-btn" @click="pickBuild(build)">
          <div class="name">{{build.name}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
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
    // 切换卡组激活状态
    cancelBuild(build) {
      build.actived = false;
    },
    pickBuild(build) {
      build.actived = true;
    }
  }
};
</script>

<style scoped>
.cardbuilds-container {
  float: left;
  width: 20%;
  padding: 10px 10px 10px 15px;
  box-sizing: border-box;
  position: relative;
}
.cardbuilds-container::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  top: 0px;
  left: -10px;
}

p {
  text-align: left;
  margin: 10px 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}

.build-btn {
  margin: 10px 0;
  position: relative;
  background-color: #394e64;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.212);
}
.cancel {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 0;
  top: 0;
  line-height: 30px;
  color: white;
  cursor: pointer;
}
.name {
  padding-left: 10px;
  text-align: left;
  color: white;
  font-size: 15px;
  line-height: 2;
  font-weight: 600;
}
.p3 {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  margin-top: 15px;
}
.rest-build-btn {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  cursor: pointer;
  padding: 3px 10px;
  transition: 0.3s;
}

.rest-build-btn .name {
  font-weight: 300;
}
.rest-build-btn:hover {
  border: 1px solid white;
  background-color: #394e64;
  filter: brightness(1.3);
}
.chess-img {
  height: 50px;
  width: 50px;
  position: relative;
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
  text-align: left;
  color: white;
  margin: 26px 15px 15px 11px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  float: left;
}
.top {
  overflow: hidden;
}
</style>