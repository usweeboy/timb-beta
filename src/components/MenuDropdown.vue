<template>
  <div class="menu_dropdown_list">
    <div class="menu_dropdown_profile">
      <img src="@/assets/img/icon-dropdown-person.svg" alt="" class="menu_dropdown_profile_icon">
      <span class="menu_dropdown_profile_text">Мой профиль</span>
    </div>
    <div class="menu_dropdown_books">
      <img src="@/assets/img/icon-book.svg" alt="" class="menu_dropdown_books_icon">
      <span class="menu_dropdown_books_text">Мои книги</span>
    </div>
    <div class="menu_dropdown_settings">
      <img src="@/assets/img/icon-settings.svg" alt="" class="menu_dropdown_settings_icon">
      <span class="menu_dropdown_settings_text">Настройки</span>
    </div>
    <hr class="menu_dropdown_line">
    <div class="menu_dropdown_exit">
      <img src="@/assets/img/icon-exit.svg" alt="" class="menu_dropdown_exit_icon">
      <span class="menu_dropdown_exit_text">Выйти</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
%dropdownsetting{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
%dropdowntext{
  font-size: 14px;
  color: #141414dc;
  &:hover{
    border-bottom: 2px solid #129B8E;
  }
}

.menu_dropdown_list{
  margin-top: 10px;
  background: white;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
  position: absolute;
  padding: 12px 0px 12px 0px;
  right: 0px;
  width: 180px;
  border-radius: 0px 0px 10px 10px;
  .menu_dropdown_profile{
    @extend %dropdownsetting;
    .menu_dropdown_profile_icon{
      width: 30px;
      padding-right: 10px;
    }
    .menu_dropdown_profile_text{
      @extend %dropdowntext;
    }
  }
  .menu_dropdown_books{
    @extend %dropdownsetting;
    margin-top: 15px;
    padding-right: 22.5px;
    .menu_dropdown_books_icon{
      width: 30px;
      padding-right: 10px;
    }
    .menu_dropdown_books_text{
      @extend %dropdowntext;
    }
  }
  .menu_dropdown_settings{
    @extend %dropdownsetting;
    margin-top: 15px;
    padding-right: 19px;
    border-bottom: 1px solid #242222dc;
    padding-bottom: 20px;
    .menu_dropdown_settings_icon{
      width: 28px;
      padding-right: 10px;
    }
    .menu_dropdown_settings_text{
      @extend %dropdowntext;
    }
  }
  .menu_dropdown_exit{
    @extend %dropdownsetting;
    margin-top: 20px;
    padding-right: 43px;
    .menu_dropdown_exit_icon{
      width: 28px;
      padding-right: 8px;
    }
    .menu_dropdown_exit_text{
      @extend %dropdowntext;
      // padding-left: 5px;
    }
  }
}
</style>