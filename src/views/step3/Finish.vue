<template>
  <div class="firstStep">
    <div class="stepTitle">
      <h2>您的訂單已完成付款！</h2>
      <div class="content">
        <div class="illust">
          <icon iconName="finish" width="160" height="160"/>
        </div>
        <p>稍後將寄送訂單詳細資訊至您的E-mail</p>
        <router-link :to="{ name: 'step1' }" class="btn main">返回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  components:{
    Icon
  }
}
</script>


<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.illust {
    position: relative;
    margin: 84px auto 68px;
    width: 146px;
    height: 146px;
    border-radius: 50%;
    background-color: #b5ffe4;
}
img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: none;
    width: 166px;
    transform: translate(-50%, -50%);
}
p {
    margin-bottom: 30px;
    letter-spacing: 1.5px;
    font-size: 14px;
}

</style>