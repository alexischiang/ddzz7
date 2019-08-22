<template>
  <div class="db-container">
    <div class="filter">
      <div class="divider race-divider">
        <p>Races Filter</p>
      </div>
      <div class="races-filter">
        <button
          @click="chooseRace('beast')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[0]['beast'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/beast.png" alt />
            <p>Beast</p>
          </div>
        </button>
        <button
          @click="chooseRace('caveclan')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[1]['caveclan'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/caveclan.png" alt />
            <p>CaveClan</p>
          </div>
        </button>
        <button
          @click="chooseRace('demon')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[2]['demon'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/demon.png" alt />
            <p>Demon</p>
          </div>
        </button>
        <button
          @click="chooseRace('divinity')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[3]['divinity'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/divinity.png" alt />
            <p>Divinity</p>
          </div>
        </button>
        <button
          @click="chooseRace('dragon')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[4]['dragon'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/dragon.png" alt />
            <p>Dragon</p>
          </div>
        </button>
        <button
          @click="chooseRace('dwarf')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[5]['dwarf'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/dwarf.png" alt />
            <p>Dwarf</p>
          </div>
        </button>
        <button
          @click="chooseRace('egersis')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[6]['egersis'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/egersis.png" alt />
            <p>Egersis</p>
          </div>
        </button>
        <button
          @click="chooseRace('feathered')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[7]['feathered'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/feathered.png" alt />
            <p>Feathered</p>
          </div>
        </button>
        <button
          @click="chooseRace('glacier')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[8]['glacier'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/glacier.png" alt />
            <p>Glacier</p>
          </div>
        </button>
        <button
          @click="chooseRace('goblin')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[9]['goblin'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/goblin.png" alt />
            <p>Goblin</p>
          </div>
        </button>
        <button
          @click="chooseRace('human')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[10]['human'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/human.png" alt />
            <p>Human</p>
          </div>
        </button>
        <button
          @click="chooseRace('kira')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[11]['kira'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/kira.png" alt />
            <p>Kira</p>
          </div>
        </button>
        <button
          @click="chooseRace('marine')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[12]['marine'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/marin.png" alt />
            <p>Marine</p>
          </div>
        </button>
        <button
          @click="chooseRace('spirit')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[13]['spirit'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/spirit.png" alt />
            <p>Spirit</p>
          </div>
        </button>
      </div>
      <div class="divider class-divider">
        <p>Classes Filter</p>
      </div>
      <div class="classes-filter">
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Assassin.png" alt />
            <p>Assassin</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Druid.png" alt />
            <p>Druid</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Hunter.png" alt />
            <p>Hunter</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Knight.png" alt />
            <p>Knight</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Mage.png" alt />
            <p>Mage</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Mech.png" alt />
            <p>Mech</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Shaman.png" alt />
            <p>Shaman</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Warlock.png" alt />
            <p>Warlock</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Warrior.png" alt />
            <p>Warrior</p>
          </div>
        </button>
        <button @click="chooseRace" class="btn race-btn">
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Witcher.png" alt />
            <p>Witcher</p>
          </div>
        </button>
      </div>
    </div>
    <div class="data"></div>
  </div>
</template>

<script>
import chessdatajson from "../data/chessdata.json";
export default {
  data() {
    return {
      chessdata: chessdatajson,
      isActiveRace: [
        { beast: false },
        { caveclan: false },
        { demon: false },
        { divinity: false },
        { dragon: false },
        { dwarf: false },
        { egersis: false },
        { feathered: false },
        { glacier: false },
        { goblin: false },
        { human: false },
        { kira: false },
        { marine: false },
        { spirit: false },
        { none: true }
      ]
    };
  },
  methods: {
    chooseRace(race) {
      let flag = 0;
      for (var i = 0; i < 14; i++) {
        for (var key in this.isActiveRace[i]) {
          if (key == race) {
            this.isActiveRace[i][key] = !this.isActiveRace[i][key];
            this.isActiveRace[14]["none"] = !this.isActiveRace[14]["none"];
          } else {
            this.isActiveRace[i][key] = false;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.db-container {
  padding: 0;
  margin: 0 auto 0;
  width: 80%;
}
.divider {
  width: 100%;
  height: 43px;
  font-family: sofia-pro;
  color: white;
  font-size: 27px;
  margin: 0 0 0 10px;
  padding-top: 20px;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.divider p {
  margin: 0;
}

.race-divider::after {
  content: "";
  width: 138px;
  height: 4px;
  background-color: #fff;
  position: absolute;
  top: 120px;
}
.class-divider::after {
  content: "";
  width: 158px;
  height: 4px;
  background-color: #fff;
  position: absolute;
  top: 404px;
}
.races-filter,
.classes-filter {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.btn {
  appearance: none;
  text-decoration: none;
  font-family: sofia-pro;
  font-size: 15px;
  color: white;
  width: 80px;
  height: 80px;
  margin: 10px 10px;
  padding: 4px;
  background-color: rgba(125, 136, 199, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 3px black;
  cursor: pointer;
  transition: 0.5s;
}

.filter .active {
  border: 2px solid greenyellow;
  background-color: rgba(88, 96, 143, 0.5);
  box-shadow: inset 0 0 2px black;
}
.btn-wrapper img {
  width: 40px;
  position: relative;
  top: 0;
}
.btn-wrapper p {
  padding: 0;
  margin: 0;
}
</style>