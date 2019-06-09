<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs12 sm9>
      <div class="text-xs-right">
        <Star>
        </Star>
      </div>
      <div class="text-xs-center">
        <ProductData
          v-for="(bookname, price, seller_id) in items"
          v-bind:bookname="bookname"
          v-bind:price="price"
          v-bind:seller_id="seller_id"
          v-bind:key="bookname.id">
        </ProductData>
        <v-btn v-on:click="moveToBuy" round color="primary" dark>
          구매 신청하기
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import Star from './components/Star.vue'
import ProductData from './components/ProductData.vue'

export default {
  name: 'Book',
  components: {
    ProductData,
    Star
  },
  methods: {
    moveToBuy: function () {
      this.$router.push({ path: 'buy' })
    }
  }
}
</script>

<style>

</style>
