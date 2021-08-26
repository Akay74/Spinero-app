<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Century+Gothic&display=swap');
*{
  font-family: 'Century Gothic', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}
</style>
