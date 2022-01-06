<template>
  <div class="checkout">
  <h2>Оформление заказа</h2>
    <div class="form-block">
      <v-checkout-form
        @order-submitted="addOrder"
      />
    </div>
  </div>
</template>

<script>
import VCheckoutForm from "./v-checkout-form";
import axios from "axios";

export default {
  name: "v-checkout",
  components: {
    VCheckoutForm
  },
  data() {
    return {
      name: null
    }
  },
  metaInfo() {
    const product_title = "Оформление заказа";
    const product_desc = "Средства для волос Olaplex (Олаплекс) для домашнего использования можно заказать у нас! Отличные цены, доставка по всей территории России!";
    return {
      title: `${product_title}`,
      titleTemplate: '%s - Олаплекс (Olaplex) Для Волос Купить В Интернет-Магазине',
      meta: [
        { name: 'description', content:  `${product_desc}`},
        { property: 'og:title', content: `${product_title}`},
        { property: 'og:site_name', content: 'Олаплекс (Olaplex)'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  },
  methods:{

    addOrder(productOrder) {
      axios.post(
          "../php/sendmail.php",
          productOrder, {
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            }
          }
      ).then(function() {
        console.log('SUCCESS!!');
        this.$state.card == [];
      })
          .catch(function() {
            console.log('FAILURE!!');
          });
    }
  },

}
</script>

<style scoped>

</style>