<template>
    <div class="title-area text-center p-5"> 
      대만 존맛탱굴 리스트
    </div>
  
    <div class="container">
    
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <form class="d-flex flex-row p-2 bg-body-tertiary" role="search">
            <input v-model="searchTerm" class="form-control me-2" type="search" placeholder="찾으시는 존맛탱굴을 검색해보세요!" aria-label="Search">
            <button @click="goToSearch()" class="btn btn-outline-success ratio-1x1" id="search" type="submit">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #198754;" />
            </button>
            </form>
          </div>
        </div>
      </div>    
      
      <ul class="nav nav-underline justify-content-center mt-5" id="food-category">
       <li class="nav-item">
         <a @click="getFoodList()" class="nav-link" aria-current="page">전체</a>
       </li>
       <li class="nav-item">
         <a @click="getMealList()" class="nav-link">식사</a>
       </li>
       <li class="nav-item">
         <a @click="getDrinkList()" class="nav-link">음료</a>
       </li>
       <li class="nav-item">
         <a @click="getDessertList()" class="nav-link">디저트</a>
       </li>
       <li class="nav-item">
         <a @click="getNightmarketList()" class="nav-link">야시장</a>
       </li>
       <li class="nav-item">
         <a @click="getExtraList()" class="nav-link">기타</a>
       </li>
      </ul>
  
      <div class="text-center mt-5" id="recmd-title">
        R e c o m m e n d a t i o n
      </div>
  
      <div class="Recommend mb-3 pb-4 mx-md-3 mx-lg-5 border-bottom">
        <div class="container d-none d-md-flex justify-content-end">
            <button class="custom-swiper-button-prev d-none d-md-inline-block" style="margin-right: 3px;"> {{"<"}} </button>
            <button class="custom-swiper-button-next d-none d-md-inline-block" style="margin-left: 3px;"> {{">"}} </button>  
        </div> 
  
        <swiper
        :slidesPerView="2.5"
        :spaceBetween="10"
        :scrollbar="{
          draggable:false,
          dragSize:100, 
        }"
        :navigation="{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }"
        :breakpoints="{
        '576': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }"
        :modules="modules" 
        class="RecommendBanner">
          <swiper-slide v-for="(food, i) in recommendfoodList" :key="i" class="box p-1">
            <a @click="goToDetail(food.id);" style="cursor:pointer;">
              <swiper 
              :autoplay="{
                delay:2000,
              }"
              :effect="'fade'"
              :speed=1000
              :modules="modules"
              class="mb-2">
                <swiper-slide v-if="food.path1">
                  <img :src="food.path1" width="100%">
                </swiper-slide>
                <swiper-slide v-if="food.path2">
                  <img :src="food.path2" width="100%">
                </swiper-slide>
                <swiper-slide v-if="food.path3" >
                  <img :src="food.path3" width="100%">
                </swiper-slide>
                <swiper-slide v-if="food.path4" >
                  <img :src="food.path4" width="100%">
                </swiper-slide>
                <div class="comment">
                  <div class="name m-1">{{ food.title }}</div>        
                </div>
              </swiper>
            </a>
          </swiper-slide>
        </swiper>
      </div>
  
      <div class="text-center mt-5" id="list-title">
        L i s t
      </div>
  
      <ul class="item-list row row-cols-2 row-cols-sm-3 row-cols-md-4 pt-5 mx-md-3 mx-lg-5">
        <li class="box p-1" :key="i" v-for="(food,i) in paginatedFoods">
          <a @click="goToDetail(food.id);" style="cursor:pointer;">
            <swiper
            :autoplay="{
              delay:2000,
            }" 
            :effect="'fade'"
            :speed=1000
            :modules="modules"
            class="mb-2">
              <swiper-slide v-if="food.path1">
                <img :src="food.path1" width="100%">
              </swiper-slide>
              <swiper-slide v-if="food.path2">
                <img :src="food.path2" width="100%">
              </swiper-slide>
              <swiper-slide v-if="food.path3" >
                <img :src="food.path3" width="100%">
              </swiper-slide>
              <div class="comment">
                <div v-html="boldLastWord(food.title)" class="name m-1"></div>       
              </div>
            </swiper> 
          </a>
          <button type="button" class="cartBtn btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#myModal" @click="addToCart(food.id)">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" size="xs"/> 
            <span style="font-size:0.8rem"> 장바구니 담기</span>
          </button> 
          <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
             <div class="modal-content">
              <div class="modal-body">
                <div v-if="isInCart">이미 여행 장바구니에 존재합니다</div>
                <div v-else-if="food.id">여행 장바구니에 성공적으로 담겼습니다</div>
                <div v-else>오류 발생으로 실패했습니다</div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">확인</button>
              </div>
             </div>
            </div>
          </div>   
        </li>    
      </ul>
    </div>
  
    <div class="paginationBox m-3" >
      <div v-if="totalPages <= 1" style="cursor:pointer;" class="pageNumbers">
       1
      </div>
      <div v-else>
        <div v-for="pageNumber in totalPages" :key="pageNumber" class="pageNumbers" style="cursor:pointer;" @click="changePage(pageNumber)">
          {{ pageNumber }}
        </div>
      </div>
    </div>
  
  
  </template>
  
  <script>
  // import SearchBar from "../components/layout/SearchBar.vue";
  
  
  //swiper
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
  import { Navigation, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/css/scrollbar';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import 'swiper/css/effect-fade';
  
  export default{
  
    data(){
      return{
        foodList: [],
        foodsPerPage:12,
        currentPage:1,      
        searchTerm: '',
      };
    },
  
    created(){
    
      this.getFoodList();
      this.$store.state.foodCart = this.$cookies.get('foodCart');
  
    },
  
    computed:{
      recommendfoodList(){
        return this.foodList.filter(food=>food.is_rcmd);
      },
      isInCart(){
        return this.$store.state.isInCart;
      },
      totalPages(){
        return Math.ceil(this.foodList.length/this.foodsPerPage);
      },
      paginatedFoods(){
        const startIndex = (this.currentPage - 1) * this.foodsPerPage;
        const endIndex = startIndex + this.foodsPerPage;
        return this.foodList.slice(startIndex,endIndex);
      }
    },
  
    methods:{
      
      async getFoodList(){
       this.foodList = await this.$api("/api/foodList",{});
       console.log(this.foodList);
      },
  
      goToDetail(food_id){
        this.$router.push({path:'/fooddetail', query:{food_id:food_id}});
      },
  
      goToSearch(){
        const searchTerm = this.searchTerm;
        this.foodList = this.foodList.filter(food=>food.title.includes(searchTerm));
        this.$router.push({path:'/searchpage', query:{searchTerm:this.searchTerm, foodList:JSON.stringify(this.foodList)}});
      },
  
      //장바구니 담기 기능
      addToCart(foodId){
        this.$store.commit('addToCart', foodId);
        this.$cookies.set('foodCart', this.$store.state.foodCart);
        const test = this.$cookies.get('foodCart')
        console.log("담기 성공",test)
      },
  
       async getMealList(){
        this.foodList = await this.$api("/api/mealList",{});
        console.log(this.foodList);
      },
      
      async getDrinkList(){
        this.foodList = await this.$api("/api/drinkList",{});
        console.log(this.foodList);
      },
  
      async getDessertList(){
        this.foodList = await this.$api("/api/dessertList",{});
      },
  
      async getNightmarketList(){
        this.foodList = await this.$api("/api/nightmarketList",{});
      },
  
      async getExtraList(){
        this.foodList = await this.$api("/api/extraList",{});
      },
  
      //마지막 핵심단어 굵게
      boldLastWord(foodTitle){
        const words = foodTitle.split((" "));
        const lastWord = words.pop();
        return words.join(" ") + " <strong>" + lastWord + "</strong>";
      },
  
      //페이지 전환
      changePage(pageNumber){
        this.currentPage = pageNumber;
        window.scrollTo({ //스크롤바를 상단으로 
          top:0,
          behavior:'smooth'
        })
      }
    },
  
    components:{
      // SearchBar,
      Swiper,
      SwiperSlide,
    },
    setup() {
        return {
          modules: [Navigation, Scrollbar, Autoplay, EffectFade],
        };
    },
  }
  </script>
  
  <style scoped>
    @import '../assets/styles/FoodList.css';
    @import '../assets/styles/responsive.css';
  </style>