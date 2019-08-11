<template>
  <div class="shop">
    <p class="stepType">超商付款</p>
    <form @submit.prevent="submitHandler">
      <div class="row">
        <p class="row-title">付款超商 :</p>
        <div class="select">
          <select v-model="selectedShop" :class="{ disabled: !selectedShop }" required>
            <option value disabled>選擇</option>
            <option v-for="shop in shops" :value="shop" :key="shop">{{ shop }}</option>
          </select>
        </div>
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
  data: () => ({
    selectedShop: ''
  }),
  computed: {
    shops() {
      return ['7-11', '全家', 'OK超商']
    }
  },
  methods: {
    submitHandler() {
      this.$router.push({ name: 'order' })
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
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
</style>
