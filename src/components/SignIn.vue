<template>
  <div class="modal_login">
    <div class="modal_login_content">
      <div class="modal_login_header">
        <h2 class="modal_login_header_authorize">Вход</h2>
        <button class="modal_login_header_close" @click="closeModal">
          <img src="@/assets/img/icon_close.png" alt="" width="20">
        </button>
      </div>

      <div class="modal_login_main">
        <login-form />
        <div class="modal_login_main_remember">
          <div class="modal_login_main_remember_one">
            <input type="checkbox" class="modal_login_main_remember_one_checkbox">
            <p class="modal_login_main_remember_one_text">Запомнить меня</p>
          </div>
          <div class="modal_login_main_remember_two">
            <a href="#">Забыли пароль?</a>
          </div>
        </div>

        <with-socials />
      </div>

      <div class="modal_login_footer">
        <div class="modal_login_footer_button">
          <button class="modal_login_button">Войти</button>
        </div>
        <div class="modal_login_footer_registration">
          <a href="#" class="modal_login_footer_registration_link" @click="openRegistr">
            <span class="modal_login_footer_registration_one">Еще не зарегистрированы на нашем сайте?</span>
            <span class="modal_login_footer_registration_two">Зарегистрироваться</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import WithSocials from './WithSocials.vue'
  export default {
  components: { LoginForm, WithSocials },

  methods: {

      closeModal() {
        this.$emit("close")
      },

      openRegistr() {
        this.$emit("signUp")
      }
    }
  }
</script>

<style lang="scss" scoped>
$dark_color1: rgb(51, 51, 51);

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

.modal_login{
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modal_login_header_close{
    position: absolute;
    bottom: 5px;
    left: 315px;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .modal_login_content{
    background: white;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 23px 20px 50px 20px;
    border-radius: 5px;
    width: 320px;
    .modal_login_header{
      display: flex;
      justify-content: center;
      position: relative;
      .modal_login_header_authorize{
        font-size: 20px;
      }
    }
    .modal_login_main{
      
      .modal_login_main_remember{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        .modal_login_main_remember_one{
          display: flex;
          .modal_login_main_remember_one_text{
            margin-left: 3px;
          }
        }
        .modal_login_main_remember_two{
          margin-left: 15px;
          & a{
            color: #129B8E;
            &:hover{
              color: #0c5f57;
            }
          }
        }
      }
      
    }
    .modal_login_footer{
      margin-top: 30px;
      text-align: center;
      .modal_login_footer_button{
        .modal_login_button{
           width: 100px;
          height: 40px;
          font-size: 14px;
          @extend %button_main_page;
        }
      }
      .modal_login_footer_registration{
        margin-top: 35px;
        .modal_login_footer_registration_link{
          .modal_login_footer_registration_one{
            display: block;
            font-size: 15px;
          }
          .modal_login_footer_registration_two{
            display: block;
            margin-top: 7px;
            font-size: 16px;
            color: #129B8E;
            &:hover{
              color: #0c5f57;
            }
          }
        }
      }
    }
  }
}

</style>