<template>
  <div>
    <index></index>
    <div class="body">
      <div class="left">
        <div class="publicTitle">参数设置</div>
        <div class="parameterSetting"></div>
        <div class="fangzheng">
        </div>
      </div>
      <div class="center">
        <div class="waveform">
            <div class="publicTitle">波形图</div>
          </div>
        <div class="sort">
        <div class="lofra">
          <div class="publicTitle">lofra谱图</div>
        </div>
        <div class="demon">
          <div class="publicTitle">demon谱图</div>
        </div>
        </div>
      </div>
      <div class="right">
        <div class="search">
          <el-input
            v-model="input"
            placeholder="请输入模型名称搜索"
            class="input">
          <el-icon color="#409EFC" class="el-cascader__search-input">
            <edit />
          </el-icon>
        </el-input>
          <el-table
              :data="tableData"
              stripe :header-cell-style="{background: '#1d3863',color: '#5b7fbb'}"
              style="width: 100%;margin:0px;pointer-events: none;"
              :row-style="{height: '43px'}"
              size="small"
              key="slot"
          >
            <el-table-column prop="modelName" label="模型名称" min-width="30%" align="center"></el-table-column>
            <el-table-column prop="longitude" label="经度" min-width="15%" align="center"></el-table-column>
            <el-table-column prop="dimension" label="纬度" min-width="15%" align="center"></el-table-column>
            <el-table-column prop="depth" label="总深度" min-width="16%" align="center"></el-table-column>
            <el-table-column prop="remark" label="备注" min-width="14%" align="center"></el-table-column>
            <el-table-column prop="remark" label="" min-width="10%"  align="center">
              <delete style="width: 1em; height: 1em;"></delete>
            </el-table-column>
          </el-table>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "model",
  data(){
    return{
      tableData:[
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'},
        {modelName:'模型一', longitude: '13e',dimension: '123w',depth:'200m',remark:'查看'}
      ]
    }
  }
}
</script>

<style scoped>
.body{
  display: flex;
  position: absolute;
  flex-direction: inherit;
  width: 100%;
  height: 77%;
  top: 15%;
}

.center{
  width: 40%;
  margin: 10px;
}
.left{
  width: 30%;
  margin: 10px;
}
.right{
  width: 23%;
  margin: 10px;
  right: 10px;
}
.waveform{
  height: 47%;
  width: 100%;

}
.sort{
  display: flex;
}
.lofra{
  width: 47%;
}
.demon{
  width: 47%;
}
.publicTitle{
  background: linear-gradient(to right,rgba(48,82,174,.5),rgba(48,82,174,0));
  color: #fff;
  font-size: 15px;
  padding-left: 5px;
}

/* 去掉中间数据的分割线 */
:deep(.el-table__row>td){
  border: none;
}
/* 去掉上面的线 */
:deep(.el-table th.is-leaf){
  border: none;
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
/*表格字体颜色*/
:deep(.el-table--enable-row-hover .el-table__body tr:hover>td){
  background-color:#3068bd;
}

</style>
