<template>
  <div id="app">
    <vHeder2/>
      <div class="shop">
       <router-view/>
      </div>
    <vFoter2/>
  </div>
</template>

<script>
import vHeder2 from "./v-heder";
import vFoter2 from "./v-foter";
export default{
    name: "main-wrapper",
  components: {
      vHeder2,
      vFoter2
  },
  props:{},
    data() {
        return {
            title: "main-wrapper"
        }
    },

    computed:{},
    methods:{},
    watch:{},

}
</script>
<style lang="scss">
.shop{
  margin-top: 50px;
  h2{
    text-align: center;
  }
}
</style>