<template>
  <div>
    <v-layout class="v-layout align-center justify-center">
        <v-flex xs12 sm6>
            <div class="search-bar">
                <v-text-field
                    v-model="bookname"
                    label="교재명을 입력하세요"
                    solo
                >
                    <template v-slot:append>
                        <v-layout align-content-end>
                            <v-btn flat icon color="blue">
                                <v-icon>search</v-icon>
                            </v-btn>
                        </v-layout>
                    </template>
                </v-text-field>
            </div>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      bookname: '',
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
</style>
