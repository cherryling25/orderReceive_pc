<template>
  <div id="operation">
    <el-container
      class="table"
      style="margin-top: 30px;margin-left: 30px;border-radius: 4px;"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        style="margin-top: 30px;"
      >
        <el-form-item label="订单类型">
          <el-select v-model="form.orderType" placeholder="请选择">
            <el-option
              v-for="item in form.typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="订单状态">
          <el-select v-model="form.orderState" placeholder="请选择">
            <el-option
              v-for="item in form.stateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="店铺">
          <el-select v-model="form.shop" placeholder="请选择">
            <el-option
              v-for="item in form.shopOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="订单ID">
          <el-input
            v-model="form.orderId"
            placeholder="请输入订单ID"
          ></el-input>
        </el-form-item>

        <el-form-item label="昵称">
          <el-input v-model="form.nickName" placeholder="请输入昵称"></el-input>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.startTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="请选择时间"
              v-model="form.endTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="订单编号">
          <el-input
            v-model="form.orderNumber"
            placeholder="请输入订单编号"
          ></el-input>
        </el-form-item>

        <el-form-item label="任务ID">
          <el-input v-model="form.taskId" placeholder="请输入任务ID"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="拼多多昵称">
                  <span>{{ props.row.user_pdd_nick }}</span>
                </el-form-item>
                <el-form-item label="拼多多订单号">
                  <span>{{ props.row.pdd_order_sn }}</span>
                </el-form-item>
                <el-form-item label="任务编号">
                  <span>{{ props.row.renwu_id }}</span>
                </el-form-item>
                <el-form-item label="刷手id">
                  <span>{{ props.row.web_user_id }}</span>
                </el-form-item>
                <el-form-item label="价格">
                  <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="商品数量">
                  <span>{{ props.row.number }}</span>
                </el-form-item>
                <el-form-item label="评价要求">
                  <span>{{ props.row.pj_yq }}</span>
                </el-form-item>
                <el-form-item label="订单状态">
                  <template slot-scope="scope">
                    <div v-if="scope.row.state == 1">未接单</div>
                    <div v-if="scope.row.state == 2">待操作</div>
                    <div v-if="scope.row.state == 3">待返款</div>
                    <div v-if="scope.row.state == 4">待评价</div>
                    <div v-if="scope.row.state == 5">商家确认</div>
                    <div v-if="scope.row.state == 6">已完成</div>
                    <div v-if="scope.row.state == 7">订单撤销</div>
                    <div v-if="scope.row.state == 8">冻结</div>
                  </template>
                </el-form-item>
                <el-form-item label="订单生成时间">
                  <span>{{ props.row.time }}</span>
                </el-form-item>
                <el-form-item label="接单时间">
                  <span>{{ props.row.wei_time }}</span>
                </el-form-item>
                <el-form-item label="返款时间">
                  <span>{{ props.row.fan_time }}</span>
                </el-form-item>
                <el-form-item label="返款状态">
                  <span>{{ props.row.state_fankuan }}</span>
                </el-form-item>
                <el-form-item label="确认时间">
                  <span>{{ props.row.que_time }}</span>
                </el-form-item>
                <el-form-item label="冻结时间">
                  <span>{{ props.row.dong_time }}</span>
                </el-form-item>
                <el-form-item label="数据更改时间">
                  <span>{{ props.row.update_time }}</span>
                </el-form-item>
                <el-form-item label="接收时间">
                  <span>{{ props.row.end_time }}</span>
                </el-form-item>
                <el-form-item label="评价时间">
                  <span>{{ props.row.pin_time }}</span>
                </el-form-item>
                <el-form-item label="评价成功上传已经评价的照片">
                  <template slot-scope="scope">
                    <img :src="scope.row.image" width="40" height="40" />
                  </template>
                </el-form-item>
                <el-form-item label="操作时间">
                  <span>{{ props.row.cao_time }}</span>
                </el-form-item>
                <el-form-item label="操作成功上传支付成功的照片">
                  <template slot-scope="scope">
                    <img :src="scope.row.img" width="40" height="40" />
                  </template>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column prop="order_sn" label="订单号"> </el-table-column>
          <el-table-column prop="faltime" label="发布时间"> </el-table-column>

          <el-table-column prop="start_time" label="刷单开始时间">
          </el-table-column>
          <el-table-column prop="end_time_s" label="刷单结束时间">
          </el-table-column>

          <el-table-column prop="goods_img" label="商品图片">
            <template slot-scope="scope">
              <img :src="scope.row.goods_img" width="40" height="40" />
            </template>
          </el-table-column>

          <el-table-column prop="goods_name" label="商品名称">
          </el-table-column>
          <el-table-column prop="order_type" label="订单类型">
            <template slot-scope="scope">
              <div v-if="scope.row.order_type == 1">未反款</div>
              <div v-if="scope.row.order_type == 2">已经反过款不能再返款</div>
            </template>
          </el-table-column>

          <el-table-column prop="price_noe" label="单品成交价格">
          </el-table-column>
          <el-table-column prop="phone_price" label="手机展示价格">
          </el-table-column>
          <el-table-column prop="goods_state" label="定位目标商品方式">
          </el-table-column>
          <el-table-column prop="wechat_centons" label="是否需要聊天">
            <template slot-scope="scope">
              <div v-if="scope.row.wechat_centons == 1">需要聊天</div>
              <div v-if="scope.row.wechat_centons == 2">不需要聊天</div>
            </template>
          </el-table-column>
          <el-table-column prop="centons_store" label="其他要求">
          </el-table-column>
          <el-table-column prop="goods_url" label="商品链接"> </el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="back(scope.row.id)"
                type="success"
                plain
                size="small"
              >
                返回未接单状态
              </el-button>

              <el-button
                @click="dialogFormVisible = true"
                type="warning"
                plain
                size="small"
              >
                上传资料
              </el-button>

              <el-dialog
                title="上传资料"
                :visible.sync="dialogFormVisible"
                :modal-append-to-body="false"
              >
                <el-form :model="dialogForm">
                  <el-form-item label="拼多多昵称" label-width="100px">
                    <el-input
                      v-model="dialogForm.name"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="拼多多订单号" label-width="100px">
                    <el-input
                      v-model="dialogForm.number"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="商品图片" label-width="100px">
                    <el-upload
                      class="avatar-uploader"
                      action="http://121.36.231.122:18000/index.php/index/Store/img"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                    >
                      <img
                        v-if="dialogForm.pic"
                        :src="dialogForm.pic"
                        class="avatar"
                      />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="upload(scope.row.id)">确 定</el-button>
                </div>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="PageSize"
          :total="totalCount"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "operation",
  data() {
    return {
      totalCount: 0,
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 10,
      // 个数选择器（可修改）
      pageSizes: [10],
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      page: 1,
      size: 10,
      status: 0,

      dialogFormVisible: false,
      dialogForm: {
        name: "",
        number: "",
        pic: "",
        pic1: ""
      },

      form: {
        orderType: "",
        typeOptions: [],

        orderState: "",
        stateOptions: [],

        shop: "",
        shopOptions: [],

        orderId: "",
        nickName: "",
        startTime: "",
        endTime: "",
        orderNumber: "",
        taskId: ""
      },

      tableData: []
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // 返回未接单状态
    back(index) {
      this.$confirm("是否返回未接单状态?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "post",
            data: Qs.stringify({
              id: index
            }),

            url: this.GLOBAL.hostUrl5 + "admin/Order/order_type_state"
          }).then(res => {
            console.log(res);
            if (res.data.code == 1 || res.data.code == "1") {
              this.$message({
                message: "成功",
                type: "success"
              });
              this.showData(1, 10);
            } else {
              this.$message.error("失败");
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 上传资料
    upload(index) {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: JSON.stringify({
          id: index,
          img: this.dialogForm.pic1,
          user_pdd_nick: this.dialogForm.name,
          pdd_order_sn:this.dialogForm.number,
        }),

        url: this.GLOBAL.hostUrl5 + "admin/Order/order_fan"
      }).then(res => {
        console.log(res);
        if (res.data.code == 1 || res.data.code == "1") {
          this.$message({
            message: "成功",
            type: "success"
          });
           this.dialogFormVisible = false;
          this.showData(1, 10);
        } else {
          this.$message.error("失败");
        }
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.dialogForm.pic = URL.createObjectURL(file.raw);
      this.dialogForm.pic1 = res.data;
    },
    showData(page,size) {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          user_id: this.GLOBAL.userId,
          state: 2,
          page:page,
          size:size
        }),

        url: this.GLOBAL.hostUrl5 + "hands/Order/dan_list"
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data.list;
        this.totalCount = res.data.data.count;
      });
    }
  },
  mounted() {
    // this.mockedData();
    this.showData(1,10);
  },
  components: {}
};
</script>

<style>
.gridWrap {
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid rgb(211, 210, 210);
  height: 100px;
  background: white;
}
.gridWrap .gridImg {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.divwrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  line-height: 20px;
}
.gridNumber {
  font-size: 25px;
}
.gridName {
  margin-top: 5px;
  color: gray;
}

/* 表格 */
.table {
  background: white;
}
.table .el-footer {
  line-height: 60px;
  margin-top: 20px;
}
.table .el-main {
  color: #333;
  text-align: center;
}
.el-container {
  background: white;
  width: 95%;
  border: 1px solid rgb(209, 207, 207);
}
.table .el-table {
  border: 1px solid rgb(209, 207, 207);
}
/* table 展开 */
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
