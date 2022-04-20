<template>
  <div class="modal_registration">
    <div class="modal_registr_content">
      <div class="modal_registr_header">
          <h2 class="modal_registr_header_registration">Регистрация</h2>
          <button class="modal_registr_header_close" @click="closeModal">
            <img src="@/assets/img/icon_close.png" alt="" width="20">
          </button>
      </div>

        <div class="modal_registr_main_registration">
          <login-form />
          <input 
            type="email" 
            placeholder="Почта" 
            class="modal_registr_main_registration_email" 
            v-model="formRegistr.registrUserEmail"
          >
          <with-socials />
        </div>

      <div class="modal_registr_footer">
        <div class="modal_registr_footer_button">
          <button class="modal_registration_button">Зарегистрироваться</button>
        </div>
        <div class="modal_registr_footer_login">
          <a href="#" class="modal_registr_footer_login_link" @click="showModalLogin">
            <span class="modal_registr_footer_login_one">Уже имеете аккаунт?</span>
            <span class="modal_registr_footer_login_two">Войти</span>
          </a>
        </div>
      </div>

      <!-- <div class="modal_registr_main">
        <div class="modal_registr_main_registration">
          <input type="text" placeholder="Логин" class="modal_registr_main_registration_nickname" v-model="formRegistr.registrUserNickname">
          <p class="input_login_error" v-if="formRegistr.registrUserNickname.length >= 1 && formRegistr.registrUserNickname.length <= 3">Логин должен быть больше 3 символов</p>
          <p class="input_login_error" v-if="formRegistr.registrUserNickname.length > 20">Логин должен быть меньше 20 символов</p>
          <input type="email" placeholder="Почта" class="modal_registr_main_registration_email" v-model="formRegistr.registrUserEmail">
          <input type="password" placeholder="Пароль" class="modal_registr_main_registration_password" v-model="formRegistr.registrUserPassword">
          <p class="input_login_error" v-if="formRegistr.registrUserPassword.length >= 1 && formRegistr.registrUserPassword.length <= 8">Пароль должен быть больше 8 символов</p>
          <p class="input_login_error" v-if="formRegistr.registrUserPassword.length > 24">Пароль должен быть меньше 24 символов</p>
        </div> -->
        <!-- <div class="modal_registr_main_social_networks">
          <div>Зарегистрироваться через</div>
          <div class="modal_registr_main_icons_social_networks">
            <a href="#"><img src="@/assets/img/icon_vk.svg" alt="" class="modal_registr_main_icons_social_networks_vk"></a>
            <a href="#"><img src="@/assets/img/icon_google.svg" alt="" class="modal_registr_main_icons_social_networks_google"></a>
          </div>
        </div> -->
    </div>

  </div>


</template>

<script>
import LoginForm from './LoginForm.vue'
import WithSocials from './WithSocials.vue'
  export default {
    components: { LoginForm, WithSocials },

    data() {
      return {
        formRegistr: {
          registrUserNickname: '',
          registrUserEmail: '',
          registrUserPassword: '',
        },
      }
    },

    methods: {
      closeModal() {
        this.$emit("close")
      },

      showModalLogin() {
        this.$emit("signIn")
      }
    }
  }
</script>

<style lang="scss" scoped>
  $dark_color1: rgb(51, 51, 51);

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

  .modal_registration{
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .modal_registr_content{
      background: white;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      padding: 23px 20px 50px 20px;
      border-radius: 5px;
      width: 320px;
      .modal_registr_header{
        display: flex;
        justify-content: center;
        position: relative;
        
        .modal_registr_header_registration{
          font-size: 20px;
        }

        .modal_registr_header_close{
          position: absolute;
          bottom: 5px;
          left: 315px;
          background-color: transparent;
          cursor: pointer;
          border: none;
        }
      }

    }
      
      .modal_registr_main_registration{
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center; 
        flex-direction: column;
        .modal_registr_main_registration_email{
          margin-top: 20px;
          @extend %modal_main_authorize;
        }
      }
    }
    .modal_registr_footer{
      margin-top: 40px;
      text-align: center;
      .modal_registr_footer_button{
        .modal_registration_button{
          padding: 15px 20px 15px 20px;
          font-size: 14px;
          @extend %button_main_page;
        }
      }
      .modal_registr_footer_login{
        margin-top: 35px;
        .modal_registr_footer_login_link{
          .modal_registr_footer_login_two{
            margin-left: 5px;
            color: #129B8E;
            &:hover{
              color: #0c5f57;
            }
          }
        }
      }
    }
</style>