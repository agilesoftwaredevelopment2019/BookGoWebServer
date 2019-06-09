<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs11>
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
            v-for="(item, index) in items"
            v-bind:title=item.title
            v-bind:price=item.price
            v-bind:seller_id=item.seller_id
            v-bind:uid=item.uid
            v-bind:key=index>
          </ProductData>
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
    height:40px;
  }
</style>
