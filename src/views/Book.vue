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
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === 'Hayt의 전자기학'" src="https://image.aladin.co.kr/product/17757/88/cover150/k212534220_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === '옥스토비의 일반화학'" src="https://image.aladin.co.kr/product/3896/57/cover150/899260372x_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === 'Kreyszig 공업수학 - 하'" src="https://image.aladin.co.kr/product/1889/74/cover150/8971292482_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === 'Kreyszig 공업수학 - 상'" src="https://image.aladin.co.kr/product/1478/98/cover150/897129244x_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === '이펙티브 C++'" src="https://image.aladin.co.kr/product/5895/17/cover150/6000845362_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === '컴퓨터 구조 및 설계'" src="https://image.aladin.co.kr/product/5264/19/cover150/s422635174_1.jpg">
            </v-img>
            <v-img height="300px" width="300px" v-if="this.$store.state.item.title === '타이포그래피 교과서'" src="https://image.aladin.co.kr/product/761/19/cover150/8970594582_1.jpg">
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
