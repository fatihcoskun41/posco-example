<template>

  <b-navbar wrapper-class="nav" class="mt-0 mb-0 pt-0 pb-0" id="grey">
    <template #brand>
      <b-navbar-item  class="class mb-2">
        <img

            src="https://www.poscoassan.com.tr/public/assets/images/logo2.png"
            alt="Posco Logo"
        >
      </b-navbar-item>
      
        <b-navbar-item class="title">
         <b-icon
         class="mr-1 mb-0"
                type="is-light"
                icon="home"
                custom-size="mdi-24px">
            </b-icon>
        <p class="text-center text-white subtitle is-6 mt-2">
          {{$t("message.homepage")}}
        </p>

      </b-navbar-item>
        <b-navbar-item class="title" >
           <b-icon
         class="mr-2 mt-1"
                type="is-light"
                pack="fal"
                icon="chalkboard"
                custom-size="fa-xs">
            </b-icon>
        <p class="text-center text-white subtitle is-6  mt-2">
          {{$t("message.corporate")}}
        </p>

      </b-navbar-item>
        <b-navbar-item class="title" >
           <b-icon
         class="mr-2 mb-0"
                type="is-light"
                icon="store"
                custom-size="mdi-24px">
            </b-icon>
        <p class="text-center text-white subtitle is-6  mt-2">
          {{$t("message.productionandProducts")}}
        </p>

      </b-navbar-item>
        <b-navbar-item class="title">
           <b-icon
         class="mr-2 mb-0"
                type="is-light"
                icon="trophy"
                custom-size="mdi-24px">
            </b-icon>
        <p class="text-center text-white subtitle is-6  mt-2">
          {{$t("message.socialResponsibility")}}
        </p>

      </b-navbar-item>
         <b-navbar-item class="title" >
            <b-icon
         class="mr-2 mb-0 mt-1"
                type="is-light"
                pack="fal"
                icon="user"
                custom-size="fa-xs">
            </b-icon>
        <p class="text-center text-white subtitle is-6  mt-2">
          {{$t("message.humanResources")}}
        </p>

      </b-navbar-item>
         <b-navbar-item class="title" >
            <b-icon
         class="mr-3 mb-0"
                type="is-light"
                icon="phone"
                custom-size="mdi-24px">
            </b-icon>
        <p class="text-center text-white subtitle is-6  mt-2 ">
          {{$t("message.contact")}}
        </p>

      </b-navbar-item>
    </template>


    <template #end>
      <b-field>
      
         <b-field>
              <p class="text-center text-white h6 mt-4 mr-3 pt-2 ">  {{ isSelected }}
         </p>
            <b-switch  class="mr-4 mt-2 pt-1" v-model="isSelected"
                true-value="Dark"
                false-value="Light">

            </b-switch>
        </b-field>
        <select class="form-select form-select-sm mt-4 mb-4 text-center h-50 mr-2" v-model="selected" @change="changeLanguage()"  >
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </b-field>
  
    </template>
  </b-navbar>
 


   
</template>
<script>
import {mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
      isSelected:false,
      selected: null,
       isSwitchedCustom: this.$store.state.theme

    }
  },
  methods:{
    ...mapActions([
      "updateTheme"
    ]),
    changeLanguage(){

      localStorage.setItem("lang",this.selected)
      window.location.reload()
    },
    updateSpecialTheme(){
      this.updateTheme(!this.theme)

    }
    },

  
  created() {
    if(localStorage.getItem("lang")==null){
      localStorage.setItem("lang","tr")

    }
    this.selected = localStorage.getItem("lang")
  },
  computed:{
    ...mapState([
      "theme"
    ]),
    
    
  

  },
  
  
}

</script>
<style>


 


html,body{
   margin: 0;
  padding: 0;
  border: 0;
  font-size: 20%;
  font: inherit;

}

.class{
 
  
  margin-left: 10em;

}
.title{
  margin-left: 1.5em;
 
}
.nav{
  background-color: #3b5671;
width:100%;
height: 50px;
margin:0;




}
.light{
   background-color: white;
width:100%;
height: 50px;
margin:0;

}
#grey{
    background-color: #38546e;
}
</style>
