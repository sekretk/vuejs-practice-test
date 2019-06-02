<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs8>
            <v-text-field label="Email*" required v-model="login"></v-text-field>
          </v-flex>
          <v-flex xs8>
            <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <small>*required</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="proceedLogin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {AUTH_REQUEST} from '../store/actions/auth'

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
            proceedLogin() {
              const { username, password } = this

                this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
                      this.$router.push('/')
                    })

                // if(this.login != "" && this.password != "") {
                //     if(this.login == 'test' && this.password == 'open') {
                //         this.$emit("authenticated", true);
                //         this.$router.push({ name: "/" });
                //     } else {
                //       // eslint-disable-next-line
                //         console.log("The login and / or password is incorrect");
                //     }
                // } else {
                //   // eslint-disable-next-line
                //     console.log("A login and password must be present");
                // }
            }
        }
};
</script>

<style>
</style>
