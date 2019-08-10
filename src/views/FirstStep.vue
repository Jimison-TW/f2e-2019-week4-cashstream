<template>
  <div class="firstStep">
    <div class="stepTitle">
      <h2>STEP1. 選擇付款方式</h2>
    </div>
    <div class="items">
      <label v-for="type in types" :key="type.name" :class="{ active: selected === type.name }">
        <input type="radio" name="type" :value="type.name" @change="setType" />
        <icon class="material-icons" :iconName="type.icon" width="50" height="50"></icon>
        {{ type.displayName }}
      </label>
    </div>
    <router-link :to="{ name: selected }" class="btn main">下一步</router-link>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'

export default {
  data() {
    return {
      selected: 'creditCard',
      test: 'credit-card'
    }
  },
  components: {
    Icon
  },
  computed: {
    types() {
      return [
        {
          name: 'creditCard',
          displayName: '信用卡/金融卡',
          icon: 'credit-card'
        },
        {
          name: 'unionPay',
          displayName: '銀聯卡',
          icon: 'unionpay'
        },
        {
          name: 'shop',
          displayName: '超商付款',
          icon: 'shop'
        },
        {
          name: 'webAtm',
          displayName: 'Web ATM',
          icon: `web-atm`
        },
        {
          name: 'atm',
          displayName: 'ATM 轉帳',
          icon: `atm`
        }
      ]
    }
  },
  methods: {
    setType() {
      this.selected = document.querySelector('[name=type]:checked').value
    }
  }
}
</script>

<style lang="scss" scoped>
.firstStep {
  padding-right: 40px;
  padding-bottom: 60px;
  padding-left: 40px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
}
.items {
  display: flex;
  margin-top: 85px;
  margin-bottom: 44px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 859px) {
    margin-top: 44px;
  }
}
label {
  display: flex;
  flex-direction: column;
  margin: 7.5px;
  width: 161px;
  height: 139px;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: #000;
  letter-spacing: 1.5px;
  font-size: 14px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &.active {
    background-color: #36b996;
    color: #fff;
  }
}
[type='radio'] {
  display: none;
}
i {
  font-size: 5em;
}
.btn {
  float: right;
}
</style>
