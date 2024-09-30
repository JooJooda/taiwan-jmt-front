<template>
    <div class="container">
      <div class="row justify-content-center">
       <div class="col-md-8 col-lg-6">
        <form class="d-flex flex-row p-2 bg-body-tertiary" role="search">
          <input class="form-control me-2" type="search" placeholder="찾으시는 존맛탱굴을 검색해보세요!" aria-label="Search">
          <button class="btn btn-outline-success ratio-1x1" id="search" type="submit" onclick="">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #198754;" />
          </button>
        </form>
       </div>
      </div>
    </div>    
  </template>
     
  <script>
  export default{
         name:"MyHeader",
  };
  </script>