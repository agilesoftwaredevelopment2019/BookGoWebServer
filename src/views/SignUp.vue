<template>
  <v-layout align-center justify-center>
    <div class="row">
      <modals-container />
    </div>
    <v-flex xs11>
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
      <template>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="350">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">회원 가입</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">회원가입 완료</v-card-title>
              <v-card-text>확인 버튼을 누르면 로그인창으로 이동합니다.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="onSubmit">확인</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data: () => ({
    idname: '',
    password: '',
    nickname: '',
    name: '',
    phonenumber: '',
    dialog: false
  }),
  methods: {
    async onSubmit () {
      this.dialog = false
      let response = await axios.post('https://bookgo.herokuapp.com/users', {
        idname: this.idname,
        password: this.password,
        nickname: this.nickname,
        name: this.name,
        phonenumber: this.phonenumber
      })
      if (response.data.length === 0) {
        console.log('SERVER failed')
      } else {
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style>

</style>
