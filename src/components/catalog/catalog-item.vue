<template>

  <div class="max-feature-section container-fluid even" v-if="!(product_index%2)">
    <div class="row">
        <div class="col-sm-12 col-md-5 visible-md visible-lg ">
            <div :class="product_data.img_class" >
              <img :src="require('../../assets/images/' + product_data.img)" alt="">
            </div>
        </div>
        <div class="col-sm-12 col-md-5 visible-xs visible-sm">
            <div :class="product_data.img_class + '_m' ">
              <img :src="require('../../assets/images/' + product_data.img)" alt="">
            </div>
        </div>
      <div class="col-sm-12 col-md-5 tovar-name">
        <h2>
          <router-link
            :to="linkOpen"
            tag="a"
            class="name_link"
          >
          <strong>{{product_data.catalog_number }}</strong><br />
          {{product_data.name }}
        </router-link>
        </h2>
        <div class="col-xs-12 buy">
          <p v-if="product_data.old_price">Цена:
            <span class="price_old">{{product_data.old_price }}</span>
            <strong> {{product_data.price }}</strong> РУБ</p>
          <p v-else>Цена:<strong>{{product_data.price }}</strong> РУБ</p>
          <button class="b1c" @click="addToCard()">Купить</button>
        </div>
        <p style="text-align: justify;" v-if="product_data.is_desc_noindex">
          <!--noindex-->
            {{ product_data.desc_text }}
          <!--/noindex-->
        </p>
        <p style="text-align: justify;" v-else> {{ product_data.desc_text }} </p>
        <router-link
            :to="linkOpen"
            tag="a"
            class="name_link"
        ><p><strong>{{ product_data.desc_short }}</strong></p>
        <p v-if="product_data.desc_short2"><strong>{{ product_data.desc_short2 }}</strong></p>
        </router-link>
          <p style="text-align: justify;" v-if="product_data.dop_des">{{ product_data.dop_desc }}</p>
      </div>
    </div>
  </div>
  <div class="max-feature-section container-fluid" v-else>
  <div class="row">
      <div class="col-md-2 visible-md visible-lg"></div>
      <div class="col-sm-12 col-md-5 visible-xs visible-sm">
        <div :class="product_data.img_class + '_m' ">
          <img :src="require('../../assets/images/' + product_data.img)" alt="">
        </div>
      </div>
      <div class="col-sm-12 col-md-5  tovar-name">
          <h2>
            <router-link
                :to="linkOpen"
                tag="a"
                class="name_link"
            >
              <strong>{{product_data.catalog_number }}</strong><br />  {{product_data.name }}
            </router-link>
          </h2>
          <div class="col-xs-12 buy">
              <p v-if="product_data.old_price">Цена:<span class="price_old">{{product_data.old_price }}</span> <strong> {{product_data.price }}</strong> РУБ</p>
              <p v-else>Цена:<strong>{{product_data.price }}</strong> РУБ</p>
              <button class="b1c" @click="addToCard()">Купить</button>
          </div>
          <p style="text-align: justify;" v-if="product_data.is_desc_noindex">
            <!--noindex-->
              {{ product_data.desc_text }}
            <!--/noindex-->
          </p>
          <p style="text-align: justify;" v-else> {{ product_data.desc_text }} </p>
        <router-link
            :to="linkOpen"
            tag="a"
            class="name_link"
        >
        <p><strong>{{ product_data.desc_short }}</strong></p>
        <p v-if="product_data.desc_short2"><strong>{{ product_data.desc_short2 }}</strong></p>
        </router-link>
        <p style="text-align: justify;" v-if="product_data.dop_desc">{{ product_data.dop_desc }}</p>
      </div>
      <div class="col-sm-12 col-md-5 visible-md visible-lg">
        <div :class="product_data.img_class">
          <img :src="require('../../assets/images/' + product_data.img)" alt="">
        </div>
      </div>
  </div>
</div>
</template>
<script>

export default{
    name: "catalog-item",
    components: {},
    props:{
      product_data:{
        type: Object,
        default() {
          return {}
        }
      },
      product_index:{
        type: Number,
        default() {
          return {}
        }
      }
    },
     data() {
        return {}
    },
    computed: {
      linkOpen () {
        return `/product/${this.product_data.id}`;
      }
    },
    methods:{
      addToCard() {
        this.$emit('addToCard', this.product_data)
      }
    },
    mounted() {
      this.$set(this.product_data,'quantity', 1)
    }

}
</script>
<style lang="scss" >
.catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  border-radius: $radius;
  &__price{
    padding: $padding 0;
  }
}
</style>