<template>
  <div class="dashboard">
    <h1 class="subheading greay--text mx-4">Dashboard</h1>
    <v-list two-line>
      <template v-for="client in clients">
        <v-list-tile :key="client.name" avatar router :to="'/client/'+client.id">
          <v-list-tile-avatar>
            <img :src="client.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="client.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="client.name"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider :key="client.id"/>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  computed: {
    clients() {
      return this.$store.state.clients;
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>
