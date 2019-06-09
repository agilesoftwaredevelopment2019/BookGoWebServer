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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      idname: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit () {
      try {
        let loginResult = await this.login({ idname: this.idname, password: this.password })
        console.log(loginResult)
        if (loginResult) {
          console.log('success')
          this.$router.push({ path: '/' })
        }
      } catch (err) {
        console.log('failed')
      }
    },
    moveToSignUp: function () {
      this.$router.push({ path: 'signup' })
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState'
    })
  }
}
</script>

<style>

</style>
