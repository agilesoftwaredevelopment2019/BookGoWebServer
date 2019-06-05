<template>
    <v-layout align-center justify-center>
        <v-flex>
            회원가입이 완료되었습니다.
            <v-btn v-on:click="move_to_home_page" round color="primary" dark>
                확인
            </v-btn>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
  data: function () {
    return {
    }
  },
  props: [
  ],
  methods: {
    move_to_home_page () {
      this.$emit('close')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
