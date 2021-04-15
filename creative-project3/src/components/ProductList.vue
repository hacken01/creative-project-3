<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
       <p>{{product.size}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+product.image">
      </div>
      <form v-on:submit.prevent="">
        <input v-model="product.inscription" placeholder="Inscription...">
        <br />
      <div class="price">
        <h2>{{product.price}}</h2>
        <button v-on:click='addItem(product)' class="auto">Add to Cart</button>
      </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'ProductList',
  data(){
    return {id:50}
  },
   methods: {
   addItem(item){ 
    this.$root.$data.cartSize +=1;
    this.id++;
    this.$root.$data.cart.push({id: this.id, name: item.name,
    price: item.price,
    size: item.size,
    image: item.image,
    inscription: item.inscription});
    item.inscription = "";
   }
  },
  props: {
    products: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #faea8e;
  color: #000;
  padding: 5px 15px;
  height: 75px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 18px;
}
.price {
  display: flex;
}
button {
  margin-top:20px;
  height: 35px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>