<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <!-- <router-link class="text-uppercase grey--text" to="/"> -->
        <span class="font-weight-light">loan</span>
        <span>manager</span>
        <!-- </router-link> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="isProfileLoaded">{{name}}</div>

      <v-btn flat color="grey" @click="logout" v-if="!isAuthenticated && !authLoading">
        <span>Login</span>
        <v-icon right>insert_link</v-icon>
      </v-btn>
      <v-btn flat color="grey" @click="logout" v-if="isAuthenticated">
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
        <v-list-tile
          v-for="client in clients"
          :key="client.id"
          router
          :to="'/client/' + client.id"
          absolute
        >
          <v-list-tile-action>
            <v-icon class="white--text">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{client.Name}}</v-list-tile-title>
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
          <client-editor v-model="newClient"></client-editor>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveClient">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
import { AUTH_LOGOUT } from "../store/actions/auth";
import { mapGetters, mapState } from "vuex";
const fb = require("@/store/firebaseConfig.js");

const emptyClient = {
  datemenu: false,
  Name: "new client",
  Phone: 0,
  TaxID: 111111111,
  Address: "Evergreen st. 123",
  DateOpened: Date.now(),
  Type: "LLC",
  ContactName: "",
  ContactPhone: "",
  ContactEmail: ""
};

export default {
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    },
    addClient: function() {
      this.addClientDialog = true;
    },
    closeDialog: function() {
      this.addClientDialog = false;
    },
    saveClient: function() {
      this.addClientDialog = false;

      fb.clientsCollection
        .add(this.newClient)
        .then(ref => {
          console.log(ref);
        })
        .catch(err => {
          console.log(err);
        });             

      this.newClient = {...emptyClient};
    }
  },
  data() {
    return {
      drawer: false,
      addClientDialog: false,
      newClient: JSON.parse(JSON.stringify(emptyClient))
    };
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    }),
    clients() {
      return this.$store.state.clients;
    }
  }
};
</script>

<style>
</style>
