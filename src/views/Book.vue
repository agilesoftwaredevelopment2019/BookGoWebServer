<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs11>
      <div class="text-xs-right">
        <Star>
        </Star>
      </div>
      <v-card height="500px">
        <v-layout align-center column>
          <v-flex xs6>
            <v-img height="300px" width="300px" src="https://picsum.photos/500/300?image=15">
            </v-img>
          </v-flex>
          <div class="headline">
            {{ this.$store.state.item.title }}
          </div>
          <v-flex xs3>
            {{ this.$store.state.item.publisher }}
          </v-flex>
          <v-flex xs2>
            가격 : {{ this.$store.state.item.price }}
          </v-flex>
        </v-layout>
      </v-card>
      <div class="text-xs-center">
        <v-btn v-on:click="moveToBuy" round color="primary" dark>
          구매 신청하기
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import Star from './components/Star.vue'

export default {
  name: 'Book',
  components: {
    Star
  },
  methods: {
    moveToBuy: function () {
      this.$router.push({ path: 'buy' })
    }
  },
  props: {
  }
}
</script>

<style>

</style>
