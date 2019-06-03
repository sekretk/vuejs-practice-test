<template>
    <nav>
        <v-toolbar app flat>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text" >
                <!-- <router-link class="text-uppercase grey--text" to="/"> -->
                    <span class="font-weight-light">loan</span>
                    <span>manager</span>
                <!-- </router-link> -->
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey" @click="logout">
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
            <v-btn block flatcolor="info" @click="addClient">
                <span>Add Client</span>
                <v-icon right>add_circle_outline</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile v-for="client in clients" :key="client.id" router :to="'/client/' + client.id" absolute>
                    <v-list-tile-action>
                        <v-icon class="white--text">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{client.name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

 <v-dialog v-model="addClientDialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New client</span>
        </v-card-title>
        <v-card-text>
          <client-editor></client-editor>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addClientDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addClientDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    </nav>
</template>

<script>
import { AUTH_LOGOUT } from '../store/actions/auth'

export default {
    computed: {
        clients(){
            return this.$store.state.clients
        }
    },
    methods: {
      logout: function () {
        this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
      },
      addClient: function(){
        this.addClientDialog = true;
      }
    },
data(){
    return {
        drawer: false,
        addClientDialog: false,        
    }
}
}
</script>

<style>

</style>
