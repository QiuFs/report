<template>
  <div>
    <index>
    </index>
    <div class="body">
      <div class="left">
        <div class="publicTitle">环境</div>
          <div class="addData"><img src="../../assets/img/noData.png" alt="addData">
            暂无数据<br/>请移步<router-link to="environment" style="color: yellow">环境页面</router-link>添加数据哦！
          </div>

        </div>
      <div class="right">
        <div class="publicTitle">模型</div>
          <div class="addData"><img src="../../assets/img/noData.png" alt="addData">
            暂无数据<br/>请移步<router-link to="model" style="color: yellow">模型页面</router-link>添加数据哦！</div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "shoppingCartAddData"
}
</script>

<style scoped>
.body{
  position: absolute;
  display: flex;
  flex-direction: inherit;
  width: 100%;
  height: 77%;
  top: 100px;
}
.left{
  width: 44%;
  margin: 20px;
  position: relative;
}
.right{
  width: 44%;
  margin: 20px;
  position: relative;
}
.publicTitle{
  background: linear-gradient(to right,rgba(48,82,174,.5),rgba(48,82,174,0));
  color: #fff;
  font-size: 15px;
  padding-left: 5px;
}
.addData{
  width:35%;
  height:40%;
  position: absolute;
  left: 50%;
  top: 50%;
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
