<template>
   <div>
  
    <h6 class="title is-6 text-white float-start ml-5 mt-3 pl-5"><u>{{$t("message.history")}}</u></h6>
     <b-carousel-list v-model="test" :data="items" :items-to-show="4">
        <template #item="list">
            <div class="card pl-1">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(list.index)"><img  :src="list.image"></a>
                    </figure>
                   
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-5 is-spaced">{{ list.title }}</p>
                        <p class="subtitle is-7 is-spaced fw-normal ">{{list.description}}</p>
                      
                    </div>
                </div>
            </div>
        </template>
    </b-carousel-list>
   
  
       
   
  

   </div>
</template>

<script>
export default {
    data() {
        return {
          
              test: 0,  
             gallery: true,
              al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            items: [
              {
                    title: this.$t("message.ceremony"),
                    description:this.$t("message.ceremony_message"),
                    image: 'https://www.poscoassan.com.tr/Images/HistoryImages/28092011.png'
                },
                {
                   title: this.$t("message.production"),
                     description:this.$t("message.production_message"),
                    image: 'https://www.poscoassan.com.tr/Images/HistoryImages/01072013.png'
                },
                {
                  title: this.$t("message.shipment"),
                    description:this.$t("message.shipment_message"),
                    image: "https://www.poscoassan.com.tr/Images/HistoryImages/12072013.png"
                },
                {
                     title: this.$t("message.official_ceremony"),
                       description:this.$t("message.ceremony_message"),
                    image:  'https://www.poscoassan.com.tr/Images/HistoryImages/15082013.png'
                },
                {
                    title: this.$t("message.ceremony"),
                    description:this.$t("message.ceremony_message"),
                    image: 'https://www.poscoassan.com.tr/Images/HistoryImages/28092011.png'
                },
                {
                   title: this.$t("message.production"),
                     description:this.$t("message.production_message"),
                    image: 'https://www.poscoassan.com.tr/Images/HistoryImages/01072013.png'
                },
                {
                  title: this.$t("message.shipment"),
                    description:this.$t("message.shipment_message"),
                    image: "https://www.poscoassan.com.tr/Images/HistoryImages/12072013.png"
                },
                {
                     title: this.$t("message.official_ceremony"),
                       description:this.$t("message.ceremony_message"),
                    image:  'https://www.poscoassan.com.tr/Images/HistoryImages/15082013.png'
                },
               
            ],
              isOpen: 0,
                collapses: [
                {
                    title: 'Title 1',
                    text: 'Text 1'
                },
                {
                    title: 'Title 2',
                    text: 'Text 2'
                },
                {
                    title: 'Title 3',
                    text: 'Text 3'
                }
                ],
               
            
        
        }
    },
      methods: {
          info(value) {
            this.test = value
        },
           switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        },
       
       
    },
    computed:{
      infos(){
        return[{
              name:this.$t("message.ceremony")
        },
        {name:this.$t("message.production")},
        {name:this.$t("message.shipment")},
        {name:this.$t("message.official_ceremony")},
       
        ]
      }
    }
    

}
</script>

<style>
.carouselspecial{
    margin:0 auto
}
body,html{
 
    text-align: center;
    
}
.sepicalp{
margin-left: 5em;

}
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>