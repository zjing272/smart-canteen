<template>
  <div id="side-bar">
    <h5 class="app-name">{{appName}}</h5>
    <el-menu
        router
        :default-openeds="defaultOpenList"
        default-active="/menu/schedule"
        unique-opened
        class="el-menu-vertical-demo"
        background-color="#2c3039"
        text-color="#fff"
        active-text-color="#ff9502"
        @open="handleOpen"
        @close="handleClose">
      <template v-for="(item, subIndex) in menu">
        <el-submenu
            v-if="item.submenu != '' || item.submenu != null"
            :key="item.submenu"
            :index="subRoutePath[subIndex]">
          <template slot="title">
            <img :src="item.icon" alt="">
            <span class="el-sub-title">{{item.submenu}}</span>
          </template>

          <el-menu-item class="el-sub-item"
                        v-for="(menuitem, itemIndex) in item.menuitem"
                        :key="menuitem"
                        :index="subRoutePath[subIndex] + subItemRoutePath[subIndex][itemIndex]">{{menuitem}}
                       </el-menu-item>
        </el-submenu>
      </template>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    appName: String,
    menu: Array
  },
  data: function () {
    return {
      defaultOpenList: ['0'],
      subRoutePath: ['/menu', '/base', '/materiels', '/supplier', '/system'],
      subItemRoutePath: [
        ['/schedule', '/menuInfo', '/newDishes', '/dishesInfo'],
        ['/menuCategories', '/newMenu', '/materCategories', '/newMater', '/materInfo', '/newMaterInfo'],
        ['/wareHouse', '/buyInfo', '/newBuy', '/outWarehouse', '/outWarehouseInfo', '/newOutHouse', '/inventory', '/inventoryInfo'],
        ['/addSuplier', '/supplierInfo', '/supplierRank'],
        ['/addAddress', '/addAddress']
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      this.$router.replace(key)
      console.log(key, keyPath)

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {

  },
  created () {
    //模块引入不支持动态引入，即：require（变量）不支持
    //用以下方式处理icon路径动态引入问题
    this.menu.forEach(item => {
      let img = null;
      try {
        img = require('@/assets/icons/' + item.icon)
      } catch (err) {
        //图片不存在则取消显示
        img = null;
      }
      return item.icon = img;
    })

  },
  mounted () {
  }
}
</script>

<style scoped>
  #side-bar {
    height: 1221px;
    width: 210px;
    font-size: 14px;
    color: #fff;
    background-color: #2c3039;
  }

  .app-name {
    width: 210px;
    height: 79px;
    line-height: 79px;
    font-size: 28px;
    text-align: center;
    background-color: #2c3039;
  }

  .el-menu-vertical-demo {
    border: none;
  }


  .el-sub-title {
    margin-left: 10px;
    font-size: 18px;
  }

  .el-sub-item {
    text-align: center;
  }
</style>