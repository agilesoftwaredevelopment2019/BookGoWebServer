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
        <v-btn v-on:click="onSubmit" round color="primary" dark>
          등록하기
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      bookname: '',
      author: '',
      price: '',
      publisher: '',
      details: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('try_register', {
        bookname: this.bookname,
        author: this.author,
        price: this.price,
        publisher: this.publisher,
        details: this.details
      }).then(() => this.$router.replace({ path: '/home' })
      )
    }
  }
}
</script>

<style>

</style>
