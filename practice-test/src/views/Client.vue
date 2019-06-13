<template>
  <div class="clients">
    <p>Client {{ $route.params.id }}</p>
    <v-container class="my-5">
      <v-list two-line>
        <template v-for="note in notes">
          <v-list-tile :key="note.id" avatar ripple @click="open(note)">
            <v-list-tile-content>
              <v-list-tile-title>{{ note.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ note.description }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ note.date | formatDate }}</v-list-tile-action-text>
              <v-icon v-if="!note.stared" color="grey lighten-1" @click="select(note)">star_border</v-icon>
              <v-icon v-else color="yellow darken-2" @click="select(note)">star</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addNoteDialog: false,
      editableNote: null,      
      notes: [
        {
          id: 1,
          name: "mortgage",
          description: "mortgage loan for infinity years",
          date: Date.now(),
          initbalance: 10000,
          stared: true
        },
        {
          id: 2,
          name: "SV car",
          description: "sv loan for country travel",
          date: Date.now(),
          initbalance: 10000,
          stared: true
        },
        {
          id: 3,
          name: "mister plow",
          description: "mr plow is on the go",
          date: Date.now(),
          initbalance: 10000,
          stared: false
        },
        {
          id: 4,
          name: "microloan",
          description: "microloan for some stuff",
          date: Date.now(),
          initbalance: 10000,
          stared: false
        },
        {
          id: 5,
          name: "education loan",
          description: "education loan till the backet",
          date: Date.now(),
          initbalance: 10000,
          stared: false
        }
      ]
    };
  },
  methods: {
      select (item) {
        item.stared = !item.stared;
      },
      open(item){
        this.editableNote = JSON.parse(JSON.stringify(item));
        this.addNoteDialog = true;
      }
    }
};
</script>

<style>
</style>

