<template>
  <div class="teambuilder-container">
    <selector />
    <rec />
  </div>
</template>

<script>
import selector from "./TeambuilderChildren/selector";
import rec from "./TeambuilderChildren/rec";
export default {
  components: {
    selector,
    rec
  }
};
</script>

<style scoped>
.teambuilder-container {
  overflow: hidden;
}
</style>