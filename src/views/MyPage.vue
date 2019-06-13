<template>
  <v-layout class="align-center justify-center">
    <v-flex xs12 sm6>
      <div>
        <SearchBar/>
      </div>
      <div>
        <v-tabs content-class="mt-3">
          <v-tab>
            관심상품
          </v-tab>
          <v-tab>
            판매중
          </v-tab>
          <v-tab>
            구매신청
          </v-tab>
          <v-tab-item>
            <div id="interested_list">
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
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
      <v-btn v-on:click="moveToRegister" round color="primary" dark>
        판매할 상품 등록하기
      </v-btn>
      <v-btn v-on:click="home" round color="primary" dark>
        홈으로
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'MyPage',
  async created () {
    if (!this.$store.state.login) {
      this.$router.push({ path: '/login' })
    }
  },
  components: {
    SearchBar
  },
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    async getInterestedData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/user_interest/' + this.$store.state.uid)
        const items = productData.data
        let itemsWithTitle = await this.getBookTitle(items)
        this.items = itemsWithTitle
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async getSellingData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/seller_id/' + this.$store.state.uid)
        const items = productData.data
        let itemsWithTitle = await this.getBookTitle(items)
        this.items = itemsWithTitle
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async getBuyingData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/buyer_id/' + this.$store.state.uid)
        const items = productData.data
        let itemsWithTitle = await this.getBookTitle(items)
        this.items = itemsWithTitle
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async getBookTitle (items) {
      var itemLength = items.length
      for (var i = 0; i < itemLength; i++) {
        let bookId = items[i].book_id
        let bookInfo = await axios.get('https://bookgo.herokuapp.com/interests/' + bookId)
        items[i].title = bookInfo.data.title
      }
      return items
    },
    moveToRegister: function () {
      this.$router.push({ path: 'register' })
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
