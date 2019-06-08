<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <p style="font-size:24px;" align="center">
          알림
      </p>
      <div align="center">
        <Noti
          v-for="(bookname) in items"
          v-bind:bookname="bookname"
          v-bind:key="bookname.id">
        </Noti>
        <p align="right">
          {{ datetime }}
        </p>
      </div>
      <div class="text-xs-center">
        <v-btn v-on:click="home" round color="primary" dark>
          홈으로
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import Noti from './components/Noti.vue'

export default {
  name: 'Notification',
  data () {
    return {
      idname: '',
      password: ''
    }
  },
  props: {
    datetime: Number
  },
  methods: {
    home: function () {
      this.$router.push({ path: 'home' })
    }
  },
  components: {
    Noti
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
