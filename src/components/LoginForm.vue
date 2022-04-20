<template>
  <div class="modal_login_main_authorize">
    <input 
      type="text" 
      placeholder="Логин" 
      class="modal_login_main_authorize_nickname" 
      v-model="formLogin.loginUserNickname"
    > 
    <p class="input_login_error">{{loginError}}</p>
    <input 
      type="password" 
      placeholder="Пароль" 
      class="modal_login_main_authorize_password" 
      v-model="formLogin.loginUserPassword" 
      required
    >
    <p class="input_login_error">{{passwordError}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formLogin: {
          loginUserNickname: '',
          loginUserPassword: '',
      },
      }
    },

    computed: {
      loginError() {
        let errorText;
        const login = this.formLogin.loginUserNickname;
        if(login.length >= 1 && login.length <= 3) {
          errorText = "Логин должен быть больше 3 символов"
        } else if(login.length > 20) {
          errorText = "Логин должен быть меньше 20 символов"
        }
        return errorText
      },

      passwordError() {
        let errorText;
        const password = this.formLogin.loginUserPassword;
        if(password.length >= 1 && password.length <= 8) {
          errorText = "Пароль должен быть больше 8 символов"
        } else if(password.length > 24) {
          errorText = "Пароль должен быть меньше 24 символов"
        }
        return errorText
      }
    },
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
  .modal_login_main_authorize{
        margin-top: 20px;
        width: 100%;
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
  .input_login_error{
  padding: 5px 0;
  color: red;
  font-size: 15px;
  // margin-top: 10px;
}
</style>