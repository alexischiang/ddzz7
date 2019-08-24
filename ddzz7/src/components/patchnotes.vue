<template>
  <div>
    <div v-for=" url in urls">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
import chessdatajson from "../data/chessdata.json";
import { type } from "os";
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