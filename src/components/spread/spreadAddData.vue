<template>
<div>
  <index>
  </index>
  <div class="body">
    <div class="addData">
    <img src="../../assets/img/noData.png" alt="addData">
    暂无数据<br/>请移步<router-link to="/shoppingCart" style="color: yellow">购物车页面</router-link>添加数据哦！
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "spreadAddData"
}
</script>

<style scoped>
.body{
  width: 100%;
  height: 77%;
}
.addData{
  width:15%;
  height:30%;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: white;
}
.addData img{
  width: 100%;
  height: 100%;
}
a{text-decoration: none}
</style>
