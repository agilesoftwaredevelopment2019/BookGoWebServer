<template>
  <v-layout justify-center fill-height>
    <v-flex xs11>
      <v-layout class="v-layout" fill-height="" column>
        <v-flex xs2 mt-5>
          <v-text-field
            v-model="phonenumber"
            label="연락처 (핸드폰번호)"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-textarea
            outline
            v-model="description"
            label="구매 신청 메시지"
            required
            wrap
            v-on:keyup.enter="requestContract"
          ></v-textarea>
        </v-flex>
        <v-flex text-xs-center>
          <v-btn v-on:click="requestContract" round color="primary" dark>
            구매 신청하기
          </v-btn>
        </v-flex>
      </v-layout>
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
  components: {
  },
  data () {
    return {
      phonenumber: '',
      description: ''
    }
  },
  methods: {
    async requestContract () {
      try {
        let transactionResponse = await axios.post('https://bookgo.herokuapp.com/transactions', {
          book_id: this.$store.state.item.book_id,
          buyer_id: this.$store.state.uid,
          seller_id: this.$store.state.item.seller_id,
          price: this.$store.state.item.price,
          title: this.$store.state.item.title,
          phonenumber: this.phonenumber,
          description: this.description
        })
        console.log(transactionResponse)
        if (transactionResponse.data.length !== 0) {
          this.$toast.info('구매 신청이 완료되었습니다.')
          this.$router.push({ path: '/' })
        } else {
          this.$toast.error('구매 신청이 실패하였습니다.')
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
