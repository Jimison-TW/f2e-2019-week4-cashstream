<template>
  <div class="webAtm">
    <p class="stepType">Web ATM</p>
    <form @submit.prevent="submitHandler">
      <div class="row">
        <p class="row-title">付款銀行 :</p>
        <div class="select">
          <select v-model="selectedBank" :class="{ disabled: !selectedBank }" required>
            <option value disabled>選擇</option>
            <option v-for="bank in banks" :value="bank" :key="bank">{{ bank }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <ol>
          <li>請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。</li>
          <li>持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程</li>
        </ol>
      </div>

      <div class="row">
        <p class="row-title">填寫付款人信箱 :</p>
        <input type="email" required />
      </div>

      <div class="confirm row">
        <input type="checkbox" required />
        <p>
          請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱
          <br />
          <a href="javascript:;">第三方支付金流平台服務條款</a>
        </p>
      </div>

      <div class="btns row">
        <router-link :to="{ name: 'step1' }" class="btn">回上一步</router-link>
        <input type="submit" class="btn main" value="確認付款" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBank: ''
    }
  },
  computed: {
    banks() {
      return ['中國信託', '台新銀行', '華南銀行']
    }
  },
  methods: {
    submitHandler() {}
  }
}
</script>

<style lang="scss" scoped>
.webAtm {
  margin-bottom: 10px;
  letter-spacing: 1.5px;
  font-size: 14px;
  line-height: 1;
}
.select,
[type='email'] {
  width: 235px;
}
ol {
  padding-left: 1em;
  list-style-type: decimal;
}
li {
  line-height: 25px;
  & + li {
    margin-top: 1em;
  }
}
</style>
