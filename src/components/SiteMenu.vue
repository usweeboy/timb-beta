<template>
<div id="Menu">

  <nav class="menu">
    <div class="menu_container container">
      <div  class="menu_logo">
        <a href="">
          <img src="@/assets/img/logo_timbo.png" alt="" width="95">
        </a>
      </div>
      <div class="menu_list">
        <ul class="menu_parent_item">
          <li class="menu_list_item">
            <a href="">Главная</a>
          </li>
          <li class="menu_list_item">
            <a href="">Написать книгу</a>
          </li>
          <li class="menu_list_item">
            <a href="">О нас</a>
          </li>
        </ul>
      </div>
      <div class="menu_profile">
        <a href="#profile" class="menu_profile_block_link">
          <div class="menu_profile_user_name">{{userName}}</div>
          <img src="@/assets/img/profile_avatar_32px.png" class="menu_profile_avatar">
        </a>
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