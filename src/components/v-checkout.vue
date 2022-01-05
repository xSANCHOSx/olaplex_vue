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