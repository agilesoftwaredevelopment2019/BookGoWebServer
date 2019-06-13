<template>
  <v-layout align-center justify-center>
    <v-flex xs11>
      <select v-model="bookname">
        <option disabled value="">도서 제목</option>
        <option>Hayt의 전자기학</option>
        <option>옥스토비의 일반화학</option>
        <option>Kreyszig 공업수학 하</option>
        <option>Kreyszig 공업수학 상</option>
        <option>이펙티브 C</option>
        <option>컴퓨터 구조 및 설계</option>
        <option>타이포그래피 교과서</option>
      </select>
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
    details: '',
    uid: 0
  }),
  methods: {
    async requestRegister () {
      try {
        if (this.bookname === 'Hayt의 전자기학') {
          this.uid = 1
        }
        if (this.bookname === '옥스토비의 일반화학') {
          this.uid = 2
        }
        if (this.bookname === 'Kreyszig 공업수학 - 하') {
          this.uid = 3
        }
        if (this.bookname === 'Kreyszig 공업수학 - 상') {
          this.uid = 4
        }
        if (this.bookname === '이펙티브 C++') {
          this.uid = 5
        }
        if (this.bookname === '컴퓨터 구조 및 설계') {
          this.uid = 6
        }
        if (this.bookname === '타이포그래피 교과서') {
          this.uid = 7
        }
        let response = await axios.post('https://bookgo.herokuapp.com/products', {
          book_id: this.uid,
          seller_id: this.$store.state.uid,
          price: this.price,
          image_path: 'asdf',
          description: this.details
        })
        if (response.data.result === 'CREATE') {
          this.$toast.info('등록을 완료했습니다')
          this.$router.push({ path: '/mypage' })
        } else {
          this.$toast.error('등록되지 않았습니다')
        }
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    }
  }
}

</script>

<style>

</style>
