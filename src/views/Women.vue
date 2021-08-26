<template>
  <div>
    <section class='hero'>
      <div class="hero-text">
        <h2>Women's Collection</h2>
      </div>
    </section>

    <div class="women-wrapper">
      <div class="header">
        <div class="title">
          <h3>Women</h3>
        </div>
        <router-link to="/women" class="go-to">check it out</router-link>
      </div>

      <div class="card-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur consectetur, atque corporis, enim sunt similique.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .hero{
    background-image: url('../assets/hero_img.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 70vh;
    color: #fff;
    display: grid;
    place-items: center;
  }

  .hero-text{
    margin: 2rem auto;
    text-align: center;
    width: 80%;
    height: 80%;
    border: 2px solid #fff;
    display: grid;
    place-items: center;
  }

  .women-wrapper{
    margin: 2.5rem 1rem 3.5rem;
  }

  .header{
    display: flex;
    justify-content: space-between;
  }

  .title{
    color: #4f4f4f;
    font-weight: 700;
    font-size: 18px;
  }

  .go-to{
    font-size: 14px;
    color: red;
    text-decoration: underline;
  }
</style>
