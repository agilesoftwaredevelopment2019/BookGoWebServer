<template>
  <div>
    <v-container v-on:click="moveToBook" mb-2 class="blue lighten-4">
      <v-layout>
        <v-flex xs5>
          <v-img height="150px" width="150px" v-if="title === 'Hayt의 전자기학'" src="https://image.aladin.co.kr/product/17757/88/cover150/k212534220_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === '옥스토비의 일반화학'" src="https://image.aladin.co.kr/product/3896/57/cover150/899260372x_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === 'Kreyszig 공업수학 하'" src="https://image.aladin.co.kr/product/1889/74/cover150/8971292482_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === 'Kreyszig 공업수학 상'" src="https://image.aladin.co.kr/product/1478/98/cover150/897129244x_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === '이펙티브 C'" src="https://image.aladin.co.kr/product/5895/17/cover150/6000845362_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === '컴퓨터 구조 및 설계'" src="https://image.aladin.co.kr/product/5264/19/cover150/s422635174_1.jpg">
          </v-img>
          <v-img height="150px" width="150px" v-if="title === '타이포그래피 교과서'" src="https://image.aladin.co.kr/product/761/19/cover150/8970594582_1.jpg">
          </v-img>
        </v-flex>
        <v-flex xs7 d-flex>
          <v-layout align-center column>
            <v-flex xs3>
              제목 : {{ title }}
            </v-flex>
            <v-flex xs3>
              작가 : {{ author }}
            </v-flex>
            <v-flex xs3>
              출판사 : {{ publisher }}
            </v-flex>
            <v-flex xs3>
              가격 : {{ price }}
            </v-flex>
            <v-flex xs3>
              설명: {{description}}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductData',
  data () {
    return {
    }
  },
  props: {
    title: String,
    price: Number,
    seller_id: Number,
    author: String,
    publisher: String,
    description: String,
    image_path: String,
    product_id: Number
  },
  methods: {
    ...mapActions(['setItemInfo']),
    moveToBook () {
      this.setItemInfo({ title: this.title, author: this.author, publisher: this.publisher, price: this.price, sellerId: this.seller_id, description: this.description, uid: this.product_id })
      this.$router.push({ path: '/book' })
    }
  },
  components: {
  }
}
</script>

<style>
</style>
