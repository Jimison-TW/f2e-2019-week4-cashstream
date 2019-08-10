<template>
  <div class="container">
    <Step></Step>
    <Info></Info>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Step from './components/Step.vue';
import Info from './components/Info.vue';

export default {
  name: 'app',
  components: {
    Step,
    Info
  }
};
</script>

<style src="@/assets/sass/style.scss" lang="scss"></style>
