<template>
    <v-layout align-center justify-center>
        <v-flex xs11>
            <div>
                <SearchBar/>
            </div>
            <div id="product_data_list">
                <ProductData
                    v-for="(bookname, price, seller_id) in items"
                    v-bind:bookname="bookname"
                    v-bind:price="price"
                    v-bind:seller_id="seller_id"
                    v-bind:key="bookname.id">
                </ProductData>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'Search',
  components: {
    SearchBar
  },
  items: {
    bookname: 'test',
    price: 3000,
    seller_id: 12,
    id: 1
  },
  methods: {
    async getProductData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/books')
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
        let bookInfo = await axios.get('https://bookgo.herokuapp.com/books/' + bookId)
        items[i].title = bookInfo.data.title
      }
      return items
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
