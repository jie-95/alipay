<template>
  <div>
    <van-nav-bar title="提现" left-arrow @click-left="onClickLeft" />
    <div class="app">
      <div class="content">
        <div class="hasmoney">
          <span>可提现：{{ integral / 10 }} 元</span>
        </div>
        <div class="integral">
          <span> 当前积分：{{ integral }} </span>
        </div>
      </div>
    </div>
    <!-- 宫格 -->
    <div class="gutterbox">
      <van-row>
        <van-col
          :class="[{ isRechargeblock: isActive === index }]"
          class="rechargeblock"
          span="6"
          v-for="(item, index) in amount"
          :key="index"
          @click="vouterFun(index, item.num)"
        >
          <div>
            <i style="font-size: 20px; font-style: normal">{{ item.num }} 元</i>
          </div>
          <div v-if="item.num <= integral / 10" class="enoughintegral">
            可提现
          </div>
          <div v-else class="needintegral">积分不足</div>
        </van-col>
      </van-row>
    </div>
    <!-- 提现方式 -->
    <div class="typecard">
      <span class="typetitle">提现方式</span>
    </div>
    <div class="paytypess">
      <div class="card"><img src="@/assets/img/money.png" alt="" />飓风银行</div>
      <div class="card" @click="payTypes(payType)">
        更换
        <img src="@/assets/img/change.png" alt="" />
      </div>
    </div>
    <!-- 确认提现 -->
    <div class="buttondiv">
      <button class="submitbutton" @click="handelSubmit">确认提现</button>
    </div>
    <div class="agreement">
      <input
        type="checkbox"
        v-model="agreement"
        @click="clickAgreement(agreement)"
      />
      <span>  我已阅读并同意遵守签订《礼物服务协议》</span>
      <!-- <van-radio-group v-model="checked">
          <van-radio name="1" checked-color="#ee0a24">单选框 1</van-radio>
        </van-radio-group> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'withDraw',
  data() {
    return {
      isActive: '',
      amount: [
        { num: 100 },
        { num: 150 },
        { num: 200 },
        { num: 500 },
        { num: 800 },
        { num: 1000 },
        { num: 2000 },
        { num: 3000 },
        { num: 4000 }
      ],
      // 支付方式
      payType: '',
      // 支付金额
      money: '',
      // checked同意条款
      agreement: '',
      // 当前积分
      integral: 1500
    }
  },
  methods: {
    onClickLeft() {},
    vouterFun(i, num) {
      this.isActive = i
    //   console.log(i, num)
      if(this.integral < num *10){
        this.$notify('积分不足')
        this.money = ''
        return
      }
      this.money = num
    },
    handelSubmit() {
        if(this.integral < this.money * 10){
            this.$notify('积分不足')
            return 
        }
        if(!this.money){
            this.$notify('请选择可提现金额')
            return 
        }
        if (this.agreement !== true) {
        this.$notify('请勾选协议')
        return
      }
      console.log('提现',this.money)
    },
    // 跟换银行卡
    payTypes() {
      console.log('change')
    }
  }
}
</script>

<style scoped lang="less">
.app {
  display: flex;
  justify-content: center;
}
.content {
  position: relative;
  width: 351px;
  height: 84px;
  padding: 5px 6px 8px 6px;
  background-image: url('@/assets/img/withdraw.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 10px;
  .hasmoney {
    position: absolute;
    top: 20px;
    left: 24px;
    span {
      font-size: 20px;
      color: #e59036;
    }
  }
  .integral {
    position: absolute;
    right: 23px;
    bottom: 21px;
    span {
      font-size: 13px;
      color: #e59036;
    }
  }
}
.gutterbox {
  padding-left: 25px;
  text-align: center;

  .rechargeblock {
    border: 1px solid #dddddd;
    // width: 90px;
    height: 60px;
    border-radius: 10px;
    margin: 12px;
    padding-top: 5px;
    .needintegral {
      font-size: 12px;
      color: #cdcdcd;
    }

    .enoughintegral {
      font-size: 13px;
      color: #e59036;
    }
  }

  .isRechargeblock {
    position: relative;
    border: 1px solid #e59036;
    height: 60px;
    border-radius: 10px;
    margin: 12px;
    padding-top: 5px;
    overflow: hidden;
    background-color: #fffae7;
  }

  .isRechargeblock:before {
    content: '';
    position: absolute;
    right: 0px;
    bottom: 0;
    border: 17px solid #e59036;
    border-top-color: transparent;
    border-left-color: transparent;
  }
  .isRechargeblock::after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    right: 6px;
    bottom: 6px;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
}
.typetitle {
  width: 54px;
  height: 13px;
  margin-left: 27px;
  font-size: 13px;
  font-family: SimHei;
  font-weight: 400;
  color: #42436a;
  line-height: 24px;
}
.typecard {
  vertical-align: middle;
}
.type {
  width: 21px;
  height: 21px;
  background: #ffcf3d;
  border-radius: 5px;
  // width: 21px;
  // height: 21px;
  margin: 21px 18px 56px 27px;
  // background-color: #FFCF3D;
  // color: #fff;
  // border-radius: 5px;
  // width: 12px;
  // height: 16px;
  font-size: 21px;
  font-family: FYZYT-;
  font-weight: 400;
  color: #ffffff;
  line-height: 39px;
}
.card {
  font-size: 13px;
  font-family: SimHei;
  font-weight: 400;
  color: #42436a;
  line-height: 39px;
}
.paytypess {
    display: flex;
    justify-content: space-between;
    margin-left: 28px;
  //   margin: 48px 0 0 16px;
  img {
    vertical-align: middle;
    width: 21px;
    height: 21px;
    margin-right: 17px;
    font-size: 17px;
  }
  .change {
  }
}
.buttondiv {
  width: 100%;
  text-align: center;

  .submitbutton {
    width: 267px;
    height: 40px;
    color: #fff;
    background-color: #e59036;
    border-radius: 20px;
    border: none;
    margin-top: 48px;
  }
}
.agreement {
  width: 100%;
  text-align: center;
  vertical-align: middle;
  margin-top: 32px;

  span {
    color: #42436a;
    font-size: 12px !important;
  }
}
</style>
