<template>
  <div class="step" :class="displayStep">
    <div class="step-container">
      <i v-for="num in 3" :key="num">{{ num }}</i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    step() {
      console.log(this.$store)
      return this.$store.getters.step || 1
    },
    displayStep() {
      return `step${this.step}`
    }
  }
}
</script>

<style lang="scss" scoped>
.step {
  padding-left: 234px;
  width: 100%;
  @media (max-width: 859px) {
    padding-left: 0;
  }
  &-container {
    position: relative;
    display: flex;
    margin: 40px auto;
    max-width: 300px;
    justify-content: space-between;
    align-items: center;
    &::before {
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      @at-root {
        .step.step1 .step-container::before,
        .step.step2 .step-container::before {
          background-image: linear-gradient(to right, #8defcb, #d8d8d8);
        }
        .step.step3 .step-container::before {
          background-color: #8defcb;
        }
      }
    }
  }
  i {
    $bgColor: #8defcb #d8d8d8 #afafaf;
    position: relative;
    z-index: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        background-color: nth($bgColor, $i);
      }
    }
    @at-root {
      .step.step1 i:nth-child(1) {
        background-color: nth($bgColor, 1);
      }
      .step.step2 i:nth-child(1),
      .step.step2 i:nth-child(2) {
        background-color: nth($bgColor, 1);
      }
      .step.step3 i {
        background-color: nth($bgColor, 1);
      }
    }
  }
}
</style>
