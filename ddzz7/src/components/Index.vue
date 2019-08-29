<template>
  <div>
    <div class="index-container">
      <img src="../assets/autochesslogo.png" alt="the logo" />
      <h1>Teambuilder for Auto Chess Mobile.</h1>
      <h2>build your strongest team with DDZZ7 and win!</h2>
      <button class="btn btn1" @click="goTeambuilder">BUILD RIGHTNOW</button>
      <button class="btn btn2" @click="goDatabase">CHECK DATABASE</button>
    </div>
    <indexArticle />
  </div>
</template>

<script>
import indexArticle from "./Index-article";
export default {
  components: {
    indexArticle
  },
  methods: {
    goTeambuilder() {
      this.$router.push("/teambuilder");
    },
    goDatabase() {
      this.$router.push("/database");
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: sofia-pro;
  src: url(../assets/sofiapro-light.otf);
}
.index-container {
  z-index: 9999;
  margin: 0;
  padding: 0;
  height: 720px;
  width: 100%;
  background: url("../assets/ddzz73.jpg") no-repeat;
  background-size: cover;
  font-family: sofia-pro;
  color: white;
}
.index-container::after {
  content: "";
  position: absolute;
  top: 61px;
  left: 0;
  width: 100%;
  height: 720px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 20px 50px #000, 0 0 50px black;
}
.index-container img {
  z-index: 100;
  position: relative;
  width: 300px;
  margin: 0 auto 0;
  top: 170px;
}
.index-container h1 {
  z-index: 100;
  position: relative;
  margin: 0 auto 0;
  top: 200px;
  font-size: 55px;
  font-weight: 800;
}
.index-container h2 {
  position: relative;
  z-index: 100;
  font-weight: 50;
  font-size: 30px;
  top: 190px;
  color: #f5f5f5;
}
.btn {
  cursor: pointer;
  appearance: none;
  background-color: rgba(58, 75, 172, 0.85);
  color: white;
  position: relative;
  z-index: 100;
}

.btn1,
.btn2 {
  border: 2px solid white;
  top: 200px;
  width: 300px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.4s;
  margin: 0 20px 0;
}
.btn1:hover,
.btn2:hover {
  background-color: #536dfe;
  box-shadow: 0 0 20px black;
}
</style>