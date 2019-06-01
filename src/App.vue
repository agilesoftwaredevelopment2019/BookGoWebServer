<template>
  <v-app id="app">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  },
  mounted () {
    this.check()
  },
  methods: {
    ...mapActions({
      check: 'check'
    })
  }
}
</script>
