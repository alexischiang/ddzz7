<template>
  <div class="teambuilder-container">
    <selector />
    <rec />
    <builds />
  </div>
</template>

<script>
import selector from "./TeambuilderChildren/selector";
import rec from "./TeambuilderChildren/rec";
import builds from "./TeambuilderChildren/builds";
export default {
  components: {
    selector,
    rec,
    builds
  }
};
</script>

<style scoped>
.teambuilder-container {
  padding: 20px 50px;
  background-color: #2c3e50;
  overflow: hidden;
}
</style>