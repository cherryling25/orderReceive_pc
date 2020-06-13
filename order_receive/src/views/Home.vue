<template>
  <div class="home">
    <el-container style="height: 100%;width: 100%; position: fixed;">
      
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-menu"></i>订单</template
            >
            <el-menu-item-group>
              <router-link to="/orderList">
              <el-menu-item index="1-1">订单列表</el-menu-item>
              </router-link>

              <router-link to="/orderReceive">
              <el-menu-item index="1-2">接单</el-menu-item>
              </router-link>

              <router-link to="/operation">
              <el-menu-item index="1-3">操作</el-menu-item>
              </router-link>

              <router-link to="/appraise">
              <el-menu-item index="1-4">评价</el-menu-item>
              </router-link>

               <router-link to="/money">
              <el-menu-item index="1-5">金额</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>


          <!-- <router-link to="/invite">
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">邀请返利</span>
            </el-menu-item>
          </router-link> -->
          <!-- <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>邀请返利</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu> -->

          <!-- <router-link to="/taskManage">
          <el-menu-item index="4">
            <i class="el-icon-message"></i>
            <span slot="title">任务管理</span>
          </el-menu-item>
          </router-link>

          <router-link to="/transactionDetail">
          <el-menu-item index="5">
            <i class="el-icon-wallet"></i>
            <span slot="title">资金明细</span>
          </el-menu-item>
           </router-link>

          <router-link to="/shopInfo">
          <el-menu-item index="6">
            <i class="el-icon-s-shop"></i>
            <span slot="title">店铺信息</span>
          </el-menu-item>
           </router-link>

          <router-link to="/appealCenter">
          <el-menu-item index="7">
            <i class="el-icon-message"></i>
            <span slot="title">申诉中心</span>
          </el-menu-item>
          </router-link>

          <router-link to="/blacklist">
          <el-menu-item index="8">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">黑名单管理</span>
          </el-menu-item>
          </router-link>

          <el-menu-item index="9">
            <i class="el-icon-suitcase"></i>
            <span slot="title">代发快递</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-row>
             <!-- <el-col :span="12" :offset="3">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="首页" name="first">
                  </el-tab-pane>
                  <el-tab-pane label="邀请返利" name="second">
                  </el-tab-pane>
                  <el-tab-pane label="发布任务" name="third"></el-tab-pane>
                  <el-tab-pane label="卖家中心" name="fourth"></el-tab-pane>
                </el-tabs>
            </el-col> -->
    
            <el-col :span="3" :offset="20"
              ><div class="grid-content">
                <div style="display:flex;justify-content: space-around;">
                  <img
                    class="userImg"
                    src="../assets/images/user.jpg"
                    alt=""
                    srcset=""
                  />
                  <div class="userInfo">
                    <div style="font-size:18px; color: #7fcff4;">lemon</div>
                    <div style="font-size:14px;">管理员</div>
                  </div>
                </div>
              </div></el-col
            >
            <el-col :span="1"
              ><div class="grid-content" style="margin-top:-10px;">
                <el-dropdown>
                  <i class="el-icon-arrow-down"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
       activeName: 'second'
    };
  },
  methods: {
    logout(){
      this.$confirm("确认退出吗?","提示",{})
      .then(()=>{
        localStorage.clear("id")
        this.$router.push("/");
      }).catch(()=>{

      });
    },
    // 切换tab
    handleClick(tab, event) {
      console.log(tab, event);
      if(tab.name == 'second'){
          this.$router.push("/invite");

      }else if(tab.name == 'third'){
        this.$router.push("/publish");

      }else if(tab.name == 'fourth'){
        this.$router.push("/sellerCenter");
      }
    }
  },
  components: {

  },
  created(){
    this.GLOBAL.userId = localStorage.getItem("id");
    console.log(this.GLOBAL.userId)
  }
};
</script>
<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
  border: 1px solid #eee;
}
a{
   text-decoration:none;
}
.el-aside {
  color: #333;
}
.el-main {
  background: #f7f7f7;
}
.userInfo {
  margin-top: 10px;
  line-height: 20px;
}
.userImg {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-top: 7px;
}
.bg{
  background: gray;
}
.headTitle{
  border-bottom: 4px solid #69cbe4;
  padding-bottom: 10px;
  color: #69cbe4;
}
</style>
