<template>
  <div :style="{ width: width + 'px', height: height + 'px' }">
    <component :is="currentIcon"></component>
  </div>
</template>

<script>
import iconCreditCard from '@/assets/svg/credit-card.svg'
import iconAtm from '@/assets/svg/atm.svg'
import iconBackThree from '@/assets/svg/back-three.svg'
import iconFinish from '@/assets/svg/finish.svg'
import iconFooterBackground from '@/assets/svg/footer-background.svg'
import iconJcb from '@/assets/svg/jcb.svg'
import iconMastercard from '@/assets/svg/mastercard.svg'
import iconShop from '@/assets/svg/shop.svg'
import iconUnionpay from '@/assets/svg/unionpay.svg'
import iconVisa from '@/assets/svg/visa.svg'
import iconWebAtm from '@/assets/svg/web-atm.svg'

export default {
  name: 'icon',
  props: ['iconName', 'width', 'height'],
  components: {
    iconCreditCard,
    iconAtm,
    iconBackThree,
    iconFinish,
    iconFooterBackground,
    iconJcb,
    iconMastercard,
    iconShop,
    iconUnionpay,
    iconVisa,
    iconWebAtm
  },
  computed: {
    currentIcon() {
      return 'icon-' + this.iconName
    }
  }
}
</script>
