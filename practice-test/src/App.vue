<template>
  <v-app class="grey lighten-4">    
    <navbar v-if="$route.name !== 'login'"/>
    <v-content>
      <router-view></router-view>
    </v-content>    
  </v-app>  
</template>

<script>
import navbar from '@/components/navbar'
import { USER_REQUEST } from '@/store/actions/user'

export default {
  name: 'App',
  components: { navbar },
  created: function () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST)
    }
  },
  data () {
    return {
      login: false
      //
    }
  }
}
</script>