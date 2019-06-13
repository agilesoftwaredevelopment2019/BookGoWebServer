<template>
  <div>
    <v-container fluid ma-2 pa-3 class="indigo lighten-4">
      <v-layout>
        <v-flex xs12>
          <div>
            구매요청
          </div>
          <div>
            제목: {{ this.title }}
          </div>
          <div>
            연락처: {{ phonenumber }}
          </div>
          <div>
            메시지: {{ message }}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Noti',
  beforeMount () {
    this.asdf()
  },
  data () {
    return {
      title: ''
    }
  },
  props: {
    buyer_id: Number,
    price: Number,
    seller_id: Number,
    product_id: Number,
    message: String,
    phonenumber: Number,
    transaction_uid: Number
  },
  methods: {
    async asdf () {
      let res = await axios.get('https://bookgo.herokuapp.com/products')
      let a = res.data.find((element) => {
        return element.uid === this.product_id
      })
      a = a.book_id
      let b = await axios.get('https://bookgo.herokuapp.com/books/' + a)
      this.title = b.data.title
    }
  },
  components: {
  }
}
</script>

<style>
</style>
