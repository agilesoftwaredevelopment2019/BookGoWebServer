<template>
  <v-layout class="v-layout align-center justify-center" mt-2>
    <v-flex xs12 sm9>
      <v-text-field
        v-model="idname"
        label="연락처 (핸드폰번호)"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>
      <v-text-field
        v-model="idname"
        label="구매 신청 메시지"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>
      <v-btn v-on:click="requestContract" round color="primary" dark>
        구매 신청하기
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Buy',
  components: {
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('buy', {
        idname: this.idname,
        password: this.password
      }).then(() => this.$router.replace({ path: '/home' })
      )
    },
    requestContract: function () {
      this.$router.push({ path: 'signup' })
    }
  }
}
</script>

<style>

</style>
