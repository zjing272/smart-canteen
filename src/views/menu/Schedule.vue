<template>
  <div id="schedule">
    <nav-bar><div slot="left">菜单排期</div></nav-bar>
    <div class="schedule-title">今日菜单</div>
    <div class="time-select">
      <i class="el-icon-arrow-left"></i>
      <table>
        <tr>
          <td>周一</td>
          <td>周二</td>
          <td>周三</td>
          <td>周四</td>
          <td>周五</td>
          <td>周六</td>
          <td>周日</td>
        </tr>
      </table>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="menu-info">
      <div v-for="item in menuInfo" :key="item" class="menu-info-item">
        <ul>
          <li>{{item.title}}</li>
          <li v-for="(img, index) in item.images" :key="index">
            <img :src="img" alt="" class="info-img">
          </li>
        </ul>
        <div class="menu-info-modify">修改</div>
      </div>
    </div>
  </div>
</template>

<script>
//屏幕适配(做好之后修改左右箭头参数)
/*getRem(1563, 100)
window.onresize = function() {
  getRem(1563, 100)
}
function getRem(pwidth, prem) {
  let html = document.getElementsByTagName('html')[0]
  let oWidth =
      document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = (oWidth / pwidth) * prem + 'px'
}*/

import NavBar from "@/components/content/navBar/NavBar"
export default {
  name: "Schedule",
  data: function () {
    return {
      menuInfo: [
        {
          title: '早餐', images: ['n001.png', 'n002.png', 'n003.png']
        },
        {
          title: '午餐', images: ['n001.png', 'n002.png', 'n003.png']
        },
        {
          title: '晚餐', images: ['n001.png', 'n002.png', 'n003.png']
        }
      ]
    }
  },
  components: {
    NavBar
  },
  mounted() {
    this.menuInfo[1].forEach(item => {
      let img = null;
      try {
        img = require('@/assets/img/menu/' + item)
      } catch (err) {
        //图片不存在则取消显示
        img = null;
      }
      return item = img;
    })
  }
}
</script>

<style scoped>
#schedule {
  height: 1221px;
  background-color: #f6faf9;
}
.schedule-title {
  padding: 30px 0;
  font-size: 28px;
  color: rgba(42, 42, 42, 100);
  text-align: center;
}



.time-select {
  position: relative;
}
.time-select table{
  height: 36px;
  margin: auto;
  font-size: 14px;
  background-color: #fff;
  border-collapse: collapse;
}


.time-select tr {

}
.time-select td {
  box-sizing: border-box;
  width: 161px;
  text-align: center;
  line-height: 36px;
  border: 1px solid rgba(210, 210, 216, 100);
}

.el-icon-arrow-left,
.el-icon-arrow-right {
  position: absolute;
  top: 6px;
  font-size: 24px;
}
.el-icon-arrow-left {
  left: 50px;
}
.el-icon-arrow-right {
  right: 50px;
}

.menu-info {
  display: flex;
  flex-direction: column;
  margin: 20px 27px 36px 27px;
  height: 962px;
  font-size: 14px;
  text-align: center;
  color: rgba(16, 16, 16, 100);
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 100);
}
.menu-info-item info-img {
  width: 200px;
  height: 250px;
}
</style>