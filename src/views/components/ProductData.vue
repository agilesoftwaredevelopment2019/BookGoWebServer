<template>
  <div>
    <v-container v-on:click="moveToBook" mb-2 class="blue lighten-4">
      <v-layout>
        <v-flex xs5>
          <v-img height="150px" width="150px" src="https://picsum.photos/500/300?image=15">
          </v-img>
        </v-flex>
        <v-flex xs7 d-flex>
          <v-layout align-center column>
            <v-flex xs3>
              {{ title }}
            </v-flex>
            <v-flex xs3>
              {{ author }}
            </v-flex>
            <v-flex xs3>
              {{ publisher }}
            </v-flex>
            <v-flex xs2>
              {{ price }}
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
      this.setItemInfo({ title: this.title, author: this.author, publisher: this.publisher, uid: this.uid, price: this.price, sellerId: this.sellerId, description: this.description })
      this.$router.push({ path: '/book' })
    }
  },
  components: {
  }
}
</script>

<style>
</style>
