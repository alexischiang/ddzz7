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
        <button
          @click="chooseClass('assassin')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[0]['assassin'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Assassin.png" alt />
            <p>Assassin</p>
          </div>
        </button>
        <button
          @click="chooseClass('druid')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[1]['druid'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Druid.png" alt />
            <p>Druid</p>
          </div>
        </button>
        <button
          @click="chooseClass('hunter')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[2]['hunter'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Hunter.png" alt />
            <p>Hunter</p>
          </div>
        </button>
        <button
          @click="chooseClass('knight')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[3]['knight'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Knight.png" alt />
            <p>Knight</p>
          </div>
        </button>
        <button
          @click="chooseClass('mage')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[4]['mage'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Mage.png" alt />
            <p>Mage</p>
          </div>
        </button>
        <button
          @click="chooseClass('mech')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[5]['mech'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Mech.png" alt />
            <p>Mech</p>
          </div>
        </button>
        <button
          @click="chooseClass('shaman')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[6]['shaman'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Shaman.png" alt />
            <p>Shaman</p>
          </div>
        </button>
        <button
          @click="chooseClass('warlock')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[7]['warlock'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Warlock.png" alt />
            <p>Warlock</p>
          </div>
        </button>
        <button
          @click="chooseClass('warrior')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[8]['warrior'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Warrior.png" alt />
            <p>Warrior</p>
          </div>
        </button>
        <button
          @click="chooseClass('witcher')"
          class="btn class-btn"
          v-bind:class="{ active:isActiveClass[9]['witcher'] }"
        >
          <div class="btn-wrapper class-wrapper">
            <img src="../data/classes/Witcher.png" alt />
            <p>Witcher</p>
          </div>
        </button>
      </div>
    </div>
    <div class="data-table">
      <div class="row table-head">
        <div class="data-block head-data">Champion</div>
        <div class="data-block head-data">Cost</div>
        <div class="data-block head-data">Race</div>
        <div class="data-block head-data">Class</div>
        <div class="data-block head-data">Armor</div>
        <div class="data-block head-data">MR</div>
        <div class="data-block head-data">Damage</div>
        <div class="data-block head-data">Health</div>
        <div class="data-block head-data">Range</div>
      </div>
      <div v-for="(value,key) in chessdata" class="row table-body">
        <div class="data-block body-data">
          <img :src="`/headpics/${key}.jpg`" />
          <p>{{ key }}</p>
        </div>
        <div class="data-block body-data">{{ value.cost}}</div>
        <div class="data-block body-data">{{ value.races}}</div>
        <div class="data-block body-data">{{ value.classes}}</div>
        <div class="data-block body-data">{{ value.armor}}</div>
        <div class="data-block body-data">{{ value.mr}}</div>
        <div class="data-block body-data">{{ value.lv1.dmg}}</div>
        <div class="data-block body-data">{{ value.lv1.hp}}</div>
        <div class="data-block body-data">{{ value.range}}</div>
      </div>
    </div>
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
      ],
      isActiveClass: [
        { assassin: false },
        { druid: false },
        { hunter: false },
        { knight: false },
        { mage: false },
        { mech: false },
        { shaman: false },
        { warlock: false },
        { warrior: false },
        { witcher: false },
        { none: true }
      ]
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
  },
  methods: {
    chooseRace(race) {
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
    },
    chooseClass(theclass) {
      for (var i = 0; i < 10; i++) {
        for (var key in this.isActiveClass[i]) {
          if (key == theclass) {
            this.isActiveClass[i][key] = !this.isActiveClass[i][key];
            this.isActiveClass[10]["none"] = !this.isActiveClass[10]["none"];
          } else {
            this.isActiveClass[i][key] = false;
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

/* Filter Part BEGIN */
.divider {
  width: 100%;
  height: 43px;
  font-family: sofia-pro;
  color: white;
  font-size: 27px;
  margin: 0 10px 0 10px;
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

/* for each Filter Button */
.btn {
  appearance: none;
  text-decoration: none;
  font-family: sofia-pro;
  font-size: 15px;
  color: white;
  width: 80px;
  height: 80px;
  margin: 10px 11.2px;
  padding: 4px;
  background-color: rgba(125, 136, 199, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 3px black;
  cursor: pointer;
  transition: 0.3s;
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
/* Filter Part END */

/* Data Part BEGIN */
.data-table {
  margin-left: 10px;
  margin-right: 10px;
}

/* 每一行 整体样式 */
.row {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 10px;
}

/* 表头行整体样式 */
.table-head {
  height: 50px;
}

/* 表身每行整体样式 */
.table-body {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* 每一行 中 每一块样式 */
.data-block {
  width: 10%;
  color: rgba(255, 255, 255, 0.644);
  font-weight: bold;
  display: flex;
  overflow: hidden;
  justify-content: left;
  align-items: center;
}

/* 棋子头像+名字 第一块样式*/
.data-block:first-child {
  flex: 2;
  padding: 0 0 0 10px;
}

/* 棋子头像 样式 */
.body-data img {
  position: relative;
  left: -2px;
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

/* Data Part END */
</style>