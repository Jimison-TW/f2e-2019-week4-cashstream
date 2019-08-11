import Vue from 'vue';
import Router from 'vue-router';
import FirstStep from './views/FirstStep.vue';
import SecondStep from './views/SecondStep.vue';
import ThirdStep from './views/ThirdStep.vue';
import CreditCard from './views/step2/CreditCard.vue'
import WebAtm from './views/step2/WebAtm.vue'
import Shop from './views/step2/Shop.vue'
import Finish from './views/step3/Finish.vue'
import Order from './views/step3/Order.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'step1',
      component: FirstStep
    },
    {
      path: '/step2',
      name: 'step2',
      component: SecondStep,
      children: [
        {
          path: 'creditCard',
          name: 'creditCard',
          component: CreditCard
        },
        {
          path: 'webAtm',
          name: 'webAtm',
          component: WebAtm
        },
        {
          path: 'shop',
          name: 'shop',
          component: Shop
        }
      ]
    },
    {
      path: '/step3',
      name: 'step3',
      component: ThirdStep,
      children: [
        {
          path: 'finish',
          name: 'finish',
          component: Finish
        },
        {
          path: 'order',
          name: 'order',
          component: Order
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
