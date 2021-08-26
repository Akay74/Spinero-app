<template>
  <div id='app'>
    <div>
      <section class='hero'>
        <div class="hero-text">
          <h2>Spinero Turtlenecks</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing ellit.
            Adiquet maecenas et leo sit.
            Lorem ipsum dolor sit amet.
          </p>
          <div class="hero-button">
            <router-link to='/' class="hero-link">Shop Now</router-link>
          </div>
        </div>
      </section>

      <section class="page-section lat-col">
        <div class="header">
          <div class="title">
            <h3>Latest Collections</h3>
          </div>
          <router-link to="/latest_collections" class="go-to">check it out</router-link>
        </div>

        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur consectetur, atque corporis, enim sunt similique.
          </p>
        </div>

        <div class="all-latest-products">
          <div class="latest-product-card">
            <div class="title-position">
              <img src="../assets/jersey.png" class="product-img"/>
              <div class="latest-product-title">Jerseys</div>
            </div>
          </div>

          <div class="latest-product-card">
            <div class="title-position">
              <img src="../assets/girlshades.png" class="product-img"/>
              <div class="latest-product-title">Shades</div>
            </div>
          </div>

          <div class="latest-product-card">
            <div class="title-position">
              <img src="../assets/vest.png" class="product-img"/>
              <div class="latest-product-title">Vests</div>
            </div>
          </div>

          <div class="latest-product-card">
            <div class="title-position">
              <img src="../assets/hoodie.png" class="product-img"/>
              <div class="latest-product-title">Hoodies</div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section for-women">
        <div class="header">
          <div class="title">
            <h3>Women</h3>
          </div>
          <div >
            <router-link to="/women" class="go-to">check it out</router-link>
          </div>
        </div>

        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur consectetur, atque corporis, enim sunt similique.
          </p>
        </div>

        <div class="all-products">
          <div class="product-card">
            <div>
              <img src="../assets/grey_turtleneck.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/grey_turtleneck.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/grey_turtleneck.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/grey_turtleneck.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section for-men">
        <div class="header">
          <div class="title">
            <h3>Men</h3>
          </div>
          <router-link to="/men" class="go-to">check it out</router-link>
        </div>

        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur consectetur, atque corporis, enim sunt similique.
          </p>
        </div>

        <div class="all-products">
          <div class="product-card">
            <div>
              <img src="../assets/hoodie.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/hoodie.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/hoodie.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>

          <div class="product-card">
            <div>
              <img src="../assets/hoodie.png" class="product-img"/>
            </div>
            <div>
              <div class="product-title">Cotton Turtle Neck</div>
              <div class="product-price">$400</div>
            </div>
            <div>
              <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

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
    text-align: center;
    width: 90%;
  }

  .hero-text p{
    margin: 1.5rem;
  }

  .hero-button{
    background-color: #fff;
    width: 40%;
    padding: 10px 5px;
    margin: 2.5rem auto 0;
  }

  .hero-link{
    text-decoration: none;
    color: #000;
    text-align: center;
  }

  .page-section{
    margin: 3rem 1rem;
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .title{
    color: red;
    font-weight: 900;
  }

  .go-to{
    font-size: 14px;
    color: red;
    text-decoration: underline;
  }

  .all-latest-products{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

   .all-products{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .latest-product-card{
    width: 47%;
    height: 50%;
    margin: 0.5rem 0;
  }

  .product-card{
    height: auto;
    flex: 0 1 148px;
    margin: 1.7rem 0.5rem 0;
  }

  .product-img{
    width: 100%;
    height: 200px;
    margin-bottom: 0.3rem;
  }

  .product-price{
    font-weight: 700;
    margin: 0.3rem 0;

  }

  .addtocartbtn{
    border: none;
    background: none;
    text-decoration: underline;
    color: red;
    cursor: pointer;
  }

  .title-position{
    position: relative;
  }

  .latest-product-title{
    color: #fff;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-decoration: underline;
    position: absolute;
    bottom: 10%;
    left: 35%;
  }
</style>
