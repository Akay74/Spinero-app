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

      <nav class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/men">Men</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/women">Women</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/latest_collections">Latest Collection</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </nav>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </header>
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
    }
  },
  mounted () {
    this.loadNav()
  }
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
  nav a {
    font-weight: 900;
    color: #4F4F4F;
    text-decoration: none;
  }
  nav a.router-link-exact-active {
    font-weight: bolder;
    color: #000;
    border-bottom: 2px solid #000
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
    animation-duration: 0.4s
  }
</style>
