<template>
  <div id="app">
    <div class="side-bar">
      <side-bar :app-name="appName" :menu="menu"></side-bar>
    </div>

    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/common/sideBar/SideBar"
export default ({
  name: "App",
  data: function () {
    return {
      appName: '食堂管理',
      menu: [
        {submenu:'菜单管理' , icon: 'menu001.svg',menuitem: ['菜单排期','菜单信息','新增菜品','菜品详情']},
        {submenu:'基础设施' , icon: 'menu002.svg',menuitem: ['菜单类别','新增菜单类别','物料类别','新增物料类别','物料信息','新增物料信息']},
        {submenu:'物料管理' , icon: 'menu003.svg',menuitem: ['入库管理','采购详情','新增采购','出库管理','出库详情','新增出库','库存管理','库存明细']},
        {submenu:'供应商管理' , icon: 'menu004.svg',menuitem: ['新增供应商','供应商详情','供应商排行']},
        {submenu:'系统设置' , icon: 'menu005.svg',menuitem: ['新增组织','组织设置']}
      ]
    }
  },
  components: {
    SideBar
  }
})
</script>
<style>
@import './assets/css/base.css';
@import './assets/css/common.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.side-bar {
  position: absolute;
  top: 0;
  left: 0;
}
/*#nav a.router-link-exact-active {
  color: #42b983;
}*/

.content {
  margin-left: 210px;
}


</style>
