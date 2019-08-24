<template>
  <div></div>
</template>

<script>
import chessdatajson from "../data/chessdata.json";
export default {
  data() {
    return {
      chessdata: chessdatajson
    };
  },
  computed: {
    urls: function() {
      let urlarray = [];
      for (var key in this.chessdata) {
        urlarray.push(`/headpics/${key}.jpg`);
      }
      return urlarray;
    }
  }
};
</script>

<style scoped>
</style>