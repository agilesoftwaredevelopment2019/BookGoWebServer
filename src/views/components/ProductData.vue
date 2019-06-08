<template>
  <div>
    <v-container fluid ma-2 pa-3 class="indigo lighten-4">
      <v-layout>
        <v-flex xs5>
          <v-img height="150px" width="150px" src="https://picsum.photos/500/300?image=15">
          </v-img>
        </v-flex>
        <v-flex xs7 d-flex>
          <v-layout align-center justify-center column wrap>
            <v-flex xs3>
              {{ title }}
            </v-flex>
            <v-flex xs7>
              {{ description }}
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
