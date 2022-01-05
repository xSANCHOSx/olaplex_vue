<template>
  <section class="max-featured">
    <div class="max-section-title product">
      <h2><strong>{{prod.catalog_number }}</strong><br />  {{prod.name }}</h2>
    </div>
    <div class="max-feature-section container-fluid even2">
      <div class="row">
        <div class="col-md-2 visible-md visible-lg"></div>
        <div class="col-sm-12 col-md-5 offset-md-1 visible-xs visible-sm">
          <div :class="prod.img_class + '_m' ">
            <img :src="require('../assets/images/' + prod.img)" alt="">
          </div>
        </div>
        <div class="col-sm-12 col-md-5  tovar-name animate--one" data-animate="fadeInDown" data-duration="3">
          <div class="col-xs-12 buy">
            <p v-if="prod.old_price">Цена:<span class="price_old">{{prod.old_price }}</span> <strong> {{prod.price }}</strong> РУБ</p>
            <p v-else>Цена:<strong>{{prod.price }}</strong> РУБ</p>
            <button class="b1c" @click="addToCardInProduct()">Купить</button>
          </div>
          <!--noindex--><p style="text-align: justify;">{{ prod.desc_text }}
          </p><!--/noindex-->
          <p><strong>{{ prod.desc_short }}</strong></p>
        </div>
        <div class="col-sm-12 col-md-5 visible-md visible-lg offset-md-1">
          <div :class="prod.img_class" >
            <img :src="require('../assets/images/' + prod.img)" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {mapGetters, mapActions} from "vuex";


export default {
  name: "products-card",
  props:{
    prod_data:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    prod () {
      return this.$store.getters['GET_PRODUCT_PO_ID'](this.$route.params.id);
    }
  },
  methods:{
     ...mapActions([
         'ADD_TO_CARD'
     ]),
    ...mapGetters([
      'GET_PRODUCT_PO_ID'
    ]),
    addToCardInProduct() {
      this.ADD_TO_CARD(this.prod);
    }
  },

  mounted() {
    this.$set(this.prod,'quantity', 1);
  }
}

</script>

<style scoped>

</style>