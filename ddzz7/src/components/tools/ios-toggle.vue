<template>
  <div class="ios-toggle"></div>
</template>

<script>
export default {};
</script>

<style>
.ios-toggle {
  width: 40px;
  height: 23px;
  background-color: grey;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  z-index: 97;
}
.ios-toggle::after {
  content: "";
  border-radius: 50%;
  width: 45%;
  height: 0;
  padding-top: 45%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  transition: 0.3s;
  z-index: 99;
}
.ios-toggle::before {
  content: "";
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  z-index: 98;
  box-shadow: 3px 1px 10px black;
  transition: 0.3s;
}
.ios-toggle.checked::before {
  left: 20px;
  box-shadow: 0px 3px 10px black;
}
.ios-toggle.checked::after {
  left: 20px;
}
.ios-toggle.checked {
  background-color: #2ecc71;
  z-index: 97;
}
</style>