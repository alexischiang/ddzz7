<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <div class="navbarleft">
          <router-link to="/">
            <img src="../assets/logo-white.png" />
          </router-link>
        </div>
        <ul class="nav-links">
          <li>
            <router-link class="nav-link" to="/teambuilder">TeamBuilder</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/database">Database</router-link>
          </li>
          <li>
            <router-link class="nav-link society" to="/society">Society</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/patchnotes">Patch Notes</router-link>
          </li>
        </ul>
      </div>
    </header>
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
.container {
  padding: 0;
  margin: 0;
}
header {
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #303f9f;
  margin: 0px;
  padding: 0px;
  border-bottom: 0.5px solid rgba(252, 252, 252, 0.7);
}
.wrapper {
  width: 90%;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
}
.navbarleft {
  width: 80px;
  display: flex;
  align-items: center;
}
.navbarleft a {
  font-size: 0;
}
.navbarleft a img {
  width: 45px;
  /* vertical-align: middle; */
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding: 0;
  margin: 0;
}
.nav-links li {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #b1b5d1;
  font-size: 19px;
  font-weight: 600;
  line-height: 1em;
  font-family: sofia-pro;
  letter-spacing: 1px;
  transition: 400ms;
  padding: 0 25px;
  height: 100%;
  /* 与::before有关 ? */
  position: relative;
  /* 垂直居中a中文本 */
  display: flex;
  align-items: center;
}

.nav-links a:hover {
  color: #fff;
}

.wrapper .nav-links .router-link-exact-active {
  color: #fff;
}
.wrapper .nav-links .router-link-exact-active::before {
  width: 100%;
}
.nav-link::before {
  content: "";
  background-color: #fff;
  width: 0;
  height: 4px;
  position: absolute;
  bottom: 0;
  /* 移动中心点后动画会变成向中收缩
  left：0也能实现相应位置但动画将会变为向左收缩
   */
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.3s;
}
</style>