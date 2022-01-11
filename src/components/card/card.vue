<template>
    <div class="card">
      <v-notification
          :massages="massages"
      />
      <h2>Корзина товаров</h2>
      <div class="card__wrap" v-if="card_data.length">
        <div class="card_item">
          <div class="table-responsive">
            <table class="table table-hover table-bordered">
              <thead>
              <tr>
                <th>Картинка</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th></th>
              </tr>
              </thead>
              <tbody id="cart">
                <cardItem
                v-for="(item, index) in card_data"
                :key="item.id"
                :card_item_data = "item"
                @delete_From_Card = "delete_From_Card(index)"
                @increment = "increment(index)"
                @decrement = "decrement(index)"
                />
              </tbody>
            </table>
          </div>
        </div>
        <div class="card__delivery">
          <h2 class="delivery_title">Доставка</h2>
            <div class="card__delivery_wrap">
              <div class="msk">
                Москва:
                <span v-if="(card_Total_Cost > 2500)">Беcплатно</span>
                  <span v-else>+250 руб </span>
              </div>
              <div class="regions">
                Регион:
                <span v-if="(card_Total_Cost > 10000)">Беcплатно</span>
                  <span v-else>+350 руб </span>
              </div>
            </div>

        </div>
        <div class="card__total">
          <p>Общая сумма: {{ card_Total_Cost }} руб.</p>
          <router-link :to="{ name: 'v-checkout'}">
            <button class="btn btn-info">Оформить заказ</button>
          </router-link>
        </div>
      </div>
      <div class="emtry" v-else>
        <p>Корзина пуста</p>
        <router-link :to="{ name: 'catalog'}">
          <button class="btn btn-info to-main">На главную</button>
        </router-link>
      </div>
    </div>

</template>
<script>
import cardItem from './card_item'
import {mapActions} from "vuex"
import vNotification from "../notifications/v-notification"

export default{
    name: "card",
    components: {
      cardItem,
      vNotification
    },
     data() {
        return {
          massages: []
        }
    },
  metaInfo() {
    const product_title = "Корзина товаров";
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
    computed:{
      card_Total_Cost() {
        let result = []
        if(this.card_data.length) {
          for (let item of this.card_data) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          })

        return result;
        }else{
          return 0;
        }
      },
      card_data() { return this.$store.state.card }
    },
    methods:{
      ...mapActions([
        'DELETE_FROM_CARD',
        'INCREMENT_CARD_ITEM',
        'DECREMENT_CARD_ITEM'
      ]),
      increment(index){
        this.INCREMENT_CARD_ITEM(index)
      },
      decrement(index){
        this.DECREMENT_CARD_ITEM(index)
      },
      delete_From_Card(index){
        this.DELETE_FROM_CARD(index)
        .then(()=>{
          let timeStamp = Date.now().toLocaleString();
          this.massages.unshift(
              {
                name: 'Товар удален из корзины',
                icon: 'error',
                id: timeStamp
              }
          )
        })
      }

    },


}
</script>
<style lang="scss">
.card{
    margin-top: 100px;
    min-height: 50vh;
  &__wrap,
  .emtry{
    width: 960px;
    margin: 0 auto;
  }
  .emtry{
    padding: 20px;
    font-size: 17px;
    text-align: center;
  }
  h2{
    text-align: center;
  }
  &__total{
    padding: $padding*2 $padding*3;
    box-shadow: 0 0 8px 0 #e0e0e0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: $margin*4;
  }
  &__delivery{
    padding: $padding*2 $padding*3;
    box-shadow: 0 0 8px 0 #e0e0e0;
    font-size: 20px;
    margin-bottom: $margin*4;
  }
.delivery_title{
      margin-top: 0;
    }
  &__delivery_wrap{
    display: flex;
    justify-content: space-between;
  }
  .total__name{
    margin-right: $margin*2;
  }
  .btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
}
</style>