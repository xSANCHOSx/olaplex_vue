<template>
<div>
  <vSlider/>
  <vAboutUs/>
  <section id="catalog">

    <div class="container-fluid">
      <div class="row">
        <catalog_item
            v-for="(product,index) in PRODUCTS"
            :product_data="product"
            :product_index = "index"
            @addToCard = "addToCard"
            :key="product.id"/>

      </div>
    </div>
  </section>
  <v-work/>
  <v-examples/>
  <v-testimonials/>
  <v-who-use/>
  <v-delivery/>
<!--  <products-card />-->
</div>
</template>
<script>

import catalog_item from './catalog-item';
import {mapActions, mapGetters} from 'vuex';
// import ProductsCard from "./products-card";
import vSlider from "./main-page/v-slider";
import vAboutUs from "./main-page/v-about_us";
import vWork from "./main-page/work-block"
import vExamples from "./main-page/real-examples"
import vTestimonials from "./main-page/v-testimonials"
import vWhoUse from "./main-page/v-who_use"
import vDelivery from "./main-page/v-delivery"

export default{
    name: "catalog",
    components: {
      //ProductsCard,
      catalog_item,
      vSlider,
      vAboutUs,
      vWork,
      vExamples,
      vTestimonials,
      vWhoUse,
      vDelivery
    },
    props:{},
    data() {
      return {}
    },
    metaInfo() {
      const product_title = "Олаплекс (Olaplex) Для Волос Купить В Интернет-Магазине";
      const product_desc = "Олаплекс (Olaplex) Для Волос Купить В Интернет-Магазине";
      return {
        title: `${product_title}`,
        titleTemplate: '%s',
        meta: [
          { name: 'description', content:  `${product_desc}`},
          { property: 'og:title', content: `${product_title}`},
          { property: 'og:site_name', content: 'Олаплекс (Olaplex)'},
          {property: 'og:type', content: 'website'},
          {name: 'robots', content: 'index,follow'}
        ]
      }
    },
    computed:{
      ...mapGetters([
        'PRODUCTS',
        'CARD'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'ADD_TO_CARD'
      ]),
      addToCard (data) {
        this.ADD_TO_CARD(data)
      },
      addToCardInProduct(data){
        this.ADD_TO_CARD(data);
      }
    },
  mounted() {
    this.GET_PRODUCTS()
  }

}
</script>
<style lang="scss">
.catalog{
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>