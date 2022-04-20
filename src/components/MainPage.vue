<template>
<div id="MainPage" class="main_page">

  <div class="main_page_block">
    <div class="main_page_logo">
      <img src="@/assets/img/logo_timbo.png" alt="" width="400">
    </div>
    <div class="main_page_slogan">
      <p>Пишите книги любого жанра, смотрите и оценивайте творчество других людей.</p>  
    </div>
    <div class="main_page_button_login">
      <button class="button_login" @click="toggleModal">Войти</button>
    </div>
  </div>

  <sign-in v-show="modalLogin" @close="toggleModal" @signUp="toggleRegistr" />
  <sign-up v-show="modalRegistration" @close="toggleRegistr" @signIn="toggleModal" />

</div>
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue'
export default {
  components: { SignIn, SignUp },
  data() {
    return {
      modalLogin: false,
      modalRegistration: false,

      formRegistr: {
        registrUserNickname: '',
        registrUserEmail: '',
        registrUserPassword: '',
      },
    }
  },
  methods: {
    toggleModal() {
      if(this.modalRegistration) {
        this.modalRegistration = false
      }
      this.modalLogin = !this.modalLogin
    },
    toggleRegistr() {
      if(this.modalLogin) {
        this.modalLogin = false
      }
      this.modalRegistration = !this.modalRegistration
    },

  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Neucha&family=Roboto&display=swap');
$dark_color1: rgb(51, 51, 51);

%horizontal_center{
  display: flex;
  justify-content: center;
  
}

%modal_main_authorize{
  box-sizing: border-box;
  width: 70%;
  border-radius: 5px;
  color: $dark_color1;
  border: 1px solid #797979;
  padding: 5px 0px 5px 5px;
}

%button_main_page{
  border-radius: 5px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background: #c5c3c3;
  box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  &:hover{
    background: #2ceae5;
    background: #129A8E;
    transform: translateY(-7px);
    color: #fff;
    box-shadow: 0px 10px 25px rgba(46,223,229,0.445);
  }
}


.container{
  max-width: 1229px;
  margin: 0px auto;
}


.main_page{
  @extend %horizontal_center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  .main_page_block{
    text-align: center;
    .main_page_logo{
    text-align: center;
    }
    .main_page_slogan{
      padding-top: 20px;
      & p{
        text-align: center;
        color: black;
        font-weight: 400;
        font-size: 23px;
      }
    }
    .main_page_button_login{
      text-align: center;
      padding-top: 40px;
      .button_login{
        width: 150px;
        height: 45px;
        @extend %button_main_page;
      }
    }
  }
}


</style>