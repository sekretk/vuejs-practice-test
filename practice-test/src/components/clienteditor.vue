<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm4 md4>
        <v-text-field label="Name*" v-model="value.Name" required></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <v-text-field label="Phone" v-model="value.Phone" mask="+7-(###)-###-##-##"></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <v-text-field label="Tax ID" v-model="value.TaxID" mask="#########"></v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12>
        <v-text-field label="Address" v-model="value.Address"></v-text-field>
      </v-flex>

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
              v-model="value.DateOpened"
              label="Date opened"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="value.DateOpened" @input="datemenu = false"></v-date-picker>
        </v-menu>
      </v-flex>

      <!-- <v-flex xs12 sm6 md6>
        <v-autocomplete
          :items="['Individual', 'LLC', 'LLP', 'S Corp', 'Partnership', 'Other']"
          label="Client Type"
          v-model="Type"
        ></v-autocomplete>
      </v-flex> -->

      <v-flex xs12 sm4 md4>
        <v-text-field label="Contant name" v-model="value.ContactName"></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <v-text-field label="Contant phone" v-model="value.ContactPhone" mask="phone"></v-text-field>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <v-text-field label="ContactEmail" v-model="value.ContactEmail" mask="email"></v-text-field>
      </v-flex>
    </v-layout>
    <small>*indicates required field</small>
  </v-container>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      datemenu: false,
    };
  }
};
</script>

<style>
</style>
