<template>
  <div class="notification">
    <transition-group
      name="v-transition-animate"
      class="massages_list"
    >
    <div
        class="notification__content"
        v-for="massage in massages"
        :key = "massage.id"
        :class="massage.icon"
    >
      <div class="notification__text">
        <i class="material-icons">{{massage.icon}}</i>
        <span>{{ massage.name }}</span>
      </div>
      <div class="notification__buttons">
        <button v-if="rightButton.length">{{ rightButton }}</button>
        <button v-if="leftButton.length">{{ leftButton }}</button>
      </div>
    </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "v-notification",
  props:{
    massages: {
      type: Array,
      default: () => {
        return []
      }
    },
    rightButton: {
      type: String,
      default: ''
    },
    leftButton: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return{}
  },
  methods: {
    hideNotification() {
      let vm = this;
      if(this.massages.length){
        setTimeout(function () {
          vm.massages.splice(vm.massages.length - 1, 1)
        }, vm.timeout);
      }
    }
  },
  watch: {
    massages() {
      this.hideNotification()
    }
  },
  mounted() {
    this.hideNotification()
  }
}
</script>

<style lang="scss">
.notification{
  position: fixed;
  top:80px;
  right: 16px;
  z-index: 10;
  &__massages_list{
    display: flex;
    flex-direction: column-reverse;
  }
  &__text{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content{
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    height: 50px;
    margin-bottom: 16px;
    color: #ffffff;
    &.error{
      background: red;

    }
    &.warning{
      background: orange;
    }
    &.check_circle{
      background: green;
    }
  }

  .material-icons {
    margin-right: 16px;
  }

}
.v-transition-animate {
  &-enter{
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active{
    transition: all .6s ease;
  }
  &-enter-to{
    opacity: 1;
  }
  &-leave{
    height: 50px;
    opacity: 1;
  }
  &-leave-active{
    transition: transform .6s ease, opasity .6s, height .6s .2s;
  }
  &-leave-to{
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move{
    transition: transform .6s ease;
  }
}
</style>>