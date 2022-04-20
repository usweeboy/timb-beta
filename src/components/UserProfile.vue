<template>
  <!-- <site-menu /> -->
  <div id="Profile">
    <div class="user_profile container">
      <div class="user_info">
        <div class="user_info_block_one">
          <div class="user_info_avatar">
            <img src="@/assets/img/icon-person.svg" width="130">
          </div>
          <div class="user_info_avatar_add" title="Добавить новое фото">+</div>
          <div class="user_info_nickname">{{userName}}</div>
        </div>
        <div class="user_info_block_two" :class="{user_info_block_two_changed: changingInfo}">
          <div class="user_data">
            <div class="user_data_title">Информация о пользователе</div>
            <div class="user_data_change">
              <img src="@/assets/img/icon-edit_profile.png"
                class="user_data_change_icon" width="25"
                @click="btnEditUserInfo"
                v-show="changingInfo === false"
                title="Изменить">
              <img src="@/assets/img/icon_checkmap.png" width="25"
                class="user_data_saved_icon"
                @click="btnEditUserInfo"
                v-show="changingInfo === true"
                title="Сохранить">
            </div>
          </div>
          <div class="user_personal_info">
            <div class="user_personal_info_main">
                <div class="user_personal_info_name">Имя:</div>
                <div class="user_personal_info_surname">Фамилия:</div>
                <div class="user_personal_info_age">Возраст:</div>
            </div>
            <div class="user_personal_info_changed">
              <div class="user_personal_info_changed_one">
                <input class="user_personal_info_changed_name" type="text" 
                v-model="userInfoName"
                :disabled="!changingInfo"
                :style="{background: changingInfo ? '#EAEAEA' : 'white'}">
              </div>
              <div class="user_personal_info_changed_two">
                <input class="user_personal_info_changed_surname" type="text"
                :disabled="!changingInfo" 
                v-model="userInfoSurname"
                :style="{background: changingInfo ? '#EAEAEA' : 'white'}">
              </div>
              <div class="user_personal_info_changed_three">
                <input class="user_personal_info_changed_age" type="number" 
                :disabled="!changingInfo"
                v-model="userInfoAge"
                :style="{background: changingInfo ? '#EAEAEA' : 'white'}">
              </div>
            </div>
            <div class="user_personal_info_content" v-show="changingInfo">
              Просим указывать ваши реальные имена и фамилии для того,
              чтобы другие пользователя могли узнать автора книги.
            </div>
          </div>
        </div>
      </div>

      <div class="user_books">
        <div class="user_books_title">
          Список моих книг
        </div>
        <div class="user_list_books">
          <div class="no_book_in_list">На данный момент вы не написали ни одной книги...</div>
          <div class="add_book_to_list">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import SiteMenu from './SiteMenu.vue'
export default {
  // components: { SiteMenu },
  props: {
    userName: {
      type: String
    }
  },
  data() {
    return {
      userInfoName: '',
      userInfoSurname: '',
      userInfoAge: '',
      changingInfo: false,
    }
  },
  methods: {
    btnEditUserInfo() {
      this.changingInfo = !this.changingInfo
    }
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
%user_pers_info{
  color: $dark_color1;
  font-size: 17px;
}
%user_pers_info_change{
  border: none;
  outline: none;
  background-color: white;
  margin-left: 20px;
  font-size: 15px;
  color: $dark_color1;
  min-width: 276px;
  border-bottom: 1.5px solid $dark_color1;
}
.container{
  max-width: 1229px;
  margin: 0px auto;
}

#Profile{
  background: #cfcfcf;
  background: #11998e;
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e); 
  font-family: 'Roboto', sans-serif;
}

.user_profile{
  background: white;
  height: 100vh;
  .user_info{
    padding-bottom: 40px;
    border-bottom: 1.5px solid #929292;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .user_info_block_one{
      margin-top: 20px;
      position: relative;
      .user_info_avatar{
        margin: 0px auto;
        padding: 2px;
        width: 130px;
        border-radius: 300px;
        background: #EAEAEA;
      }
      .user_info_avatar_add{
        background-color: #929292;
        color: #EAEAEA;
        width: 30px;
        height: 30px;
        @extend %horizontal_center;
        align-items: center;
        border-radius: 50%;
        font-size: 24px;
        position: absolute;
        left: 90px;
        bottom: 41px;
      }
      .user_info_nickname{
        @extend %horizontal_center;
        font-size: 24px;
        font-weight: 400;
        line-height: 39px;
        color: black;
      }
    }
    .user_info_block_two{
      min-width: 810px;
      .user_data{
        padding: 15px 0px 15px 0px;
        @extend %horizontal_center;
        align-items: center;
        .user_data_title{
          color: black;
          font-size: 28px;
        }
        .user_data_change{
          margin-left: 7px;
          margin-top: 3px;
          @extend %horizontal_center;
          align-items: center;
        }
      }
      .user_personal_info{
        display: flex;
        .user_personal_info_main{
          padding-left: 15px;
          padding-bottom: 20px;
          .user_personal_info_name{
            margin-top: 30px;
            @extend %user_pers_info;
          }
          .user_personal_info_surname{
            margin-top: 25px;
            @extend %user_pers_info;
          }
          .user_personal_info_age{
            margin-top: 25px;
            @extend %user_pers_info;
          }
        }
        .user_personal_info_changed{
          .user_personal_info_changed_one{
            margin-top: 28px;
            .user_personal_info_changed_name{
              @extend %user_pers_info_change;
            }
          }
          .user_personal_info_changed_two{
            margin-top: 22px;
            .user_personal_info_changed_surname{
              @extend %user_pers_info_change;
            }
          }
          .user_personal_info_changed_three{
            margin-top: 22px;
            .user_personal_info_changed_age{
              @extend %user_pers_info_change;
            }
          }
        }
        .user_personal_info_content{
          @extend %horizontal_center;
          margin: 0px auto;
          font-weight: 400;
          font-size: 16px;
          color: $dark_color1;
          align-items: center;
          width: 347px;
        }
      }
    }
    .user_info_block_two_changed{
      background: #EAEAEA;
    }
  }
  .user_books{
    margin-top: 15px;
    border-top: 1px solid white;
    .user_books_title{
      margin-top: 30px;
      @extend %horizontal_center;
      font-size: 32px;
      line-height: 48px;
    }
    .user_list_books{
      margin-top: 20px;
      .no_book_in_list{
        font-size: 24px;
        line-height: 39px;
        color: $dark_color1;
        @extend %horizontal_center;
      }
      .add_book_to_list{
        width: 40px;
        height: 40px;
        font-size: 28px;
        border-radius: 50%;
        background: #11998e;
        background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
        background: linear-gradient(to top, #38ef7d, #11998e); 
        margin: 15px auto 0px auto;
        @extend %horizontal_center;
        align-items: center;
        & span{
          margin-left: 2.5px;
          color: #EAEAEA;
        }
      }
    }
  }
}
</style>