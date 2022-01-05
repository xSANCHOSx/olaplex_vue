<template>
  <header class="sticky">
    <div class="container-fluid">
      <nav class="navbar navbar-default ">

        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img id="logo" src="images/logo.png" alt="Olaplex Logo">
          </a>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav main">
            <li><a href="#max-aboutus-section">Что это?</a></li>
            <li><a href="#max-featured-section">Продукция</a></li>
            <li><a href="#max-work-section">Как использовать</a></li>
            <li><a href="#max-purchase-section">Доставка</a></li>
            <li><a href="/info.html">Справка</a></li>
          </ul>
          <div class="number navbar-brand hidden-sm hidden-xs"><a href="tel:+74950322929">+7 (495) 032-29-29</a></div>
          <router-link :to="{ name: 'cart'}">
          <div class="cart visible-lg visible-md cart_full">
            <img src="images/basket.png" /><span class="basketwidjet2">({{ CARD.length }})</span>
          </div>
          </router-link>
        </div>
        <div class="number navbar-brand hidden-md hidden-lg"><a href="tel:+74950322929">+7 (495) 032-29-29</a></div>
        <router-link :to="{ name: 'cart'}">
          <div class="cart catalog__link_to_card visible-sm visible-xs cart_mobile">
            <img src="images/basket.png" /><span class="basketwidjet2">({{ CARD.length }})</span>
          </div>
        </router-link>
        <!-- /.navbar-collapse -->
      </nav>
    </div>
    <!-- /.container-fluid -->
  </header>


</template>


<script>

import {mapGetters} from "vuex";

export default {
  name: "v-heder",
  computed:{
    ...mapGetters([
      'CARD'
    ])
  },
}
</script>

<style lang="scss">
.basketwidjet2{
  margin-left: 5px;
}
.cart{
  padding: 10px 0px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 20px;
  font-family: Montserrat;
  float: left;
  line-height: 20px;
}
.cart img{
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

</style>