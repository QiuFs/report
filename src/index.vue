<template>
  <div>
    <div class="background"></div>
    <div class="header">
      <div class="headerLeft">
        <div class="location">
        </div>
        <div class="weather">天气
        </div>
      </div>
      <div class="title">
        <div class="mainTitle">
          <span id="heading">水声目标辐射噪声传播特性可视化系统</span>
        </div>
        <div class="subscript">SYSTEM FOR THE PROPAGATION CHARACTERISTICS OF UNDERWATER ACOUSTIC TAGET RADUATED NOISE</div>
      </div>
      <div class="time">
        <div>{{gettime}}</div>
      </div>
    </div>
    <div class="body"></div>
    <div class="bottom" style="position: center">
      <el-row>
        <el-button type="info"><router-link to="/Environment">环境&nbsp;&nbsp;</router-link></el-button>
        <el-button type="info"><router-link to="/Model">模型&nbsp;&nbsp;</router-link></el-button>
        <el-button type="info"><router-link to="/shoppingCartAddData">购物车&nbsp;&nbsp;</router-link></el-button>
        <el-button type="info"><router-link to="/spreadAddData">传播&nbsp;&nbsp;</router-link></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gettime: '',//当前时间
    };
  },
  methods: {
    getTime: function () {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
    },
    currentTime: function () {
      setInterval(this.getTime, 100)
    },
  },
  created(){
    this.currentTime();
  }
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background: url("../src/assets/img/bg.png") center center no-repeat;
  background-size: 100% 100%;
  left: 0px;
  top: 0px;
  margin: 0;
  padding: 0;
  position: fixed;
}
.header{
  width: 100%;
  height: 100px;
  display: flex;
  position: absolute;
}
.header > div{
  flex: 1;
}
.headerLeft{
  display: flex;
}
.location{
  color: aliceblue;
  width: 21%;
  text-align: center;
  line-height: 35px;
}
.weather{
  color: #4287f1;
  line-height: 35px;
}
.time{
  color: #4287f1;
  line-height: 35px;
  text-align: center;
}
.title{
  text-align: center;
  color: aliceblue;
  width: 50%;
}
.mainTitle{
  font-size: large;
}
.subscript{
  font-size: 12px;
  transform-origin: center;
  transform: scale(0.66);
  white-space: nowrap;
}
#heading{
  font-size: 20px;
}
.bottom{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
