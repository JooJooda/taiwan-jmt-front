<template>
    <nav class="navbar bg-body-secondary fixed-top">
      <div class="container-fluid">
        <router-link class="nav-link px-2" to="/" style="font-weight: bolder;">Home</router-link>
      
       <div class="d-flex flex-row justify-content-end">
          <router-link class="nav-link px-2" to="/foodlist">
            <font-awesome-icon :icon="['fas', 'utensils']" class="d-block d-md-none"/> 
            <span class="d-none d-md-block"> 존맛탱굴 리스트</span>
          </router-link>
          <router-link class="nav-link px-2" to="/foodcart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="d-block d-md-none" /> 
            <span class="d-none d-md-block"> 여행 장바구니</span>
          </router-link>
       </div>
      </div>
      
    </nav>
    </template>
    
    <script>
    
    export default{
        name:"MyHeader",
    };
    </script>
    
    <style scoped>
    @import '../../assets/styles/responsive.css';
    .navbar{
      list-style: none;
    }
    .nav-link{
      text-decoration: none;
    }
    .router-link-exact-active {
        color: inherit;
    }
    </style>