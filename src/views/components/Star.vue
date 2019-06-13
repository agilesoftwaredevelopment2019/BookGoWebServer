<template>
  <div>
    <v-container fluid ma-0 pa-0>
      <div class="star">
        <v-btn icon large dark color="primary" v-on:click="toggleInterested">
          <v-icon v-if=isInterested>star</v-icon>
          <v-icon v-else>star_border</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Star',
  data () {
    return {
      isInterested: false
    }
  },
  created () {
    this.asdf()
  },
  methods: {
    async asdf () {
      try {
        let uid = this.$store.state.uid
        let response = await axios.get('https://bookgo.herokuapp.com/interests/' + uid)
        window.console.log(response)
        const f = response.data.find((element) => {
          return element.product_id === this.$store.state.item.uid
        })
        this.isInterested = f !== undefined
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    },
    async toggleInterested () {
      if (!this.$store.state.login) {
        this.$router.push({ path: '/login' })
      }
      try {
        if (this.isInterested) {
          let uid = this.$store.state.uid
          let pid = this.$store.state.item.uid
          await axios.delete('https://bookgo.herokuapp.com/interests/' + uid + '/' + pid)
          this.$toast.info('관심상품이 해제되었습니다')
        } else {
          await axios.post('https://bookgo.herokuapp.com/interests', {
            user_id: this.$store.state.uid,
            product_id: this.$store.state.item.uid
          })
          this.$toast.info('관심상품이 등록되었습니다')
        }
        this.isInterested = !this.isInterested
      } catch (err) {
        this.$toast.error('Failed to get data from server')
      }
    }
  },
  components: {
  },
  props: {
  }
}
</script>

<style>
</style>
