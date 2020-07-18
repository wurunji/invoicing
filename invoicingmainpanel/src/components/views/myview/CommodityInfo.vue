<!--商品信息页-->

<template>
  <el-container style="height: 800px">
    <el-aside width="200px" style="background-color: #545c64">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="asideNavHandleSelect">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">商品基本信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">类别管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <template v-if="aside_nav_handel_select === '1'">
      <el-container>
        <el-header>
          <el-row style="top: 15px">
            <el-col :span="3"><el-input placeholder="请输入内容" v-model="trade_search" clearable></el-input></el-col>
            <el-col :span="1"><el-button type="primary">查询</el-button></el-col>
            <el-col :span="2"><el-button type="primary" @click="tradeInfoAdd">新增(F1)</el-button></el-col>
            <el-col :span="1" :offset="15"><el-button type="primary" @click="tradeChoiceButtonClick">多选</el-button></el-col>
            <el-col :span="1"><el-button type="primary">打印</el-button></el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-table
            :data="trade_table_data"
            border
            stripe
            height="720"
            style="width: 100%;"
            max-height="720">
            <el-table-column
              v-if="trade_choice"
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="category"
              label="类别"
              sortable>
            </el-table-column>
            <el-table-column
              prop="trade_code"
              label="商品编码"
              sortable>
            </el-table-column>
            <el-table-column
              prop="trade_name"
              label="商品名"
              sortable>
            </el-table-column>
            <el-table-column
              prop="purchasing_price"
              label="进价"
              sortable>
            </el-table-column>
            <el-table-column
              prop="selling_price"
              label="售价"
              sortable>
            </el-table-column>
            <el-table-column
              prop="trade_inventory"
              label="库存"
              sortable>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button type="info" @click="tradeHandleEdit(scope.$index, scope.row)" round>修改</el-button>
                <el-button type="danger" @click="tradeHandleDelete(scope.$index, scope.row)" round>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </template>
    <template v-if="aside_nav_handel_select === '2'">
      <el-main>
        <el-table :data="category_data"
                  stripe
                  border
                  style="margin: 20px;width: 421px;border-right: none">
          <el-table-column
            label="类别编码"
            prop="category_id"
            width="120">
          </el-table-column>
          <el-table-column
            label="类别"
            prop="category_name"
            width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button type="info" @click="categoryHandleEdit(scope.$index, scope.row)" round>修改</el-button>
              <el-button type="danger" @click="categoryHandleDelete(scope.$index, scope.row)" round>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </template>
  </el-container>
</template>

<script>

    export default {
      name: "CommodityInfo",
      data(){
        return{
          //左侧导航栏选择
          aside_nav_handel_select:'1',
          //商品信息搜素框内容
          trade_search:'',
          //多选按钮点击
          trade_choice:false,
          //商品信息数据
          trade_table_data:[
            {
              "category": "水果",
              "trade_code":"10001",
              "trade_name":"苹果",
              "purchasing_price":"1.5",
              "selling_price":"2.5",
              "trade_inventory":"200"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            },
            {
              "category": "1",
              "trade_code":"2",
              "trade_name":"3",
              "purchasing_price":"4",
              "selling_price":"5",
              "trade_inventory":"6"
            }
          ],
          //类别信息数据
          category_data:[
            {category_id:'10',category_name:'水果'},
            {category_id:'20',category_name:'食品'},
            {category_id:'30',category_name:'饰品'}
          ]
        }
      },
      methods:{
        //左侧导航栏选择
        asideNavHandleSelect(key, keyPath){
          this.aside_nav_handel_select=key;
        },
        //新增商品信息
        tradeInfoAdd(){
          let new_trade_info = {
            "category": "",
            "trade_code":"",
            "trade_name":"",
            "purchasing_price":"",
            "selling_price":"",
            "trade_inventory":""
          };
          this.trade_table_data.push(new_trade_info);
        },
        //点击多选按钮
        tradeChoiceButtonClick(){
          this.trade_choice = !this.trade_choice;
        },
        //修改商品信息
        tradeHandleEdit(index, row) {
          console.log(index, row);
        },
        //删除商品信息
        tradeHandleDelete(index, row) {
          console.log(index, row);
          this.trade_table_data.splice(index,1);
        },
        //修改类别信息
        categoryHandleEdit(index,row){
          console.log(index,row);
        },
        //删除类别信息
        categoryHandleDelete(index,row){
          console.log(index,row);
        }
      }
    }
</script>

<style scoped>
  /*左侧导航栏*/
  .el-menu-vertical-demo{
    width: 200px;
    border: 0;
    text-align: left;
  }
  .el-table{
    font-size: 15px;
    font-weight: 700;
  }
</style>
