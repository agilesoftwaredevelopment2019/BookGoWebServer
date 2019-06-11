<template>
  <div>
    <v-container fluid ma-2 pa-3 class="indigo lighten-4">
      <v-layout>
        <v-flex xs5>
          <v-card color="skyblue">
            {{ registeredBookname }} 에 대해 구매신청이 들어왔습니다.
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Noti',
  created () {
  },
  data () {
    return {
    }
  },
  props: {
    registeredBookname: String
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
</style>
