<template>
  <div>
    <v-container fluid ma-0 pa-0>
      <div class="star">
        <v-btn icon large dark color="primary" v-on:click="flag = !flag">
          <v-icon v-if=flag>star_border</v-icon>
          <v-icon v-else>star</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Star',
  data () {
    return {
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
