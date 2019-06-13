<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs11>
      <div class="text-xs-right">
        <Star>
        </Star>
      </div>
      <v-card height="600px">
        <v-layout align-center column fill-height>
          <v-flex xs6>
            <v-img height="300px" width="300px" src="https://picsum.photos/500/300?image=15">
            </v-img>
          </v-flex>
          <v-flex xs2>
            <div class="headline">
              제목 : {{ this.$store.state.item.title }}
            </div>
          </v-flex>
          <v-flex xs2>
            출판사 : {{ this.$store.state.item.publisher }}
          </v-flex>
          <v-flex xs2>
            가격 : {{ this.$store.state.item.price }}
          </v-flex>
          <v-flex xs2>
            설명 : {{ this.$store.state.item.description }}
          </v-flex>
        </v-layout>
      </v-card>
      <div class="text-xs-center">
        <v-btn v-on:click="moveToBuy" round color="primary" dark>
          구매 신청하기
        </v-btn>
        <v-btn v-on:click="home" round color="primary" dark>
          홈으로
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
    },
    home: function () {
      this.$router.push({ path: '/' })
    }
  },
  props: {
  }
}
</script>

<style>

</style>
