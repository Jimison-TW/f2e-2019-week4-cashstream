<template>
  <div class="creditCard">
    <p class="stepType">信用卡/金融卡</p>
    <form @submit.prevent="submitHandler">
      <div class="pay row">
        <label>
          <div class="radio">
            <input type="radio" name="pay" checked />
            <i class="check"></i>
          </div>
          一次付款
        </label>
        <label>
          <div class="radio">
            <input type="radio" name="pay" />
            <i class="check"></i>
          </div>
          分期付款
        </label>
      </div>

      <div class="cardNum row">
        <p class="row-title">信用卡號 :</p>
        <ul>
          <li>
            <input type="text" @keyup="focusHandler" maxlength="4" pattern="\d{4}" required />
          </li>
          <li></li>
          <li>
            <input type="text" @keyup="focusHandler" maxlength="4" pattern="\d{4}" required />
          </li>
          <li></li>
          <li>
            <input type="text" @keyup="focusHandler" maxlength="4" pattern="\d{4}" required />
          </li>
          <li></li>
          <li>
            <input type="text" @keyup="focusHandler" maxlength="4" pattern="\d{4}" required />
          </li>
        </ul>
      </div>

      <div class="valid row">
        <p class="row-title">有效年月 :</p>
        <ul>
          <li>
            <div class="select">
              <select v-model="cardMonth" :class="{ disabled: !cardMonth }" required>
                <option value disabled>選擇</option>
                <option v-for="m in 12" value="m" :key="m">{{ displayMonth(m) }}</option>
              </select>
            </div>
          </li>
          <li>/</li>
          <li>
            <div class="select">
              <select v-model="cardYear" :class="{ disabled: !cardYear }" required>
                <option value disabled>選擇</option>
                <option v-for="y in years" value="y" :key="y">{{ y }}</option>
              </select>
            </div>
          </li>
          <li>年</li>
        </ul>
      </div>

      <div class="code row">
        <p class="row-title">背面末三碼</p>
        <input type="text" maxlength="3" pattern="\d{3}" required />
      </div>

      <div class="email row">
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
    cardMonth: '',
    cardYear: ''
  }),
  computed: {
    years() {}
  },
  methods: {
    displayMonth(month) {},
    focusHandler() {}
  }
}
</script>

<style lang="scss" scoped>
.creditCard {
  margin-bottom: 10px;
  letter-spacing: 1.5px;
  font-size: 14px;
  line-height: 1;
}
.pay {
  display: flex;
  label {
    display: flex;
    align-items: center;
    & + label {
      margin-left: 30px;
    }
  }
  .radio {
    position: relative;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
  [type='radio'] {
    margin: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #979797;
    border-radius: 50%;
    appearance: none;
    &:checked + i {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #41c897;
    }
    &:focus {
      outline: none;
    }
  }
}
.cardNum {
  ul {
    display: flex;
    align-items: center;
  }
  li:nth-child(even) {
    margin: 0 10px;
    width: 10px;
    height: 1px;
    background-color: #000;
    flex-shrink: 0;
    @media (max-width: 859px) {
      margin-right: 4px;
      margin-left: 4px;
      width: 4px;
    }
  }
  [type='text'] {
    padding: 0;
    width: 61px;
    text-align: center;
  }
}
.valid {
  ul {
    display: flex;
    align-items: center;
  }
  li {
    &:nth-child(even) {
      margin: 0 10px;
    }
  }
  .select {
    width: 93px;
  }
}
[type='text'] {
  width: 93px;
}
[type='email'] {
  width: 235px;
}
</style>
