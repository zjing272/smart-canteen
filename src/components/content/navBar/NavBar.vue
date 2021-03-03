<template>
  <div id="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#nav-bar {
  height: 65px;
  line-height: 65px;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 100);
  color: #101010;
  box-shadow: 0px 2px 4px 0px rgba(202, 202, 202, 100);
  border: 1px solid rgba(255, 255, 255, 100);
}
  .nav-left {
    margin-left: 49px;
  }

</style>