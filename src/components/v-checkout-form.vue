<template>
  <div class="container">
    <form class="order-form" @submit.prevent="onSubmit">
      <div id="alert-field" v-if="errors.length" class="alert">
        <b>Исправьте все ошибки:</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <div class="form-group col-xs-12">
        <label for="name-field">ФИО</label>
        <input type="text" v-model="name" class="form-control" id="name-field" name="name-field" placeholder="ФИО" >
      </div>

      <div class="form-group col-xs-12">
        <label for="email-field">Телефон</label>
        <input type="number" class="form-control" v-model="phone" id="phone-field" name="phone-field" placeholder="Телефон" >
      </div>

      <div class="form-group col-xs-12">
        <label for="email-field">Email</label>
        <input type="email" class="form-control" v-model="email" id="email-field" name="email-field" placeholder="Email" >
      </div>

      <div class="form-group col-xs-12">
        <label>Адрес</label>
        <textarea  v-model="adress" class="form-control" placeholder="Введите адрес"></textarea>
      </div>

      <div class="form-group col-xs-12">
        <button type="submit" class="btn btn-info">Отправить</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "v-checkout-form",
  data() {
    return {
      errors: [],
      name: null,
      phone: null,
      email: null,
      adress: null,

    }
  },
 methods: {
   onSubmit() {
     this.errors = []
     if(this.name && this.phone && this.email && this.adress) {
       console.log('отрабатывает');
     let productOrder = {
       name: this.name,
       phone: this.phone,
       email: this.email,
       adress: this.adress,
       products: this.$store.state.card
     }
     this.$emit('order-submitted', productOrder)
     this.name = null
     this.phone = null
     this.email = null
     this.adress = null
   } else {
       console.log('не отрабатывает');
       if(!this.name) this.errors.push("Поле 'Имя' не заполнено.")
       if(!this.phone) this.errors.push("Поле 'Телефон' не заполнено.")
       if(!this.email) this.errors.push("Поле 'Email' не заполнено.")
       if(!this.adress) this.errors.push("Поле 'Адрес' не заполнено.")
     }
   }
 }
}

</script>

<style lang="scss">
.container{
  margin: 20px auto;
}
.order-form{
  max-width: 600px;
  margin: 0 auto;
}
.btn{
  width: 100%;
}
</style>