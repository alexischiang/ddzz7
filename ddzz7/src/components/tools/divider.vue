<template>
  <!-- 
    divider组件使用方法:
    1.通过标签属性 mainTitle 传入主标题
    2.通过标签属性 subTitle 传入副标题(如无可省略)
  -->
  <div class="divider-container">
    <div class="divider">
      <p class="main-title">{{mainTitle}}</p>
      <p v-if="subTitle" class="sub-title">{{subTitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainTitle", "subTitle"]
};
</script>

<style scoped>
.divider-container {
  padding: 0;
  margin: 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.divider {
  display: flex;
}
.divider .main-title {
  color: white;
  font-weight: 800;
  font-size: 45px;
  position: relative;
}

.divider .main-title::after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: white;
  position: absolute;
}
.divider .sub-title {
  position: relative;
  bottom: 10px;
  margin-left: 15px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
p {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0;
  margin: 0;
}
</style>