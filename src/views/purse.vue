<template>
  <div class="allBox">
    <div class="topBgi">
      <van-nav-bar title="钱包" left-arrow @click-left="onClickLeft" />
      <div class="content clearfix">
        <img src="@/assets/img/coin.png" alt="" />
        <span class="money">120.00</span>
      </div>
      <div class="detail">
        <span @click="click">明细 | </span>
        <img src="@/assets/img/down.png" alt="" />
      </div>
      <!-- <router-view /> //就这个 然后用v-if 哦哦哦  好像明白了  我还有个样式没出来   -->
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
            <img
              style="width: 14px; height: 14px; display: inline"
              src="@/assets/img/coin.png"
            />
            <i style="font-size: 20px; font-style: normal">{{
              item.num * 10
            }}</i>
          </div>
          <div class="recharge">￥{{ item.num }}</div>
        </van-col>
      </van-row>
    </div>
    <!-- 支付方式 -->
    <van-radio-group v-model="payType">
      <van-cell-group style="margin-right: 30px">
        <van-cell class="paytype" clickable @click="payTypes(payType)">
          <img src="@/assets/img/zhifubao.png" alt="" />支付宝支付
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <!-- 确认充值 -->
    <div class="buttondiv">
      <button class="submitbutton" @click="handelSubmit">确认充值</button>
    </div>
    <div class="agreement">
      <input
        type="checkbox"
        v-model="agreement"
        @click="clickAgreement(agreement)"
      />
      <span>我已阅读并同意遵守《用户充值协议》</span>
      <!-- <van-radio-group v-model="checked">
          <van-radio name="1" checked-color="#ee0a24">单选框 1</van-radio>
        </van-radio-group> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data() {
    return {
      isActive: '',
      amount: [
        { num: 6 },
        { num: 28 },
        { num: 58 },
        { num: 88 },
        { num: 158 },
        { num: 300 }
      ],
      // 支付方式
      payType: '',
      // 支付金额
      money: '',
      //checked同意条款
      agreement: ''
    }
  },
  methods: {
    onClickLeft() {
      console.log('返回')
    },
    click() {
      console.log('明细')
      this.$router.push({
        name: 'mingxi'
      })
    },
    vouterFun(i, num) {
      this.isActive = i
      console.log(i, num)
      this.money = num
    },
    selectnumber(val) {
      console.log('选择', val)
    },
    payTypes(val) {
      console.log(val)
      this.payType = val
    },
    // 确认支付
    handelSubmit() {
      if (this.money === '') {
        this.$notify('请选择充值金额')
        return
      }
      if (this.payType === '') {
        this.$notify('请选择支付方式')
        return
      }
      if (this.agreement !== true) {
        this.$notify('请勾选协议')
        return
      }

      const params = {
        money: this.money,
        payType: this.payType
      }
      console.log(params)
    },
    clclik() {
      console.log(this.checked)
    },
    clickAgreement(val) {
      this.agreement = val
      console.log(this.agreement)
    }
  }
}
</script>

<style scoped lang="less">
.topBgi {
  position: relative;
  width: 375px;
  height: 175px;
  margin-bottom: 54px;
  background-image: url(@/assets/img/bgi1.png);
  text-align: center;
  z-index: 9;

  .content {
    position: absolute;
    top: 102px;
    left: 6px;
    width: 364px;
    height: 127px;
    line-height: 127px;
    background-image: url(@/assets/img/bgi2.png);
    background-size: cover;

    .money {
      font-size: 18px;
      font-weight: 700;
    }

    img {
      width: 33px;
      height: 33px;
      vertical-align: middle;
      margin-right: 16px;
    }

    .money {
      color: #fff;
    }
  }

  .detail {
    position: absolute;
    z-index: 3;
    top: 187px;
    right: 38px;
    height: 30px;
    font-size: 16px;
    color: #fff;

    img {
      display: inline-block;
      width: 8px;
      height: 8px;
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

    .recharge {
      font-size: 13px;
      color: #cc89ff;
    }
  }

  .isRechargeblock {
    position: relative;
    border: 1px solid #cc89ff;
    height: 60px;
    border-radius: 10px;
    margin: 12px;
    padding-top: 5px;
    overflow: hidden;
    background-color: #f9efff;

    .recharge {
      font-size: 13px;
      color: #cc89ff;

      .right {
        width: 28px;
        height: 28px;
      }
    }
  }

  .isRechargeblock:before {
    content: '';
        position: absolute;
        right: 0px;
        bottom: 0;
        border: 17px solid #cc89ff;
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

.paytype {
  margin: 48px 0 0 16px;

  img {
    vertical-align: middle;
    width: 21px;
    height: 21px;
    margin-right: 17px;
    font-size: 17px;
  }
}

.buttondiv {
  width: 100%;
  text-align: center;

  .submitbutton {
    width: 267px;
    height: 40px;
    color: #fff;
    background: linear-gradient(0deg, #ff5989 0%, #fd9cbc 100%);
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
