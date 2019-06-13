<template>
  <v-layout justify-center mt-2>
    <v-flex xs11>
      <v-layout fill-height="" column>
        <v-flex text-xs-center ma-3>
          <template v-if="this.items !== ''">
            <div class="headline">
              {{ this.items[0].title }} 검색 결과
            </div>
          </template>
          <template v-if="this.items === ''">
            <div class="headline">
              검색 결과 없음
            </div>
          </template>
        </v-flex>
        <div id="product_data_list">
          <template v-if="this.items !== ''" >
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
          </template>
        </div>
        <v-flex text-xs-center>
          <v-btn v-on:click="home" round color="primary" dark>
            홈으로
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

import ProductData from './components/ProductData.vue'

export default {
  name: 'Search',
  components: {
    ProductData
  },
  methods: {
    home () {
      this.$router.push({ path: '/' })
    }
  },
  beforeMount () {
    if (this.$route.params.data.result !== 'NOT_FOUND') {
      this.items = this.$route.params.data
    } else {
      this.items = ''
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style>

</style>
