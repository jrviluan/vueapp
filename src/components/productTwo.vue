<template>
  <div class="container content">
      <h2>Product List 2</h2>

      <li v-for="product in saleProducts">
          <span>{{ product.name }}</span>
          <span>{{ product.price }}</span>
      </li>
  </div>
</template>

<script>
export default{
  computed:{
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  }
}
</script>