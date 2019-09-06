<template>
  <div class="recommend-container">
    <p>您已经选择的棋子:</p>
    <div class="yourchess-container">
      <div class="pickedchess">
        <div
          v-for="(item, index) in pickedChess"
          :key="index"
          @click="cancelChess(`${item.cnname}`)"
        >
          <img :src="`/headpics/${item.name}.jpg`" />
        </div>
      </div>
    </div>
    <p>您已经获得的BUFF:</p>
    <div class="yourbuff-container">
      <template v-for="item in raceBuffArray">
        <template v-if="item.length">
          <template v-for="obj in item">
            <div class="each-buff">
              <p class="p-name">{{obj.name}}</p>
              <p class="p-buff">{{obj.buff}}</p>
            </div>
          </template>
        </template>
      </template>
    </div>
    <p>在这选择您的卡组:</p>
    <div class="builds-container">
      <template v-for="build in builds">
        <div
          @click="activeBuild(build)"
          class="build-btn"
          :class="{active:build.actived}"
          style="cursor:pointer"
        >
          <div>{{build.name}}</div>
        </div>
      </template>
    </div>
    <p>推荐棋子:</p>
    <div v-if="recChessFilter.length">
      <template v-for="(item, index) in recChessFilter">
        <div class="each-rec" v-for="(value, key) in item">
          <div class="rec-name">{{key}}</div>
          <div class="rec-chess">
            <div v-for="chess in value">
              <img :src="`/headpics/${chess}.jpg`" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { print } from "graphql";
export default {
  computed: {
    ...mapState(["pickedChess", "raceCount", "classCount", "builds"]),
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
  width: 60%;
  height: 500px;
  float: left;
  background: white;
}
.pickedchess {
  display: flex;
  justify-content: flex-start;
}
.pickedchess div {
  cursor: pointer;
  width: 10%;
  line-height: 0;
}
.yourbuff-container {
  display: flex;
  flex-wrap: wrap;
}
.each-buff {
  width: 50%;
  display: flex;
}
p {
  margin: 0;
}
.p-name {
  flex: 3;
}
.p-buff {
  flex: 7;
  text-align: left;
}
.builds-container {
  display: flex;
  flex-wrap: wrap;
}
.build-btn {
  box-sizing: border-box;
  margin: 5px 15px;
  width: 20%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background: green;
  transition: 0.3s;
}
.active {
  background: lawngreen;
}
.each-rec {
  border: 1px solid black;
  margin: 5px auto;
  width: 90%;
  display: flex;
}
.rec-name {
  width: 20%;
}
.rec-chess {
  width: 80%;
  display: flex;
}
.rec-chess div {
  width: 10%;
}
</style>