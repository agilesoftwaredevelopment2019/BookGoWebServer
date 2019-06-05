<template>
  <div>
    <v-container fluid ma-0 pa-0>
      <div class="alarm-bar">
        <v-btn icon large dark color="primary">
          <v-icon>alarm</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AlarmBar',
  data () {
    return {
      alarm: false
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
