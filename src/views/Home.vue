<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs11>
      <div>
        <div id="fixed_top">
          <AlarmBar/>
          <p style="font-size:24px;" align="center">
            북고나라
          </p>
          <SearchBar/>
        </div>
        <div id="product_data_list">
          <ProductData
            v-for="(item, index) in items"
            v-bind:title=item.title
            v-bind:price=item.price
            v-bind:seller_id=item.seller_id
            v-bind:author=item.author
            v-bind:publisher=item.publisher
            v-bind:description=item.description
            v-bind:image_path=item.image_path
            v-bind:product_id=item.product_id
            v-bind:key=index>
          </ProductData>
          <div id="Nodata">
          </div>
        </div>
      </div>
    </v-flex>
    <footer class="footer">
        <div v-if="this.$store.state.login != true">
          <v-btn v-on:click="moveToLogIn" block color="blue">
            로그인
          </v-btn>
        </div>
        <div v-else>
          <v-btn v-on:click="moveToMyPage" block color="blue">
            마이 페이지
          </v-btn>
        </div>
      </footer>
  </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import AlarmBar from './components/AlarmBar.vue'
import ProductData from './components/ProductData.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    SearchBar,
    AlarmBar,
    ProductData
  },
  methods: {
    async getProductData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/listWithTitle')
        if (productData.data.result === "NOT_FOUND") {
          this.$toast.info('등록된 상품이 없습니다')
        } else {
          this.items = productData.data
        }
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    moveToLogIn: function () {
      this.$router.push({ path: '/login' })
    },
    moveToMyPage: function () {
      this.$router.push({ path: '/mypage' })
    }
  },
  beforeMount () {
    this.cnt = 0
    this.getProductData()
  },
  data () {
    return {
      items: [
      ],
      cnt: 0
    }
  }
}
</script>

<style>
  footer{
    position : fixed;
    bottom : 0;
    width: 100%;
    height:60px;
  }
</style>
