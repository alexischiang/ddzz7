<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="navbarleft">
          <router-link to="/">
            <img src="../assets/logo-white.png" />
          </router-link>
        </div>
        <ul class="nav-links">
          <router-link to="/teambuilder">
            <li>TeamBuilder</li>
          </router-link>
          <router-link to="/database">
            <li>Database</li>
          </router-link>
          <router-link to="/patchnotes">
            <li>Patch Notes</li>
          </router-link>
          <router-link to="/news">
            <li>News</li>
          </router-link>
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
  width: 98%;
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
}

.nav-links a {
  text-decoration: none;
  color: #b1b5d1;
  font-size: 19px;
  font-weight: 600;
  line-height: 1em;
  font-family: sofia-pro;
  margin-top: 3px;
  margin-left: 50px;
  letter-spacing: 1px;
  transition: 400ms;
}

.nav-links a:hover {
  color: #fff;
}

.wrapper .nav-links .router-link-exact-active {
  color: #fff;
}
</style>