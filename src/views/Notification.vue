<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <p style="font-size:24px;" align="center">
          알림
      </p>
      <div class="notification" align="center">
        <span vertical-align="middle">
          구매신청이 들어왔습니다.
        </span>
      </div>
      <p align="right">
        2019-05-14 14:00
      </p>
      <div class="notification" align="center">
        <span vertical-align="middle">
          관심상품이 등록되었습니다.
        </span>
      </div>
      <p align="right">
        2019-05-14 12:00
      </p>
      <div class="notification" align="center">
        <span vertical-align="middle">
          구매신청이 들어왔습니다.
        </span>
      </div>
      <p align="right">
        2019-05-13 14:00
      </p>
      <div class="text-xs-center">
        <v-btn v-on:click="home" round color="primary" dark>
          홈으로
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Notification',
  data () {
    return {
      idname: '',
      password: ''
    }
  },
  methods: {
    home: function () {
      this.$router.push({ path: 'home' })
    }
  }
}
</script>

<style>
  .notification {
    border: 3px skyblue solid;
    border-radius: 25px;
    background-color: skyblue;
    color: white;
    font-size: 15px;
  }
  .notification span {
    vertical-align: middle;
    margin: 10px;
  }
</style>
