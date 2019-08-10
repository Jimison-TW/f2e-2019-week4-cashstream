<template>
  <aside class="info" :class="{ open }">
    <div class="content">
      <template v-if="!finish">
        <p class="title">訂單資訊</p>
        <dl>
          <dt>商品名稱：</dt>
          <dd>Iphone XR手機殼 x1</dd>
          <dt>訂單編號：</dt>
          <dd>17485739</dd>
          <dt>訂單金額：</dt>
          <dd>NT$ 600</dd>
        </dl>
      </template>
      <template v-else>
        <p class="finish">Finish</p>
      </template>
    </div>
    <a href @click.prevent="open = !open">訂單資訊</a>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      isMobile: false
    }
  },
  computed: {
    finish() {
      return this.$route.name === 'finish' || this.$route.name === 'order'
    }
  }
}
</script>

<style scoped lang="scss">
.info {
  position: static;
  z-index: 2;
  @media (max-width: 859px) {
    position: fixed;
    top: 100px;
    left: -234px;
    transition: transform 0.4s;
  }
  &.open {
    @media (max-width: 859px) {
      transform: translateX(234px);
    }
  }
}
.content {
  padding: 25px;
  min-height: 281px;
  width: 234px;
  border-radius: 0 0 10px 0;
  border-radius: 10px 0 0 10px;
  background: #f3f3f3;
  letter-spacing: 1.7px;
  @media (max-width: 859px) {
    border-radius: 0;
  }
}
.title {
  margin-bottom: 1em;
  letter-spacing: 2px;
  font-size: 18px;
}
dd + dt {
  margin-top: 1em;
}
a {
  position: absolute;
  top: 0;
  left: 100%;
  display: none;
  padding: 1em 0.7em calc(1em - 5px) 0.7em;
  border-radius: 0 10px 10px 0;
  background: #f3f3f3;
  color: #000;
  letter-spacing: 5px;
  font-size: 16px;
  writing-mode: vertical-lr;
  @media (max-width: 859px) {
    display: block;
  }
}
.finish {
  font-size: 2em;
}
</style>
