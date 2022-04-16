<template>
<div id="Menu">

  <nav class="menu">
    <div class="menu_container container">
      <div class="menu_logo" @click="$router.push('/')">
          <img src="@/assets/img/logo_timbo.png" alt="" width="95">
      </div>
      <div class="menu_list">
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
        <div class="menu_profile_block_link" @click="$router.push('/profile')">
          <div class="menu_profile_user_name">{{userName}}</div>
          <img src="@/assets/img/profile_avatar_32px.png" class="menu_profile_avatar">
        </div>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String
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
  // position: fixed;
  width: 100%;
  -webkit-box-shadow: 0px 13px 83px -13px rgba(51,51,51,1);
  -moz-box-shadow: 0px 13px 83px -13px rgba(51,51,51,1);
  box-shadow: 0px 13px 83px -13px rgba(51,51,51,1);
  .menu_container{
    padding: 0px 0px 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu_logo{
      cursor: pointer;
    }
    .menu_parent_item{
      display: flex;
      .menu_list_item{
        list-style: none;
        margin-right: 30px;
        padding-top: 5px;
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
    .menu_profile{
      padding-top: 5px;
      .menu_profile_block_link{
        color: #EAEAEA;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(24, 24, 24, 0.863);
        cursor: pointer;
      }
      .menu_profile_user_name{
        font-size: 15px;
        margin-right: 5px;
        &:hover{
          color: rgb(0, 0, 0);
        }
      }
      .menu_profile_avatar{
        width: 25px;
        padding: 2px;
        border-radius: 50%;
        background: #EAEAEA;
        margin-right: 5px;
      }
    }
  }
}
</style>