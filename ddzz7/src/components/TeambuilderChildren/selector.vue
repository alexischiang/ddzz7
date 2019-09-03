<template>
  <div class="selector-container">
    <div class="title">在这边选择您的棋子</div>
    <div class="filter">
      <div class="races-filter">
        <p>种族过滤器</p>
        <div class="race-btn-container">
          <button
            @click="chooseRace('beast')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[0]['beast'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/beast.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('caveclan')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[1]['caveclan'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/caveclan.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('demon')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[2]['demon'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/demon.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('god')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[3]['god'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/divinity.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('dragon')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[4]['dragon'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/dragon.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('dwarf')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[5]['dwarf'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/dwarf.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('egersis')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[6]['egersis'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/egersis.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('feathered')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[7]['feathered'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/feathered.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('glacier')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[8]['glacier'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/glacier.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('goblin')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[9]['goblin'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/goblin.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('human')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[10]['human'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/human.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('kira')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[11]['kira'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/kira.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('marine')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[12]['marine'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/marin.png" alt />
            </div>
          </button>
          <button
            @click="chooseRace('spirit')"
            class="btn race-btn"
            v-bind:class="{ active:isActiveRace[13]['spirit'] }"
          >
            <div class="btn-wrapper race-wrapper">
              <img src="../../data/races/spirit.png" alt />
            </div>
          </button>
        </div>
      </div>
      <div class="class-filter" style="margin-left:8px">
        <p>职业过滤器</p>
        <div class="class-btn-container">
          <button
            @click="chooseClass('assassin')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[0]['assassin'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Assassin.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('druid')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[1]['druid'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Druid.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('hunter')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[2]['hunter'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Hunter.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('knight')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[3]['knight'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Knight.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('mage')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[4]['mage'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Mage.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('mech')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[5]['mech'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Mech.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('shaman')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[6]['shaman'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Shaman.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('warlock')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[7]['warlock'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Warlock.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('warrior')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[8]['warrior'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Warrior.png" alt />
            </div>
          </button>
          <button
            @click="chooseClass('witcher')"
            class="btn class-btn"
            v-bind:class="{ active:isActiveClass[9]['witcher'] }"
          >
            <div class="btn-wrapper class-wrapper">
              <img src="../../data/classes/Witcher.png" alt />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="search"></div>
    <div class="form">
      <div class="data-table">
        <!-- 表头 暂不需要 -->
        <!-- <div class="row table-head">
            <div class="data-block head-data">Champion</div>
            <div class="data-block head-data">Name</div>
            <div class="data-block head-data">Cost</div>
        </div>-->
        <!-- 表身 -->
        <div v-for="obj in ClassRacefilteredArray" class="outside-forloop">
          <div v-for="(value,key) in obj" :key="key" class="row table-body">
            <!-- 头像 -->
            <div class="data-block body-data pic-block">
              <img :src="`/headpics/${key}.jpg`" />
            </div>
            <!-- 名字 -->
            <div
              v-bind:class="`cost${chessdata[key].cost}`"
              class="data-block body-data name-block"
            >{{ chessdata[key].cnname}}</div>
            <!-- 费用 -->
            <div class="data-block body-data cost-block">
              <p>{{ chessdata[key].cost}}</p>
              <img src="/cost.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chessdatajson from "../../data/chessdata.json";
export default {
  data() {
    return {
      chessdata: chessdatajson
    };
  },
  computed: {
    isActiveRace() {
      return this.$store.state.isActiveRace;
    },
    isActiveClass() {
      return this.$store.state.isActiveClass;
    },
    chessArray() {
      return this.$store.getters.chessArray;
    },
    ClassRacefilteredArray() {
      return this.$store.getters.ClassRacefilteredArray;
    },
    RacefilteredArray() {
      return this.$store.getters.RacefilteredArray;
    }
  },
  methods: {
    chooseRace(race) {
      this.$store.commit("chooseRace", race);
    },
    chooseClass(theclass) {
      this.$store.commit("chooseClass", theclass);
    }
  }
};
</script>

<style scoped>
.selector-container {
  box-sizing: border-box;
  padding: 40px 50px;
  position: relative;
  width: 40%;
  height: 500px;
  background: black;
}
.title {
  margin: 10px 0;
  text-align: left;
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 1;
}
p {
  margin: 0;
  padding: 0;
}
.filter {
  overflow: hidden;
  width: 500px;
}
.races-filter,
.class-filter {
  float: left;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.race-btn-container {
  width: 270px;
  margin: 10px 0 10px -5px;
}
.class-btn-container {
  width: 200px;
  margin: 10px 0 10px -10px;
}
.races-filter p,
.class-filter p {
  margin: 10px 0;
  text-align: left;
  font-size: 20px;
  color: wheat;
  border: 1px solid wheat;
  padding: 2px 4px;
  display: inline-block;
}

.btn {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0;
  filter: grayscale(0.7) brightness(0.5);
  transition: 0.3s;
}
.btn:hover {
  filter: grayscale(0) brightness(1);
}
.selector-container .active {
  filter: grayscale(0) brightness(1.5);
}
.race-btn,
.class-btn {
  padding: 0;
  margin-right: 5px;
}

/* 表格 */
.data-table {
  display: flex;
  flex-flow: column nowrap;
}
.row {
  background-color: darkgreen;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.3s;
}
.row:hover {
  border: 1px solid #55efc4;
  background-color: rgb(1, 141, 1);
  filter: brightness(1.3);
}
.data-block {
  height: 50px;
}
.pic-block {
  width: 80px;
}
.pic-block img {
  width: 45px;
  height: 45px;
}
.name-block {
  width: 100px;
  color: white;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.cost-block {
  width: 80px;
  display: flex;
}
.cost-block p {
  width: 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.cost-block img {
  width: 20px;
  height: 20px;
  position: relative;
  top: 15px;
  left: -5px;
}
</style>