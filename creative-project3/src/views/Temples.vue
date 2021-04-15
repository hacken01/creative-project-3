<template>
<div>
<p class = "Header"> Temples with not available image <strong>are available for sale.</strong> It is just the photo not available yet! </p>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <ProductList :products="products" />
 
  <div class="footer-repository">
    <p>Git Repository:
      click <a href="https://github.com/BYU-CS-260-Winter-2021/lab-3b-grocery-store-hacken01.git">here</a> to
      access
      the repository </p>
  </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Temples',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Header{
  margin:0px;
  text-align:center;
  font-size:20px;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
.footer-repository {
    background-color: #999999;
	text-align:center;
}
</style>