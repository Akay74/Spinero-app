<template>
  <div>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="header-logo">
        <router-link to="/"><img src='..\assets\spinero_logo.svg'></router-link>
      </div>

      <div id="icon_links" >
        <button id="modal-btn"><img src='..\assets\search.svg'></button>
        <div class="modal">
          <span class="close-btn"><img src='..\assets\backarrow.svg'></span>
          <div class="modal-content">
            <span class="search-active"><img src='..\assets\search.svg'></span>
            <input type="text" placeholder="What are you searching for?">
          </div>
        </div>

        <router-link to="/"><img src='..\assets\fav.svg'></router-link>
        <router-link to="/"><img src='..\assets\cart.svg'></router-link>
        <router-link to="/"><img src='..\assets\profile.svg'></router-link>
      </div>

      <nav class="desktop-nav">
        <router-link to="/men">Men</router-link>
        <router-link to="/women">Women</router-link>
        <router-link to="/latest_collections">Latest Collection</router-link>
        <router-link to="/">Home</router-link>
      </nav>

      <button class="hamburger">
        <div class="bar"></div>
      </button>
    </header>
    <nav class="mobile-nav">
      <router-link to="/men">Men</router-link>
      <router-link to="/women">Women</router-link>
      <router-link to="/latest_collections">Latest Collection </router-link>
      <router-link to="/">Home</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentNumber: 0,
        timer: null
      }
    },
    methods: {
      loadNav () {
        let modalBtn = document.getElementById('modal-btn')
        let modal = document.querySelector('.modal')
        let closeBtn = document.querySelector('.close-btn')
        modalBtn.onclick = function () {
          modal.style.display = 'block'
        }
        closeBtn.onclick = function () {
          modal.style.display = 'none'
        }
        window.onclick = function (e) {
          if (e.target === modal) {
            modal.style.display = 'one'
          }
        }
      },
      toggleHamburger () {
        let menu_btn = document.querySelector('.hamburger');
        let mobile_menu = document.querySelector('.mobile-nav');
        menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
      })
    },

    mounted() {
        this.loadNav(),
        this.toggleHamburger(),
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%
  }
  header  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1.2rem 1rem;
    background-color: #fbfbfb;
    font-family: 'Century Gothic', sans-serif
  }
  #icon_links{
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
  .desktop-nav{
    display: none;
  }
  nav router-link {
    font-weight: 900;
    color: #4F4F4F;
    text-decoration: none;
  }
  nav router-link.router-link-exact-active {
    font-weight: bolder;
    color: #000;
    border-bottom: 2px solid #000
  }
  .hamburger{
    position: relative;
    display: block;
    width: 35px;
    cursor: pointer;
    appearance: none;
    background: none;
    outline: none;
    border: none;
  }
  .hamburger .bar, .hamburger:after, .hamburger:before{
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #4F4F4F;
    margin: 6px 0px;
    transition: 0.4s
  }
  .hamburger.is-active:before{
    transform: rotate(-45deg) translate(-7px, 5px)
  }
  .hamburger.is-active .bar{
    opacity: 0;
  }
  .hamburger.hamburger.is-active:after{
    transform: rotate(45deg) translate(-7px, -7px)
  }

  .mobile-nav{
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    min-height: 100vh;
    z-index: 98;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(90,190,90,1) 100%);
    margin-top: 60px;
    transition: 0.4s;
  }

  .mobile-nav a{
    font-size: 18px;
    font-weight: bolder;
    display: block;
    text-align: center;
    margin: 0 auto 16px;
    width: 100%;
    max-width: 200px;
    padding: 12px 16px;
    text-decoration: none;
    color: #fff;
    background-color: #248d24;
    border-radius: 4px;
  }

  .mobile-nav a:hover{
    background-color: #62bd62;
  }
  .modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff
  }
  .modal-content {
    position: relative;
    background-color: #fbfbfb;
    padding: 20px;
    margin: auto;
    width: 80%;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
  }
</style>