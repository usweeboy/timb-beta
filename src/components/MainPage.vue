<template>
<div id="MainPage" class="main_page">

  <div class="main_page_block">
    <div class="main_page_logo">
      <img src="@/assets/img/logo_timbo.png" alt="" width="500">
    </div>
    <div class="main_page_slogan">
      <p>Пишите книги любого жанра, смотрите и оценивайте творчество других людей.</p>  
    </div>
    <div class="main_page_button_login">
      <a href="#" class="button_login" @click="modalLogin = !modalLogin">Войти</a>
    </div>
  </div>


  <div class="modal_login" v-if="modalLogin">
    <div class="modal_login_content">
      <div class="modal_login_header">
        <div class="modal_login_header_block_one">
          <a href="#" class="modal_login_header_authorize">Вход</a>
        </div>
        <div class="modal_login_header_close">
          <a href="#">
            <img src="@/assets/img/icon_close.png" alt="" width="20" @click="modalLogin = !modalLogin">
          </a>
        </div>
      </div>

      <div class="modal_login_main">
        <div class="modal_login_main_authorize">
          <input type="text" placeholder="Логин" class="modal_login_main_authorize_nickname" v-model="formLogin.loginUserNickname">
          <p class="input_login_error" v-if="formLogin.loginUserNickname.length >= 1 && formLogin.loginUserNickname.length <= 3">Логин должен быть больше 3 символов</p>
          <p class="input_login_error" v-if="formLogin.loginUserNickname.length > 20">Логин должен быть меньше 20 символов</p>
          <input type="password" placeholder="Пароль" class="modal_login_main_authorize_password" v-model="formLogin.loginUserPassword" required>
          <p class="input_login_error" v-if="formLogin.loginUserPassword.length >= 1 && formLogin.loginUserPassword.length <= 8">Пароль должен быть больше 8 символов</p>
          <p class="input_login_error" v-if="formLogin.loginUserPassword.length > 24">Пароль должен быть меньше 24 символов</p>
        </div>
        <div class="modal_login_main_remember">
          <div class="modal_login_main_remember_one">
            <input type="checkbox" class="modal_login_main_remember_one_checkbox">
            <p class="modal_login_main_remember_one_text">Запомнить меня</p>
          </div>
          <div class="modal_login_main_remember_two">
            <a href="#">Забыли пароль?</a>
          </div>
        </div>
        <div class="modal_login_main_social_networks">
          <div>Войти через</div>
          <div class="modal_login_main_icons_social_networks">
            <a href="#"><img src="@/assets/img/icon_vk.svg" alt="" class="modal_login_main_icons_social_networks_vk"></a>
            <a href="#"><img src="@/assets/img/icon_google.svg" alt="" class="modal_login_main_icons_social_networks_google"></a>
          </div>
        </div>
      </div>

      <div class="modal_login_footer">
        <div class="modal_login_footer_button">
          <a href="#" class="modal_login_button">Войти</a>
        </div>
        <div class="modal_login_footer_registration">
          <a href="#" class="modal_login_footer_registration_link" @click="showModalRegistration">
            <span class="modal_login_footer_registration_one">Еще не зарегистрированны на нашем сайте?</span>
            <span class="modal_login_footer_registration_two">Зарегистрироваться</span>
          </a>
        </div>
      </div>
    </div>
  </div>


  <div class="modal_registration" v-if="modalRegistration">
    <div class="modal_registr_content">
      <div class="modal_registr_header">
        <div class="modal_registr_header_block">
          <a href="#" class="modal_registr_header_registration">Регистрация</a>
        </div>
        <div class="modal_registr_header_close">
          <a href="#">
            <img src="@/assets/img/icon_close.png" alt="" width="20" @click="modalRegistration = !modalRegistration">
          </a>
        </div>
      </div>

      <div class="modal_registr_main">
        <div class="modal_registr_main_registration">
          <input type="text" placeholder="Логин" class="modal_registr_main_registration_nickname" v-model="formRegistr.registrUserNickname">
          <p class="input_login_error" v-if="formRegistr.registrUserNickname.length >= 1 && formRegistr.registrUserNickname.length <= 3">Логин должен быть больше 3 символов</p>
          <p class="input_login_error" v-if="formRegistr.registrUserNickname.length > 20">Логин должен быть меньше 20 символов</p>
          <input type="email" placeholder="Почта" class="modal_registr_main_registration_email" v-model="formRegistr.registrUserEmail">
          <input type="password" placeholder="Пароль" class="modal_registr_main_registration_password" v-model="formRegistr.registrUserPassword">
          <p class="input_login_error" v-if="formRegistr.registrUserPassword.length >= 1 && formRegistr.registrUserPassword.length <= 8">Пароль должен быть больше 8 символов</p>
          <p class="input_login_error" v-if="formRegistr.registrUserPassword.length > 24">Пароль должен быть меньше 24 символов</p>
        </div>
        <div class="modal_registr_main_social_networks">
          <div>Зарегистрироваться через</div>
          <div class="modal_registr_main_icons_social_networks">
            <a href="#"><img src="@/assets/img/icon_vk.svg" alt="" class="modal_registr_main_icons_social_networks_vk"></a>
            <a href="#"><img src="@/assets/img/icon_google.svg" alt="" class="modal_registr_main_icons_social_networks_google"></a>
          </div>
        </div>
      </div>

      <div class="modal_registr_footer">
        <div class="modal_registr_footer_button">
          <a href="" class="modal_registration_button">Зарегистрироваться</a>
        </div>
        <div class="modal_registr_footer_login">
          <a href="#" class="modal_registr_footer_login_link" @click="registrShowModalLogin">
            <span class="modal_registr_footer_login_one">Уже имеете аккаунт?</span>
            <span class="modal_registr_footer_login_two">Войти</span>
          </a>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      modalLogin: false,
      modalRegistration: false,
      formLogin: {
        loginUserNickname: '',
        loginUserPassword: '',
      },
      formRegistr: {
        registrUserNickname: '',
        registrUserEmail: '',
        registrUserPassword: '',
      },
    }
  },
  methods: {
      showModalRegistration() {
      this.modalLogin = !this.modalLogin
      this.modalRegistration = !this.modalRegistration
    },
    registrShowModalLogin() {
      this.modalLogin = !this.modalLogin
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
.container{
  max-width: 1229px;
  margin: 0px auto;
}
.input_login_error{
  color: red;
  font-size: 15px;
  margin-top: 10px;
}

.main_page{
  @extend %horizontal_center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  .main_page_menu{
    
  }
  .main_page_block{
    text-align: center;
    .main_page_logo{
    text-align: center;
    }
    .main_page_slogan{
      padding-top: 0px;
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
        padding: 7px 20px;
        color: black;
        border: 2px solid rgb(49, 49, 49);
        border-radius: 8px;
        font-size: 20px;
      }
    }
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
      .modal_login_header_block_one{
        .modal_login_header_authorize{
          font-size: 20px;
          &:hover{
            border-bottom: 2.5px solid #129B8E;
          }
        }
      }
      .modal_login_header_close{
        position: absolute;
        bottom: 15px;
        left: 315px;
      }
    }
    .modal_login_main{
      .modal_login_main_authorize{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .modal_login_main_authorize_nickname{
          @extend %modal_main_authorize;
        }
        .modal_login_main_authorize_password{
          margin-top: 15px;
          @extend %modal_main_authorize;
        }
      }
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
      .modal_login_main_social_networks{
        text-align: center;
        margin-top: 30px;
        .modal_login_main_icons_social_networks_google{
          margin-top: 10px;
          margin-left: 15px;
        }
      }
    }
    .modal_login_footer{
      margin-top: 30px;
      text-align: center;
      .modal_login_footer_button{
        .modal_login_button{
          padding: 10px 20px 10px 20px;
          border: 1px solid black;
          border-radius: 5px;
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
      .modal_registr_header_block{
        .modal_registr_header_registration{
          font-size: 20px;
          &:hover{
            border-bottom: 2px solid #129B8E;
          }
        }
      }
      .modal_registr_header_close{
        position: absolute;
        bottom: 15px;
        left: 315px;
      }
    }
    .modal_registr_main{
      .modal_registr_main_registration{
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .modal_registr_main_registration_nickname{
          @extend %modal_main_authorize;
        }
        .modal_registr_main_registration_email{
          margin-top: 20px;
          @extend %modal_main_authorize;
        }
        .modal_registr_main_registration_password{
          margin-top: 20px;
          @extend %modal_main_authorize;
        }
      }
      .modal_registr_main_social_networks{
        text-align: center;
        margin-top: 30px;
        .modal_registr_main_icons_social_networks_google{
          margin-top: 10px;
          margin-left: 15px;
        }
      }
    }
    .modal_registr_footer{
      margin-top: 40px;
      text-align: center;
      .modal_registr_footer_button{
        .modal_registration_button{
          padding: 10px 15px 10px 15px;
          border: 1px solid black;
          border-radius: 5px;
          font-size: 15px;
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
  }
}
</style>