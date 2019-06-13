<template>
  <div>
    <v-container fluid ma-0 pa-0>
      <div class="search-bar">
        <v-text-field
          v-model="title"
          label="책명을 입력하세요"
          solo
        >
          <template v-slot:append>
            <v-layout align-content-end>
              <v-btn v-on:click="search" flat icon color="blue">
                <v-icon>search</v-icon>
              </v-btn>
            </v-layout>
          </template>
        </v-text-field>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchBar',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    async search() {
      let encoded_title = encodeURIComponent(encodeURIComponent(this.title))
      let response = await axios.get('https://bookgo.herokuapp.com/products/title/' + encoded_title)
      if (response){
        this.$router.push({ name: 'search', params: response })
      }

    }
  },
  components: {
  }
}
</script>

<style>
</style>
