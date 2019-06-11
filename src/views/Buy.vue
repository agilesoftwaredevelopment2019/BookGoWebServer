<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs12 sm9>
      <v-text-field
        v-model="phonenumber"
        label="연락처 (핸드폰번호)"
        required
      ></v-text-field>
      <v-text-field
        v-model="message"
        label="구매 신청 메시지"
        required
        v-on:keyup.enter="requestContract"
      ></v-text-field>
      <v-btn v-on:click="requestContract" round color="primary" dark>
        구매 신청하기
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Buy',
  created () {
    if (!this.$store.state.login) {
      this.$router.push({ path: '/login' })
    }
  },
  data () {
    return {
      phonenumber: '',
      message: ''
    }
  },
  components: {
  },
  methods: {
    async requestContract () {
      try {
        await axios.post('https://bookgo.herokuapp.com/transactions', {
          buyer_id: this.$store.state.uid,
          seller_id: this.$store.state.item.seller_id,
          book_id: this.$store.state.item.book_id,
          title: this.$store.state.item.title,
          phonenumber: this.phonenumber,
          description: this.message
        })
        this.$toast.info('구매신청을 완료했습니다')
        this.$router.push({ path: '/' })
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    }
  }
}
</script>

<style>

</style>
