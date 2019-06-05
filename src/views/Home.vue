<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs12 sm9>
      <div>
        <AlarmBar/>
        <p style="font-size:24px;" align="center">
          북고나라
        </p>
        <SearchBar/>
        <div id="product_data_list">
          <ProductData
            v-for="(bookname, price, seller_id) in items"
            v-bind:bookname="bookname"
            v-bind:price="price"
            v-bind:seller_id="seller_id"
            v-bind:key="bookname.id">
          </ProductData>
        </div>
      </div>
      <footer class="footer">
        <v-btn block color="blue">
          로그인
        </v-btn>
      </footer>
    </v-flex>
  </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import AlarmBar from './components/AlarmBar.vue'
import ProductData from './components/ProductData.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    AlarmBar,
    ProductData
  },
  items: {
    {
      bookname: 'test'
      price: 3000
      seller_id: 12
      id: 1
    }
  }
}
</script>

<style>
  footer{
    position : fixed;
    bottom : 0;
    width: 77%;
    height:40px;
  }
</style>
