<template>
  <div style="background-color: #f6f6f6" class="py-10">
    <h1 class="capitalize text-6xl text-black font-black text-center">{{$t('our partners')}}</h1>
    <Carousel class="pt-10" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="image in images" :key="image.id">
       <div>
            <img :src="image.link" alt="">
       </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      slideWidth: "260px"
    },
    images: [
        {id:1,link:'/_nuxt/assets/img/partner1.png'},
        {id:2,link:'/_nuxt/assets/img/partner2.png'},
        {id:3,link:'/_nuxt/assets/img/partner3.png'},
        {id:4,link:'/_nuxt/assets/img/partner4.png'},
        {id:5,link:'/_nuxt/assets/img/partner5.png'},
        {id:6,link:'/_nuxt/assets/img/partner6.png'},
        {id:7,link:'/_nuxt/assets/img/partner7.png'},
    ],
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
      },
    },
  }),
});
</script>
