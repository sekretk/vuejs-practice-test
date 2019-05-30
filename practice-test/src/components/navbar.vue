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
            <v-btn flat color="grey">
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
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
    </nav>
</template>

<script>
export default {
    computed: {
        clients(){
            return this.$store.state.clients
        }
    },
data(){
    return {
        drawer: false        
    }
}
}
</script>

<style>

</style>
