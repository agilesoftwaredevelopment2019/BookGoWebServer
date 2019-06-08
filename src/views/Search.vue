<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm6>
            <div>
                <SearchBar/>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
export default {
  name: 'Search',
  components: {
    SearchBar
  }
}
</script>

<style>

</style>
