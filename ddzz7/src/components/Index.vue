<template>
  <div class="index">
    <img src="../assets/autochesslogo.png" alt="the logo" />
    <h1>Teambuilder for Auto Chess Mobile.</h1>
    <h2>build your strongest team with DDZZ7 and win!</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: sofia-pro;
  src: url(../assets/sofiapro-light.otf);
}
.index {
  margin: 0;
  padding: 0;
  height: 720px;
  width: 100%;
  background: url("../assets/ddzz73.jpg") no-repeat;
  background-size: cover;
  font-family: sofia-pro;
  color: white;
}
.index::after {
  content: "";
  position: absolute;
  top: 61px;
  left: 0;
  width: 100%;
  height: 720px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 20px 50px #000;
}
.index img {
  z-index: 100;
  position: relative;
  width: 300px;
  margin: 0 auto 0;
  top: 170px;
}
.index h1 {
  z-index: 100;
  position: relative;
  margin: 0 auto 0;
  top: 200px;
  font-size: 55px;
  font-weight: 800;
}
.index h2 {
  position: relative;
  z-index: 100;
  font-weight: 50;
  font-size: 30px;
  top: 190px;
  color: #f5f5f5;
}
</style>