<template>
  <!-- <site-menu /> -->
  <div id="WriteBook">

    <div class="write_book_blocks container">
      <div class="write_book_block_one">
        <div class="book_user" :style="{background: colorBackround}">
          <div class="book_user_info">
            <div class="book_user_name" :style="{color: colorText}" v-if="checkboxAddAuthor">Грачков Даниил</div>
            <div class="book_user_title" :style="{color: colorText}">{{inputBookTitle}}</div>
          </div>
        </div>
        <div class="changes_book_one">
          <div class="book_inputs_change">
            <input type="text" class="input_book_change_title" v-model="inputBookTitle" placeholder="Введите название книги">
            <div class="selected_use_name_book">
              <p>Хотите использовать имя и фамилию в своей книге?</p>
              <input type="checkbox" class="checkbox_book_add_author" v-model="checkboxAddAuthor">
            </div>
          </div>
          <div class="download_book_cover">
            <div class="download_book_cover_title">Загрузите обложку для книги</div>
            <div>
              <input type="file">
            </div>
          </div>
          <div class="book_color_change">
            <div>Или измените ее сами</div>
            <div class="book_color_change_background">
              <button class="show_color_picker" @click="btnShowColorPickerBackground">Изменить цвет обложки</button>
              <color-picker class="color_picker_background" theme="light" :color="colorBackround" :sucker-hide="false" :sucker-canvas="suckerCanvas" :sucker-area="suckerArea" @changeColor="changeColorBackground" v-if="showColorPickerBackground"/>
            </div>
            <div class="book_color_change_text">
              <button class="show_color_picker" @click="btnShowColorPickerText">Изменить цвет текста</button>
              <color-picker class="color_picker_text" theme="light" :color="colorText" :sucker-hide="false" :sucker-canvas="suckerCanvas" :sucker-area="suckerArea" @changeColor="changeColorText" v-if="showColorPickerText"/>   
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import colorPicker from '@caohenghu/vue-colorpicker'
// import SiteMenu from './SiteMenu.vue'
export default {
  components: {
      colorPicker,
      // SiteMenu
  },
  data() {
      return {
          colorBackround: '#ffffff',
          colorText: '000000',
          suckerCanvas: null,
          suckerArea: [],
          isSucking: false,
          showColorPickerBackground: false,
          showColorPickerText: false,
          inputBookTitle: '',
          checkboxAddAuthor: true,
      }
  },
  methods: {
    changeColorBackground(colorBackround) {
        const { r, g, b, a } = colorBackround.rgba
        this.colorBackround = `rgba(${r}, ${g}, ${b}, ${a})`
    },
    changeColorText(colorText) {
        const { r, g, b, a } = colorText.rgba
        this.colorText = `rgba(${r}, ${g}, ${b}, ${a})`
    },
    btnShowColorPickerBackground() {
      this.showColorPickerBackground = !this.showColorPickerBackground
    },
    btnShowColorPickerText() {
      this.showColorPickerText = !this.showColorPickerText
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
%book_user_title_change{
  border: none;
  outline: none;
  background-color: white;
  font-size: 16px;
  color: $dark_color1;
  min-width: 276px;
  border-bottom: 1.5px solid $dark_color1;
}
.container{
  max-width: 1229px;
  margin: 0px auto;
}


#WriteBook{
  background: #11998e;
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e); 
  font-family: 'Roboto', sans-serif;
}
.write_book_blocks{
  background: white;
  height: 100vh;
  .write_book_block_one{
    padding-top: 30px;
    justify-content: space-around;
    display: flex;
    .book_user{
    width: 300px;
    height: 400px;
    border: 1px solid black;
    position: relative;
     .book_user_info{
       margin-top: 100px;
       .book_user_name{
         text-align: center;
         font-size: 18px;
       }
       .book_user_title{
         margin-top: 30px;
         word-wrap:break-word;
         overflow: hidden;
         text-align: center;
         font-size: 25px;
       }
     }
    }
    .changes_book_one{
      .book_inputs_change{
        .input_book_change_title{
          @extend %book_user_title_change;
        }
        .selected_use_name_book{
          margin-top: 20px;
          display: flex;
          .checkbox_book_add_author{
            margin-left: 5px;
          }
        }
      }
      .show_color_picker{
          color: black;
          display: inline-block;
          padding: 7px 7px;
          background: white;
          font-size: 14px;
          border-color: #330867;
          border-radius: 15px;
          box-sizing: border-box;
          outline: none;
          transition: 1s;
        }
      .book_color_change{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        .book_color_change_background{
          
        }
        .book_color_change_text{
          // margin-left: 10px;
        }
      }
    }
  }
}
  
</style>