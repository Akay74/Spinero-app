<template>
  <footer>
    <section id="nav-links">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/men">Men</router-link></div>
      <div><router-link to="/women">Women</router-link></div>
      <div><router-link to="/latest_collections">Latest Collection</router-link></div>
    </section>
    <hr>
    <div id="footer2">
      <section id="extra-links">
        <div><router-link to="/about">About</router-link></div>
        <div><router-link to="/men">Contact</router-link></div>
      </section>
      <section id="social-links">
        <a href=""><img src="../assets/ig.svg" alt="ig"></a>
        <a href=""><img src="../assets/facebook.svg" alt="fb"></a>
        <a href=""><img src="../assets/twitter.svg" alt="twitter"></a>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Century+Gothic&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  footer {
    background-color: #000;
    padding: 2rem 1.5rem;
    width: 100%
  }
  #nav-links div {
    margin-bottom: 0.5rem
  }
  #extra-links div {
    margin: 0.5rem 0rem
  }
  #nav-links a, #extra-links a {
    font-family: 'Century Gothic', sans-serif;
    color: #fff;
    text-decoration: none
  }
  #social-links {
    width: 25%;
    display: flex;
    justify-content: space-between
  }
  #footer2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline
  }
</style>
