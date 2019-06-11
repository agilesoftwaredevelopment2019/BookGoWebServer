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
export default {
  name: 'Star',
  data () {
    return {
    }
  },
  methods: {
    toggleInterested: function () {
      if (this.isInterested) {
        this.$toast.info('관심상품이 해제되었습니다')
      } else {
        this.$toast.info('관심상품이 등록되었습니다')
      }
      this.isInterested = !this.isInterested
    }
  },
  components: {
  },
  props: {
    isInterested: Boolean
  }
}
</script>

<style>
</style>
