<template>
  <div class="checkout">
    <v-popup
        v-if="isShowPopup"
        footer_btn="OK"
        :isCloseIcon= false
        @closePopup="hideModal"
    >
      <h2>Ваше письмо отправлено!</h2>
      <p>Наш менеджер свяжеться с Вами в близжайшее время!</p>
    </v-popup>
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
import {mapActions,} from 'vuex'
import VPopup from "../popup/v-popup";

export default {
  name: "v-checkout",
  components: {
    VPopup,
    VCheckoutForm

  },
  data() {
    return {
      name: null,
      isShowPopup: false,
      isCloseIcon: true,
      footer_btn: '',
      nameModal: ''
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
    showModal(){
      this.isShowPopup = true;
    },
    hideModal(){
      this.isShowPopup = false;

    },
    ...mapActions([
      'CLEAN_IN_CARD'
    ]),
    addOrder(productOrder) {
      axios({
        method: 'post',
        url: './php/sendmail.php',
        params: {},
        data: {
          productOrder
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
          .then(function(response) {
            this.CLEAN_IN_CARD();
            this.showModal();
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          })
      this.showModal();
    }
  }
}
</script>

<style scoped>

</style>