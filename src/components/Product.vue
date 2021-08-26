<template>
  <div class="all-products">
    <div class="product-card">
      <div>
        <img :src="image" class="product-img"/>
      </div>
      <div>
        <div class="product-title">{{ name }}</div>
        <div class="product-price">{{ "$" + price }}</div>
        <div>
          <button class="addtocartbtn" @click="addToCart(id)">Add to Bag</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["id", "name", "image", "price"],
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
  }
};
</script>

<style scoped>
  
  .all-products{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product-card{
    width: 45%;
    height: auto;
  }

  .product-img{
    width: 100%;
    height: auto;
  }

  .product-price{
    font-weight: 700;
  }

  .addtocartbtn{
    border: none;
    background: none;
    text-decoration: underline;
    color: red;
    cursor: pointer;
  }

</style>