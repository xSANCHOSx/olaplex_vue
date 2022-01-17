<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span v-if="nameModal.length">{{ nameModal }}</span>
        <span v-if="isCloseIcon">
          <i class="material-icons"
             @click="closePopup"
          >
            close
          </i>
        </span>
      </div>
      <div class="v-popup__body">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <router-link to="/">
          <button
              v-if="footer_btn.length"
              @click = "closePopup"
              class="popup_btn"
          >
            {{footer_btn}}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  data() {
    return{}
  },
  props:{
    nameModal: {
      type: String,
      default: ''
    },
    isCloseIcon: {
      type: Boolean,
      default: true
    },
    isShowPopup: {
      type: Boolean,
      default: false
    },
    footer_btn: {
      type: String,
      default: 'Закрыть'
    }

  },
  methods:{
    closePopup(){
      this.$emit("closePopup")
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item){
      if(item.target === vm.$refs['popup_wrapper']){
        vm.closePopup();
      }
    })
  }
}
</script>

<style lang="scss">
.popup_wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(64,64,64,.65);
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
}
.v-popup{
  padding: 16px;
  position: fixed;
  width: 400px;
  left: 0;
  right: 0;
  top: 20vh;
  z-index: 10;
  border-radius: 5px;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 0 17px 0 #e7e7e7;
  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__footer{
    justify-content: center;
  }
  &__body{
    text-align: center;
  }
  h2{
    font-size: 22px!important;
    margin-bottom: 15px!important;
    margin-top: 0!important;
  }
  .popup_btn{
    color: #fff;
    background-color: #5bc0de;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100px;
  }
}
</style>