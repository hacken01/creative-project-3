<template>
<div>
  <div class="wrapper">

   <p class = "Header"> Clearance!!! <br> Take advantage of these awesome products! </p>
  </div>
  <ProductList :discounted="temples" />
 
  <div class="footer-repository">
    <p>Git Repository:
      click <a href="https://github.com/hacken01/creative-project-3.git">here</a> to
      access
      the repository </p>
  </div>
</div>
</template>

<script>
import ProductList from "../components/clearenceList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    temples() {
      return this.$root.$data.discounted.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
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
  font-size:50px;
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