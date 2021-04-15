<template>
  <div>
      <div class="cartHeader">
      <h1 v-if = 'isEmpty'> Your Cart Looks Empty!</h1>
      <h1 v-else>Your Cart </h1>
      </div>
    <div class="container">
    <div class="elements">
      <div class="cart" v-for="item in cart" :key="item.id">
        <div class="headerItem">
          <h1>{{item.name}}</h1>
          <p>{{item.size}}</p>
          <p v-if="item.inscription"> INC: {{item.inscription}}</p>
        </div>
        <div class="image">
          <img :src="'/images/'+item.image">
        </div>
        <div class="price">
          <h2>{{item.price}}</h2>
          
          <button class="removeBtn" v-on:click='removeItem(item)'>Remove</button>
        
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
   removeItem(item){
     this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(item),1);
     if(this.$root.$data.cartSize > 0)
        this.$root.$data.cartSize -=1;
   }
  },
  computed: {
    cart(){
      return this.$root.$data.cart;
    },
     isEmpty(){
      if(this.$root.$data.cartSize > 0)
      return false;
      else
      return true;
    },
    totalPriceCart(){
      return this.$root.$data.totalPrice;
    }
  },  
};
</script>

<style scoped>
.cartHeader{
  text-align:center;
  margin-bottom:auto;
}
.container {
  border-style:groove;
  display: flex;
  align-items: center;
  justify-content: center;
}
div:empty:after{
  font-size: 20px;
  content:'oh no... Try Adding Some Items!';
}

.elements {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cart {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.cart img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.cart .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.headerItem {
  background: #cf721b;
  color: #000;
  padding: 5px 15px;
  height: 80px;
}
.headerItem h1 {
  font-size: 16px;
  margin:0px;
}
.headerItem h2 {
  font-size: 14px;
}
.headerItem p {
  margin: 0px;
  font-size: 17px;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: #cf721b;
  color: white;
  border: none;
  margin:5px;
  margin-left:65px;
}
.auto {
  margin-left: auto;
}
</style>