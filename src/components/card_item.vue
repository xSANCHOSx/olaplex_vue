<template>

    <div class="card_item">
    <img class="card_item__image" :src="card_item_data.image" >
    <div class="card_item__info">
      <p>{{ card_item_data.name }}</p>
      <p>{{card_item_data.price }}</p>
      <p>{{card_item_data.article }}</p>
    </div>
    <div class="card-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="qty_btn" @click="decrementItem">-</span>
        {{card_item_data.quantity}}
        <span class="qty_btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="delete_From_Card">Delete</button>
  </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image{
    max-width: 50px;

  }
  .qty_btn{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    border-radius: $radius;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px 0 #e0e0e0;
  }
}
</style>