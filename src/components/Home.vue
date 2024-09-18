<template>
    <div class="header">
      <div class="main-bg"></div>
      <div class="header-search">
          <div class="inner">
              <h1 class="site-name">
                 <router-link to="/">LIKELY</router-link>
              </h1>
              <form class="form-search">
                  <div class="search-outer">
                      <input type="search" class="input-search" maxlength="16"/>
                      <button type="submit" class="btn-search">
                          <img src="../assets/ic-search-s.svg">
                      </button>
                  </div>
              </form>
              <nav class="header-icon">
                  <button class="btn-icon">
                      <img src="../assets/ic-cart.svg">
                  </button>
                  <button class="btn-icon">
                      <img src="../assets/ic_wish_line_r.png">
                  </button>
                  <button class="btn-icon">
                      <a href="/mypage">
                          <img src="../assets/ic-my.svg">
                      </a>
                  </button>
              </nav>
          </div>
      </div>
      <div class="Navbar-menu">
        <router-link to="/questions" class="tab-menu">Q&A</router-link>
        <router-link to="/knowledge" class="tab-menu">지식</router-link>
        <router-link to="/community" class="tab-menu">커뮤니티</router-link>
        <router-link to="/events" class="tab-menu">이벤트</router-link>
        <router-link to="/trainings" class="tab-menu">국비탐험대</router-link>
        <router-link to="/jobs" class="tab-menu">JOBS</router-link>
        <router-link to="/notice" class="tab-menu">공지</router-link>
      </div>
  </div>
  
  </template>
  
  <script>
  export default {
      name : 'Home',
  }
  </script>
  
  <style>
  dd, dl, dt, li, ul {
      list-style: none;
      margin: 0;
      /*padding: 0;*/
  }
  *{
      box-sizing: border-box;
  }
  a{
      text-decoration-line:  none;
  
  }
  
  
  .main-bg{
      display: block;
      height: 120px;
      background-image: url('https://image.brandi.co.kr/home/banner/bannerImage_1451867_1711585057.jpg');
      background-position: center;
      background-size: cover;
      max-width: 100%;
      margin: 0 auto;
  }
  .site-name{
      width: 116px;
      height: 47px;
  }
  
  
  .header-search{
      position: relative;
  }
  
  .inner{
      display: flex;
      justify-content: space-between;
      padding: 30px 20px 24px;
      max-width: 1260px;
      margin: 0 auto;
  }
  
  .form-search{
      display: flex;
      justify-content: flex-end;
      flex: 1 1 auto;
  }
  
  .search-outer{
      display: flex;
      flex-grow: 0;
      justify-content: space-between;
      /*border-bottom: 2px solid #202429;*/
      border-width: 0 0 2px;
      min-height: 40px;
  }
  .input-search{
      border-width: 0 0 2px;
      width: 300px;
      height: 65px;
      font-size: 15px;
  }
  .input-search:focus{
      border: none;
      outline: none;
      border-bottom: 2px solid #202429;
  }
  .input-search::-webkit-search-cancel-button {
      display: none;
  }
  
  .btn-search{
      position: absolute;
      background-color: transparent;
      border: 0;
      margin-left: 270px;
      top: 50px;
  }
  .header-icon{
      margin-left: 100px;
      margin-right: -0px;
  
  }
  .btn-icon{
      background-color: transparent;
      border: 0;
      margin-right: 20px;
  }
  .Navbar-menu{
      margin: 0 auto;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
  }
  .tab-menu{
      padding: 12px 8px;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      text-decoration: none;
      color: black;
  }
  </style>