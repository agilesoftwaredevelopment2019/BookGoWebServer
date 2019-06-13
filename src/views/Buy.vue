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
            v-model="message"
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
          <v-btn v-on:click="home" round color="primary" dark>
            홈으로
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
      message: ''
    }
  },
  methods: {
    async home () {
      this.$router.push({ path: '/' })
    },
    async requestContract () {
      try {
        let transactionResponse = await axios.post('https://bookgo.herokuapp.com/transactions', {
          product_id: String(this.$store.state.item.uid),
          buyer_id: String(this.$store.state.uid),
          seller_id: String(this.$store.state.item.sellerId),
          price: String(this.$store.state.item.price),
          message: this.message,
          phonenumber: this.phonenumber
        })
        console.log(transactionResponse)
        if (transactionResponse.data.result === 'CREATE') {
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
