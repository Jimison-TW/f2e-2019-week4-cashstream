<template>
  <div class="secondStep">
    <div class="stepTitle">
      <h2>STEP2. 填寫付款資訊</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.secondStep {
  padding: 0 65px 50px;
  @media (max-width: 859px) {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
