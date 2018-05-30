<template>
  <div class="container content">
      <h2>Product List</h2>

      <li v-for="product in saleProducts">
          <span>{{ product.name }}</span>
          <span>{{ product.price }}</span>
      </li>
      <product-two></product-two>
      <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import productTwo from './productTwo';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default{
  components: {
    'product-two' : productTwo
  },
  computed:{
    products(){
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts',
      'otherGetters'
    ])
  },
  methods:{
    ...mapActions([
      'reducePrice',
      'otherAction'
    ])
  }
}
</script>