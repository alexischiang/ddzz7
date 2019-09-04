<template>
  <div class="recommend-container">
    <div class="yourchess-container">
      <p>您已经选择的棋子:</p>
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
    <p>{{raceCount}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    recChess() {
      return this.$store.getters.recChess;
    },
    recChessFilter() {
      return this.$store.getters.recChessFilter;
    },
    pickedChess() {
      return this.$store.state.pickedChess;
    },
    raceCount() {
      return this.$store.state.raceCount;
    }
  },
  methods: {
    cancelChess(chessname) {
      this.$store.commit("cancelChess", chessname);
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
</style>