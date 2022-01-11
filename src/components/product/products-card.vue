<template>
  <section class="max-featured" >
    <v-notification
        :massages="massages"
    />
    <div class="max-section-title product">
      <h2><strong>{{prod.catalog_number }}</strong><br />  {{prod.name }}</h2>
    </div>
    <div class="max-feature-section container-fluid even2">
      <div class="row">
        <div class="col-md-2 visible-md visible-lg"></div>
        <div class="col-sm-12 col-md-5 offset-md-1 visible-xs visible-sm">
          <div :class="prod.img_class + '_m' ">
            <img :src="require('../../assets/images/' + prod.img)" alt="">
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
            <img :src="require('../../assets/images/' + prod.img)" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import vNotification from "../notifications/v-notification"


export default {
  name: "products-card",
  components: {
    vNotification
  },
  props:{
    prod_data:{
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {
      massages: []
    }
  },
  metaInfo() {
    const product_title = this.prod.catalog_number + ' ' + this.prod.name;
    return {
      title: `${product_title}`,
      titleTemplate: '%s - Олаплекс (Olaplex) Для Волос Купить В Интернет-Магазине',
      meta: [
        { name: 'description', content:  'Средства для волос Olaplex (Олаплекс) для домашнего использования можно ' +
              'заказать у нас! Отличные цены, доставка по всей территории России!'},
        { property: 'og:title', content: `${product_title}`},
        { property: 'og:site_name', content: 'Олаплекс (Olaplex)'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
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
      this.ADD_TO_CARD(this.prod)
      .then(()=>{
        let timeStamp = Date.now().toLocaleString();
        this.massages.unshift(
            {
              name: 'Товар добавлен в корзину',
              icon: 'check_circle',
              id: timeStamp
            }
        )
      })
    }
  },

  mounted() {
    this.$set(this.prod,'quantity', 1);

  }
}

</script>

<style scoped>

</style>