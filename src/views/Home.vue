<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs12 sm9>
      <div>
        <div id="fixed_components">
          <AlarmBar/>
          <p style="font-size:24px;" align="center">
            북고나라
          </p>
          <SearchBar/>
        </div>
        <div id="product_data_list">
          <ProductData
<<<<<<< HEAD
            v-for="item in items"
            v-bind:bookname="item.bookname"
            v-bind:price="item.price"
            v-bind:seller_id="item.seller_id"
            v-bind:key="item.uid">
=======
            v-for="(item, index) in items"
            v-bind:title=item.title
            v-bind:price=item.price
            v-bind:seller_id=item.seller_id
            v-bind:uid=item.uid
            v-bind:key=index>
>>>>>>> 4bfda81bdff80b5bd02b1ca2a32bfb1b741624e0
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
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    SearchBar,
    AlarmBar,
    ProductData
  },
<<<<<<< HEAD
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
=======
  methods: {
    getProductData: function () {
      axios.get('https://bookgo.herokuapp.com/products', {
      }).then(res => {
        console.log(res.data)
        this.items = res.data
        this.getBookTitle()
      })
    },
    getBookTitle: function () {
      var itemLength = this.items.length
      for (var i = 0; i < itemLength; i++) {
        // console.log(this.items[i])
        axios.get('https://bookgo.herokuapp.com/books/' + this.items[i].book_id, {
        }).then(res => {
          this.items[this.cnt].title = res.data.title
          this.cnt++
          this.$forceUpdate()
        })
      }
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
>>>>>>> 4bfda81bdff80b5bd02b1ca2a32bfb1b741624e0
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
