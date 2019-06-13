<template>
  <v-layout class="align-center justify-center" mt-2>
    <v-flex xs11>
      <div>
        <SearchBar/>
      </div>
      <div>
        <v-tabs color="cyan" content-class="mt-3" grow>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab>
            관심상품
          </v-tab>
          <v-tab-item>
            <template v-if="this.items !== ''">
              <div id="interested_lsit">
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
            </template>
          </v-tab-item>
          <v-tab>
            판매중
          </v-tab>
          <v-tab-item>
            <template v-if="this.items_sale !== ''">
              <div id="selling_list">
                <ProductData
                  v-for="(item, index) in items_sale"
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
            </template>
          </v-tab-item>
          <v-tab>
            구매신청
          </v-tab>
          <v-tab-item>
            <template v-if="this.items_buy !== ''">
              <div id="buying_list">
                <ProductData
                  v-for="(item, index) in items_buy"
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
            </template>
          </v-tab-item>
        </v-tabs>
      </div>
      <v-flex text-xs-center mt-2>
        <v-btn v-on:click="moveToRegister" round color="primary" dark>
          판매할 상품 등록하기
        </v-btn>
        <v-btn v-on:click="home" round color="primary" dark>
          홈으로
        </v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import ProductData from './components/ProductData.vue'
import SearchBar from './components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'MyPage',
  async created () {
    if (!this.$store.state.login) {
      this.$router.push({ path: '/login' })
    }
    await this.getInterestedData()
    await this.getSellingData()
    await this.getBuyingData()
  },
  components: {
    SearchBar,
    ProductData
  },
  data () {
    return {
      items: [
      ],
      items_sale: [
      ],
      items_buy: [
      ]
    }
  },
  beforeMount () {
  },
  methods: {
    async getInterestedData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/user_interest/' + this.$store.state.uid)
        if (productData.data.length === 0) {
          console.log('no Interest Data')
          this.items = ''
        }
        else if (productData.data.result !== 'NOT_FOUND') {
          console.log('get interest data')
          console.log(productData.data)
          this.items = productData.data
        } else {
          console.log('no Interest Data')
          this.items = ''
        }
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async getSellingData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/seller_id/' + this.$store.state.uid)
        if (productData.data.length === 0) {
          console.log('no selling Data')
          this.items_sale = ''
        } else if (productData.data.result !== 'NOT_FOUND') {
          console.log('get selling data')
          console.log(productData.data)
          this.items_sale = productData.data
        } else {
          console.log('no selling data')
          this.items_sale = ''
        }
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async getBuyingData () {
      try {
        let productData = await axios.get('https://bookgo.herokuapp.com/products/buyer_id/' + this.$store.state.uid)
        if (productData.data.length === 0) {
          console.log('no buying Data')
          this.items_buy = ''
        } else if (productData.data.result !== 'NOT_FOUND') {
          console.log('get buying data')
          console.log(productData.data)
          this.items_buy = productData.data
        } else {
          console.log('no buying Data')
          this.items_buy = ''
        }
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    home: function () {
      this.$router.push({ path: '/' })
    },
    moveToRegister: function () {
      this.$router.push({ path: '/register' })
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
