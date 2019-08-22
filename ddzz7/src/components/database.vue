<template>
  <div class="db-container">
    <div class="filter">
      <div class="races-filter">
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/beast.png" alt />
            <p>Beast</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/caveclan.png" alt />
            <p>CaveClan</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/demon.png" alt />
            <p>Demon</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/divinity.png" alt />
            <p>Divinity</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/dragon.png" alt />
            <p>Dragon</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/dwarf.png" alt />
            <p>Dwarf</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/egersis.png" alt />
            <p>Egersis</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/feathered.png" alt />
            <p>Feathered</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/glacier.png" alt />
            <p>Glacier</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/goblin.png" alt />
            <p>Goblin</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/human.png" alt />
            <p>Human</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/kira.png" alt />
            <p>Kira</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/marin.png" alt />
            <p>Marine</p>
          </div>
        </router-link>
        <router-link to>
          <div class="race-wrapper">
            <img src="../data/races/spirit.png" alt />
            <p>Spirit</p>
          </div>
        </router-link>
      </div>
      <div class="classes-filter"></div>
    </div>
    <div class="data"></div>
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
.db-container {
  padding: 0;
  margin: 0 auto 0;
  width: 90%;
}
.races-filter {
  display: flex;
  justify-content: flex-start;
}
.races-filter a {
  text-decoration: none;
  color: white;
  width: 6%;
  margin: 5px auto;
  padding: 4px;
  background-color: #000;
}
.race-wrapper img {
  width: 40px;
  position: relative;
  top: 4px;
}
.race-wrapper p {
  padding: 0;
  margin: 0;
}
</style>