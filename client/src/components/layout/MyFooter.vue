<template>
    <div class="footer container-fluid bg-body-secondary">
     <footer class="row px-5 py-5">
         <div class="col-6 mb-3">
             <h5>Menu</h5>
             <ul class="nav flex-column">
                 <li class="nav-item mb-2"><router-link class="nav-link p-0 text-body-secondary" to="/">Home</router-link></li>
                 <li class="nav-item mb-2"><router-link class="nav-link p-0 text-body-secondary" to="/foodcart">여행 장바구니</router-link></li>
             </ul>
         </div>
       
         <div class="col-6 mb-3">
             <h5>Link</h5>
             <div class="instagram no-underline"> 
                 <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram : @digua.3.chu
             </div>
         </div>
       
         <div class="d-flex flex-column py-3 mb-5 border-top">
             <p>2024 Copyright &copy; digua.3.chu. All rights reserved.</p>
             <p>Author : digua.3.chu </p>
             <p>사진 도용 및 불펌, 2차 가공 금지</p>
             <p id="visitors">
                 <font-awesome-icon :icon="['fas', 'person']" />
             </p>
         </div>
     </footer>
     </div>
 
 </template>
    
 <script>
 export default{
     name:"MyFooter",
 };
 </script>
 
 <style scoped>
 @import '../../assets/styles/responsive.css';
   
 .no-underline{
     text-decoration: none;
     color:black;
 }
 .router-link-exact-active {
     color: inherit;
 }
 
 .footer{
     text-align: left!important;
 }
 </style>