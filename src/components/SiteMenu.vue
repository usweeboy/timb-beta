<template>
<div id="Menu">

  <nav class="menu">
    <div class="menu_container container">
      <div class="menu_list">
        <div class="menu_logo" @click="$router.push('/')">
          <img src="@/assets/img/logo_timbo.png" alt="" width="95">
        </div>
        <form class="menu_search">
          <input type="text" placeholder="Поиск" v-model="menuSearch">
        </form>
        <ul class="menu_parent_item">
          <li class="menu_list_item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="menu_list_item">
            <router-link to="/write">Написать книгу</router-link>
          </li>
          <li class="menu_list_item">
            <router-link to="/">О нас</router-link>
          </li>
        </ul>
      </div>
      <div class="menu_profile">
        <div class="menu_profile_block_link" @click="showMenuDropdown = !showMenuDropdown">
          <span class="menu_profile_user_name">{{userName}}</span>
          <img src="@/assets/img/icon-person.svg" class="menu_icon_person">
          <img src="@/assets/img/icon-chevrondown.svg" class="menu_icon_chevrondown">
        </div>
        <menu-dropdown v-if="showMenuDropdown"></menu-dropdown>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
import MenuDropdown from '@/components/MenuDropdown'
export default {
  components: {
    MenuDropdown
  },
  props: {
    userName: {
      type: String
    }
  },

  data() {
    return{
      menuSearch: '',
      showMenuDropdown: false,
    }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.container{
  max-width: 1229px;
  margin: 0px auto;
}
.menu{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background: rgb(255, 255, 255);
  width: 100%;
  -webkit-box-shadow: 0px 11px 5px -5px rgba(34, 60, 80, 0.24);
  -moz-box-shadow: 0px 11px 5px -5px rgba(34, 60, 80, 0.24);
  box-shadow: 0px 11px 5px -5px rgba(34, 60, 80, 0.24);
  .menu_container{
    padding: 0px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu_list{
      display: flex;
      align-items: center;
      .menu_logo{
        cursor: pointer;
      }
      .menu_search{
        padding-left: 25px;
        padding-top: 15px;
        input{
          color: rgba(24, 24, 24, 0.863);
          font-size: 14px;
          padding: 5px 10px;
          border: none;
          border-radius: 15px;
          background-color: #E6E6E6;
        }
      }
      .menu_parent_item{
      display: flex;
      padding-left: 25px;
      .menu_list_item{
        list-style: none;
        padding-right: 30px;
        padding-top: 15px;
        & a{
          font-size: 15px;
          color: rgba(24, 24, 24, 0.863);
          text-decoration: none;
            &:hover{
              color: rgb(0, 0, 0);
              border-bottom: 2px solid #129B8E;
            }
          }
        }
      }
    }
    .menu_profile{
      position: relative;
      padding-top: 15px;
      .menu_profile_block_link{
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(24, 24, 24, 0.863);
        cursor: pointer;
        .menu_profile_link_wrap{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .menu_profile_user_name{
        font-size: 15px;
        margin-right: 5px;
        &:hover{
          color: rgb(0, 0, 0);
        }
      }
      .menu_icon_person{
        width: 27px;
        padding: 1px;
        border-radius: 50%;
        background: #EAEAEA;
        margin-right: 5px;
      }
      .menu_icon_chevrondown{
        width: 15px;
      }
    }
  }
}
</style>