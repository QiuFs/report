<template>
  <div>
    <index></index>
    <div class="body">
      <div class="map">
      </div>
      <div class="LatitudeLongitude">
        <div class="search">
          <el-input
              v-model="LatitudeLongitude" clearable
              placeholder="请输入经纬度搜索">
            <template #append>
              <el-button @click="getLatitudeLongitude">
              <el-icon><Search /></el-icon></el-button>
            </template>
          </el-input>
        </div>
        <div class="tableData">
          <el-table
              :data="tableData"
              stripe :header-cell-style="{background: '#1d3863',color: '#5b7fbb'}"
              style="width: 100%;margin:0px;pointer-events: none;"
              :row-style="{height: '43px'}"
              size="small"
              key="slot"
          >
            <el-table-column prop="longitude" label="经度" min-width="20%" align="center"></el-table-column>
            <el-table-column prop="dimension" label="纬度" min-width="20%"  align="center"></el-table-column>
            <el-table-column prop="depth" label="总深度" min-width="25%"  align="center"></el-table-column>
            <el-table-column prop="remark" label="备注" min-width="20%"  align="center">
              <el-button @click="handleClick(scope.row)" type="text" size="small" >查看</el-button>
            </el-table-column>
            <el-table-column prop="remark" label="" min-width="15%"  align="center">
              <delete style="width: 1em; height: 1em;"></delete>
            </el-table-column>
          </el-table>

        </div>
      </div>
      <div class="season">
        <div class="img">
          <img src="../../assets/img/spring.png">
        </div>
        <div class="chart">
        </div>
        <div class="img">
          <img src="../../assets/img/summer.png">
        </div>
        <div class="chart">
        </div>
        <div class="img">
          <img src="../../assets/img/autumn.png">
        </div>
        <div class="chart">
        </div>
        <div class="img">
          <img src="../../assets/img/winter.png">
        </div>
        <div class="chart">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "environment",
  data(){
    return{
      LatitudeLongitude: {
        query:'', //查询参数
        pageSize: 10
      },
      tableData:[
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'}]
    }

  }
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
.map{
  margin: 10px;
  width: 60%;
}
.LatitudeLongitude{
  margin: 10px;
  width: 17%;

}
.season{
  margin: 10px;
  width: 15%;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
}
.img{
  width: 100%;
  height: 6%;
  margin-bottom: 1%;
}
.tableData{
  background-color: cornflowerblue;
}
.img img{
  width:100%;
  height: 100%;
}
.chart{
  width: 100%;
  height: 16%;
  margin-bottom: 1%;
}
:deep(.el-table--striped .el-table__body tr.el-table__row--striped td){
  background: #101e39;
}
:deep(.el-table tr){
  background: #22385f;
}
/* 斑马纹颜色定义完之后会显示自带的边框颜色，这里要重置 */
:deep(.el-table td),
:deep(.building-top .el-table th.is-leaf){
  border: none;
  color: white;
}
:deep(.el-table--enable-row-hover .el-table__body tr:hover>td){
  background-color:#3068bd;
}
/* 去掉上面的线 */
:deep(.el-table th.is-leaf){
  border: none;
}
</style>
