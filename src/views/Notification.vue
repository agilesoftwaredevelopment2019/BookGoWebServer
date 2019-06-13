<template>
  <v-layout align-center justify-center>
    <v-flex xs11>
      <p style="font-size:24px;" align="center">
          알림
      </p>
      <div align="center">
        <Noti
          v-for="(item, index) in items"
          v-bind:buyer_id=item.buyer_id
          v-bind:price=item.price
          v-bind:seller_id=item.seller_id
          v-bind:product_id=item.product_id
          v-bind:message=item.message
          v-bind:phonenumber=item.phonenumber
          v-bind:transaction_uid=item.uid
          v-bind:key=index>
        </Noti>
      </div>
      <div class="text-xs-center">
        <v-btn v-on:click="home" round color="primary" dark>
          홈으로
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import Noti from './components/Noti.vue'

export default {
  name: 'Notification',
  async created () {
    if (!this.$store.state.login) {
      this.$router.push({ path: '/login' })
    }
  },
  data () {
    return {
      idname: '',
      password: '',
      items: []
    }
  },
  props: {
  },
  methods: {
    home: function () {
      this.$router.push({ path: '/' })
    },
    async getNoti () {
      try {
        const response = await axios.get('https://bookgo.herokuapp.com/transactions/seller_id/' + this.$store.state.uid)
        this.items = response.data
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    }
  },
  beforeMount () {
    this.getNoti()
  },
  components: {
    Noti
  }
}
</script>

<style>
  .notification {
    border: 3px skyblue solid;
    border-radius: 25px;
    background-color: skyblue;
    color: white;
    font-size: 15px;
  }
  .notification span {
    vertical-align: middle;
    margin: 10px;
  }
</style>
