<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-text-field
        v-model="bookname"
        label="도서 제목"
        required
      ></v-text-field>
      <v-text-field
        v-model="author"
        label="저자 이름"
        required
      ></v-text-field>
      <v-text-field
        v-model="publisher"
        label="출판사"
        required
      ></v-text-field>
      <v-text-field
        v-model="price"
        label="가격"
        required
      ></v-text-field>
      <v-text-field
        v-model="details"
        label="상품 상태 및 상세설명"
        required
      ></v-text-field>
      <div class="text-xs-center">
        <v-btn v-on:click="requestRegister" round color="primary" dark>
          등록하기
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Register',
  data: () => ({
    bookname: '',
    author: '',
    price: '',
    publisher: '',
    details: ''
  }),
  methods: {
    async requestRegister () {
      try {
        await axios.post('https://bookgo.herokuapp.com/products', {
          seller_id: this.$store.state.item.seller_id,
          bookname: this.bookname,
          author: this.author,
          price: this.price,
          publisher: this.publisher,
          details: this.details
        })
        this.$toast.info('등록을 완료했습니다')
        this.$router.push({ path: '/mypage' })
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    }
  }
}

</script>

<style>

</style>
