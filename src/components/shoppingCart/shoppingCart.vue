<template>
  <div>
    <index>
    </index>
    <div class="body">
      <div class="left">
        <div class="publicTitle">环境</div>
        <div class="waveformForm"></div>
      </div>
      <div class="right">
        <div class="publicTitle">模型</div>
        <div class="modelForm"></div>
      </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "shoppingCart"
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
  width: 45%;
  margin: 20px;
}
.right{
  width: 50%;
  margin: 20px;
}
.publicTitle{
  background: linear-gradient(to right,rgba(48,82,174,.5),rgba(48,82,174,0));
  color: #fff;
  font-size: 15px;
  padding-left: 5px;
}


</style>
