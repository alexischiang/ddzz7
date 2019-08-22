<template>
  <div>
    this is data base!
    <p>{{chessdata.AbyssalCrawler.cnname}}</p>
  </div>
</template>

<script>
import chessdatajson from "../data/chessdata.json";
export default {
  data() {
    return {
      chessdata: chessdatajson
    };
  }
};
</script>

<style scoped>
</style>