<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-text-field
        v-model="idname"
        label="ID를 입력하세요"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="비밀번호를 입력하세요"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>
      <div class="text-xs-center">
        <v-btn v-on:click="onSubmit" round color="primary" dark>
          로그인
        </v-btn>
        <v-btn v-on:click="moveToSignUp" round color="primary" dark>
          회원가입
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      idname: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('try_sign_in_and_get_status', {
        idname: this.idname,
        password: this.password
      }).then(() => this.$router.replace({ path: '/' })
      )
    },
    moveToSignUp: function () {
      this.$router.push({ path: 'signup' })
    }
  }
}
</script>

<style>

</style>
