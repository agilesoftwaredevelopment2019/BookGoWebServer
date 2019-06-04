<template>
  <v-layout align-center justify-center>
    <div class="row">
      <modals-container />
    </div>
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
      ></v-text-field>
      <v-text-field
        v-model="nickname"
        label="닉네임을 입력하세요"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="이름을 입력하세요"
        required
      ></v-text-field>
      <v-text-field
        v-model="phonenumber"
        label="휴대폰 번호를 입력하세요"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>
      <div class="text-xs-center">
        <v-btn v-on:click="onSubmit" round color="primary" dark>
          회원가입
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SignUpFinishModal from './components/SignUpFinishModal.vue'
import axios from 'axios'

export default {
  name: 'SignUp',
  data: () => ({
    idname: '',
    password: '',
    nickname: '',
    name: '',
    phonenumber: ''
  }),
  methods: {
    onSubmit: function () {
      axios.post('https://bookgo.herokuapp.com/users', {
        idname: this.idname,
        password: this.password,
        nickname: this.nickname,
        name: this.name,
        phonenumber: this.phonenumber
      })
        .then(res => {
          this.$modal.show(SignUpFinishModal, {
            modal: this.$modal }, {
            name: 'dynamic-modal',
            width: '330px',
            height: '130px',
            draggable: true
          })
        })
    },
    moveToSingUp: function () {
      this.$router.go('signup')
    }
  }
}
</script>

<style>

</style>
