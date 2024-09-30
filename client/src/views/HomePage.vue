<template>
    <swiper 
    :pagination="{
        clickable: true,
      }"
    :autoplay="{
      delay: 7000,
    }"
    :effect="'fade'"
    :speed= 1000
    :modules="modules" 
    class="HomePageBanner">
      <swiper-slide>
        <img src="" class="d-block d-md-none w-100" alt="img-1">
        <img src="" class="d-none d-md-block d-xl-none w-100" alt="img-1">
        <img src="" class="d-none d-xl-block w-100" alt="img-1">  
      </swiper-slide>
      <swiper-slide>
        <img src="" class="d-block d-md-none w-100" alt="img-1">
        <img src="" class="d-none d-md-block d-xl-none w-100" alt="img-1">
        <img src="" class="d-none d-xl-block w-100" alt="img-1">  
      </swiper-slide>
      <swiper-slide>
        <img src="" class="d-block d-md-none w-100" alt="img-1">
        <img src="" class="d-none d-md-block d-xl-none w-100" alt="img-1">
        <img src="" class="d-none d-xl-block w-100" alt="img-1">  
      </swiper-slide>
      <swiper-slide>
        <img src="" class="d-block d-md-none w-100" alt="img-1">
        <img src="" class="d-none d-md-block d-xl-none w-100" alt="img-1">
        <img src="" class="d-none d-xl-block w-100" alt="img-1">  
      </swiper-slide>
    </swiper>
      
    <div class="container-fluid text-center">
      <div class="row">
        <div class="title-area col-12 p-5">
          대만여행 가는 사람들 주목!
        </div>
        <div class="About">
          대충 about에 넣을 소개글
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="row d-flex flex-row justify-content-center m-1 m-md-2">
        <router-link to="/foodlist">
        <button type="button" class="btn btn-outline-secondary col-7 col-sm-6 col-lg-5 m-5 p-2"> 
          대만 존맛탱굴 리스트 보러가기
        </button> 
        </router-link>
      </div>
    </div>
      
  </template>
  
  <script>
  
  //swiper
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
  import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  import 'swiper/css/effect-fade';
  
  export default{
    components:{
      Swiper,
      SwiperSlide,
    },
    setup() {
        return {
          modules: [Pagination, Autoplay, EffectFade],
        };
    },
  };
  </script>
  
  <style scoped>
    @import '../assets/styles/HomePage.css';
    @import '../assets/styles/responsive.css';
  </style>