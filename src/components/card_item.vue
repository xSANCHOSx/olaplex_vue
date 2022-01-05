<template>
          <tr>
            <td class="checkout_img">
              <img class="card_item__image" :src="require('../assets/images/' + card_item_data.img)">
            </td>
            <td class="checkout_name">
              {{ card_item_data.name }}
            </td>
            <td class="checkout_price">
              {{card_item_data.price }} руб.
            </td>
            <td class="checkout_qty">
              <span>
                <span class="qty_btn" @click="decrementItem">-</span>
                {{card_item_data.quantity}}
                <span class="qty_btn" @click="incrementItem">+</span>
              </span>
            </td>
          <td class="checkout_delete">
            <div class="card-item__delete" @click="delete_From_Card">
              <img class="close_btn" src="../assets/images/close.png" alt="close">
            </div>
          </td>
          </tr>

</template>

<script>

export default {
  name: "card_item",
  components: {},
  props:{
    card_item_data:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  computed:{},
  methods: {

    delete_From_Card(){
      this.$emit("delete_From_Card")
    },
    decrementItem () {
      this.$emit("decrement")
    },
    incrementItem () {
      this.$emit("increment")
    }
  }

}
</script>

<style lang="scss">
.card_item{
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    max-width: 50px;
    margin-block: 30px;
  }
  .close_btn{
    width: 30px;
  }
  .qty_btn{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 19px;
    margin: 0 5px;
    justify-content: center;
    height: 30px;
    width: 30px;
    box-sizing: border-box;
    border-radius: $radius;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px 0 #e0e0e0;
  }
}
.checkout_name{
    width: 56%;
  }
.checkout_img,
.checkout_price,
.checkout_qty{
  width: 13%;
  text-align: center;
}
.checkout_delete{
  width: 5%;
}
</style>