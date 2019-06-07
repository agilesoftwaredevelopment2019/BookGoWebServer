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
            v-for="item in items"
            v-bind:bookname="item.bookname"
            v-bind:price="item.price"
            v-bind:seller_id="item.seller_id"
            v-bind:key="item.uid">
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
  data () {
    return {
      items: [
        {
          uid: 1,
          bookname: "test1",
          price: 123,
          seller_id: 1
        },
        {
          uid: 2,
          bookname: "test2",
          price: 555,
          seller_id: 3
        }
      ]
    }
  }
}
</script>

<style>
  footer{
    position : fixed;
    bottom : 0;
    width: 100%;
    height:40px;
  }
</style>
