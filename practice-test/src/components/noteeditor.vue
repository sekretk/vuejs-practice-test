<template>
  <v-container grid-list-md>
    <v-layout wrap>

<v-flex xs12 sm6 md6>
        <v-menu
          v-model="datemenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="DateOpened"
              label="Date opened"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="DateOpened" @input="datemenu = false"></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <v-text-field label="Initial balance" v-model="InitialBalance" required type="number"></v-text-field>
      </v-flex>
    </v-layout>
    <small>*indicates required field</small>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      datemenu: false,
      DateOpened: null,
      InitialBalance: 1000,
    };
  }
};
</script>

<style>
</style>
