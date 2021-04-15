<template>
  <div id="app">
    <div id="nav">
        <div id="logo">
        <router-link to="/">
          <img src="/images/logo.png">
        </router-link>
      </div>

      <div id = "navigation">
        <router-link to="/" class = "link">Home</router-link>
        <router-link to="/about" class = "link">About Us</router-link>
        <router-link to="/temples" class = "link">Temples</router-link>
        <router-link to="/reviews" class = "link">Reviews</router-link>
      </div>

      <div id = "rightSide">
        <router-link to="/cart">
            <img src="/images/cart.png">
            <p>{{getCartSize}}: items</p> 
        </router-link>
      </div>

    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'app',
  computed: {
    getCartSize() {
      return this.$root.$data.cartSize;
    
    },
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-template-areas: "logo links side";
  margin-bottom: 50px;
}
#logo{
  grid-area: logo;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#navigation{
  grid-area: links;
  display: flex;
  justify-content: center;
}
.link{
  margin-top:40px;
  margin-right:7px;
  margin-left:7px;
  text-decoration: none;
  font-size: 25px;
}
#rightSide{
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}
#rightSide img {
  width: 50px;
}

@media only screen and (max-width: 480px) {
  .link {
    margin-top:20px;
    font-size: 15px;
    margin-right:4px;
    margin-left:4px;
  }
  #rightSide img {
  width: 30px;
  }
  #rightSide p {
    font-size:10px;
  }
}

</style>
