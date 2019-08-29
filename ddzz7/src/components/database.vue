<template>
  <div class="db-container">
    <!-- 过滤器部分 -->
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
          @click="chooseRace('god')"
          class="btn race-btn"
          v-bind:class="{ active:isActiveRace[3]['god'] }"
        >
          <div class="btn-wrapper race-wrapper">
            <img src="../data/races/divinity.png" alt />
            <p>God</p>
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
    <!-- 数据表部分 -->
    <div class="data-table">
      <!-- 表头 -->
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
      <!-- 表身 -->
      <!-- 
        添加棋子方法：
        1.在chessdata.json中按格式加入数据
        2.在public/headpics/中放入新棋子头像 名字需与json中key值一样
      -->
      <div v-for="obj  in ClassRacefilteredArray">
        <div v-for="(value,key) in obj" :key="key" class="row table-body">
          <!-- 头像+名字 -->
          <div class="data-block body-data" v-bind:class="`cost${chessdata[key].cost}`">
            <img :src="`/headpics/${key}.jpg`" />
            <p>{{ key }}</p>
          </div>
          <!-- 费用 -->
          <div class="data-block body-data">
            {{ chessdata[key].cost}}
            <img src="/cost.jpg" />
          </div>
          <!-- 种族 -->
          <div
            v-if="chessdata[key]['2races']"
            class="data-block body-data"
            v-bind:class="`block-bg ${chessdata[key]['races']}N${chessdata[key]['2races']}`"
          >{{ chessdata[key].races}}/{{chessdata[key]['2races']}}</div>
          <div
            v-else
            class="data-block body-data"
            v-bind:class="`block-bg ${chessdata[key]['races']}N${chessdata[key]['2races']}`"
          >{{ chessdata[key].races}}</div>
          <!-- 职业 -->
          <div
            class="data-block body-data"
            v-bind:class="`block-bg ${chessdata[key].classes}`"
          >{{ chessdata[key].classes}}</div>
          <!-- 护甲 -->
          <div class="data-block body-data">{{ chessdata[key].armor}}</div>
          <!-- 魔抗 -->
          <div class="data-block body-data">{{ chessdata[key].mr}}</div>
          <!-- lv1伤害 -->
          <div class="data-block body-data">{{ chessdata[key].lv1.dmg}}</div>
          <!-- lv1血量 -->
          <div class="data-block body-data">{{ chessdata[key].lv1.hp}}</div>
          <!-- 射程 -->
          <div class="data-block body-data">{{ chessdata[key].range}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chessdatajson from "../data/chessdata.json";
import { race } from "q";
export default {
  data() {
    return {
      chessdata: chessdatajson,
      isActiveRace: [
        { beast: false },
        { caveclan: false },
        { demon: false },
        { god: false },
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
    // 暂时无用
    // urls: function() {
    //   let urlarray = [];
    //   for (let key in this.chessdata) {
    //     urlarray.push(`/headpics/${key}.jpg`);
    //   }
    //   return urlarray;
    // },

    // 返回数组 [{棋子名字:{种族:xx,职业:xx}},...]
    // 为筛选器做输入数组因为需要使用filter方法
    chessArray: function() {
      let myArray = [];
      for (let key in this.chessdata) {
        const temp = {};
        let race = "";
        if (this.chessdata[key].races == "Glacier Clan") {
          race = "Glacier";
        } else if (this.chessdata[key].races == "Cave Clan") {
          race = "caveclan";
        } else {
          race = this.chessdata[key].races;
        }
        temp[key] = {
          races: race,
          "2races": this.chessdata[key]["2races"],
          classes: this.chessdata[key].classes
          // cnname: this.chessdata[key]["cnname"],
          // cost: this.this.chessdata[key]["cost"]
          // armor: this.chessdata[key]["armor"],
          // mr: this.chessdata[key].mr
          // dmg: this.chessdata[key]["lv1"].dmg,
          // hp: this.this.chessdata[key]["lv1"].hp
        };
        myArray.push(temp);
      }
      return myArray;
    },
    // 逻辑解释：
    // 1.R -> C：先筛选R （过滤） 变换被CR监听 再选C (过滤)
    // 2.C -> R: 先筛选C (过滤) 没有被R监听 再选R （过滤） 变换被CR监听 （过滤）
    RacefilteredArray: function() {
      if (this.isActiveRace[14]["none"]) {
        console.log("all");
        return this.chessArray;
      } else {
        console.log("race-filter");
        return this.chessArray.filter(a => {
          for (let key in a) {
            for (let i = 0; i < 14; i++) {
              if (
                this.isActiveRace[i][a[key].races.toLowerCase()] ||
                this.isActiveRace[i][a[key]["2races"].toLowerCase()]
              ) {
                return true;
              }
            }
          }
          return false;
        });
      }
    },
    ClassRacefilteredArray: function() {
      if (this.isActiveClass[10]["none"]) {
        console.log("all");
        return this.RacefilteredArray;
      } else {
        console.log("race-class-filter");
        return this.RacefilteredArray.filter(a => {
          for (let key in a) {
            for (let i = 0; i < 10; i++) {
              if (this.isActiveClass[i][a[key].classes.toLowerCase()]) {
                return true;
              }
            }
          }
          return false;
        });
      }
    }
  },
  methods: {
    chooseRace(race) {
      for (let i = 0; i < 14; i++) {
        for (let key in this.isActiveRace[i]) {
          if (key == race) {
            if (this.isActiveRace[i][key]) {
              this.isActiveRace[i][key] = false;
              this.isActiveRace[14]["none"] = true;
            } else {
              this.isActiveRace[i][key] = true;
              this.isActiveRace[14]["none"] = false;
            }
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
            if (this.isActiveClass[i][key]) {
              this.isActiveClass[i][key] = false;
              this.isActiveClass[10]["none"] = true;
            } else {
              this.isActiveClass[i][key] = true;
              this.isActiveClass[10]["none"] = false;
            }
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

/* 
tips:
每一块
{
  包含表头的所有块: data-block
  表头: head-data
  不含表头: body-data
}
每一行
{
  包含表头的所有行: row
  表头: table-head
  不含表头: table-body
}
 */
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
  position: relative;
}

/* 棋子头像+名字 (含表头) 第一块样式*/
.data-block:first-child {
  flex: 2;
  padding: 0 0 0 10px;
}
/* 棋子头像+名字 第一块样式*/
.data-block.body-data:first-child {
  font-size: 14px;
}
/* 名字根据费用变色 */
.cost1 {
  color: #d2d2d2;
}
.cost2 {
  color: #b6e4ec;
}
.cost3 {
  color: #526dec;
}
.cost4 {
  color: #ae7ff7;
}
.cost5 {
  color: #f29a38;
}

/* 棋子头像 样式 */
.body-data:nth-child(1) img {
  position: relative;
  left: -2px;
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
/* cost图片 样式 */
.body-data:nth-child(2) img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}
/* 第三块 race (含表头) 样式 */
.data-block:nth-child(3) {
  flex: 2;
}

/* 第三+四块 class+race (不含表头) 样式 */
.body-data:nth-child(4),
.body-data:nth-child(3) {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  z-index: 1;
}
/* 种族/职业 块背景通用样式 */
.block-bg::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 30px;
  width: 100px;
  height: 40px;
  z-index: -1;
  opacity: 0.7;
}
/* 职业 块背景图 */
.Witcher::after {
  /* class-block-bg */
  background: url("../data/classes/bg-witcher.png") no-repeat;
  background-size: cover;
}
.Assassin::after {
  /* class-block-bg */
  background: url("../data/classes/bg-assassin.png") no-repeat;
  background-size: cover;
}
.Druid::after {
  /* class-block-bg */
  background: url("../data/classes/bg-druid.png") no-repeat;
  background-size: cover;
}
.Hunter::after {
  /* class-block-bg */
  background: url("../data/classes/bg-hunter.png") no-repeat;
  background-size: cover;
}
.Knight::after {
  /* class-block-bg */
  background: url("../data/classes/bg-knight.png") no-repeat;
  background-size: cover;
}
.Mage::after {
  /* class-block-bg */
  background: url("../data/classes/bg-mage.png") no-repeat;
  background-size: cover;
}
.Mech::after {
  /* class-block-bg */
  background: url("../data/classes/bg-mech.png") no-repeat;
  background-size: cover;
}
.Shaman::after {
  /* class-block-bg */
  background: url("../data/classes/bg-shaman.png") no-repeat;
  background-size: cover;
}
.Warlock::after {
  /* class-block-bg */
  background: url("../data/classes/bg-warlock.png") no-repeat;
  background-size: cover;
}
.Warrior::after {
  /* class-block-bg */
  background: url("../data/classes/bg-warrior.png") no-repeat;
  background-size: cover;
}

/* 种族 块背景图 */
.BeastN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-beast.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.Cave::after {
  /* race-block-bg */
  background: url("/races-bg/bg-caveclan.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.DemonN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-demon.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.GodN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-divinity.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.BeastN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-beast.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.DragonN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-dragon.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.DwarfN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-dwarf.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.EgersisN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-egersis.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.FeatheredN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-feathered.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.Glacier::after {
  /* race-block-bg */
  background: url("/races-bg/bg-glacier.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.GoblinN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-goblin.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.HumanN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-human.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.KiraN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-kira.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.MarineN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-marine.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.SpiritN::after {
  /* race-block-bg */
  background: url("/races-bg/bg-spirit.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.HumanNDragon::after {
  /* race-block-bg */
  background: url("/races-bg/bg-human-dragon.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.FeatheredNDragon::after {
  /* race-block-bg */
  background: url("/races-bg/bg-feathered-dragon.png") no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.BeastNHuman::after {
  /* race-block-bg */
  background: url("/races-bg/bg-human-beast.png") no-repeat;
  background-size: cover;
  opacity: 0.7;
}

/* Data Part END */
</style>