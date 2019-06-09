<template>
  <div>
    <v-container mb-2 class="indigo lighten-4">
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
export default {
  name: 'ProductData',
  data () {
    return {
    }
  },
  props: {
    bookname: String,
    author: String,
    publisher: String,
    uid: Number,
    title: String,
    price: Number,
    seller_id: Number,
    description: String
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
</style>
