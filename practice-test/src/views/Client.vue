<template>
  <div class="clients">
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <p>Client {{ client ? client.Name : '' }}</p>
      </v-layout>

      <v-layout row class="mb-3">
        <v-btn flatcolor="info" @click="addNote">
          <span>Add Note</span>
          <v-icon left small>date_range</v-icon>
        </v-btn>
      </v-layout>

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sort('state')" slot="activator">
            <span class="caption text-lowercase">by state</span>
            <v-icon right>date_range</v-icon>
          </v-btn>
          <span>Sort notes by state</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color="grey" flatcolor="info" @click="sort('name')" slot="activator">
            <span class="caption text-lowercase">by name</span>
            <v-icon right>person</v-icon>
          </v-btn>
          <span>Sort notes by name</span>
        </v-tooltip>
      </v-layout>

      <v-list two-line>
        <template v-for="note in notes">
          <v-list-tile :key="note.id" avatar ripple @click="open(note)" :class="note.state">
            <v-list-tile-content>
              <v-list-tile-title>{{ note.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ note.description }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ note.date | formatDate }}</v-list-tile-action-text>
              <div>
                <v-chip small :class="[note.state, 'white--text', 'caption', 'my-2']">{{note.state}}</v-chip>
                <v-icon v-if="!note.stared" color="grey lighten-1">star_border</v-icon>
                <v-icon v-else color="yellow darken-2" @click="select(note)">star</v-icon>
              </div>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
    <v-dialog v-model="addNoteDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New note</span>
        </v-card-title>
        <v-card-text>
          <note-editor></note-editor>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addNoteDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addNoteDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loading" persistent fullscreen content-class="loading-dialog">
      <v-container fill-height>
        <v-layout row justify-center align-center>
          <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
const fb = require("@/store/firebaseConfig.js");


const calls = [  
];

export default {

  data() {
    return {
      loading: false,
      addNoteDialog: false,
      editableNote: null,
      sortedProp: "",
      clientId: this.$route.params.id,
      client: null,
      notes: [
        {
          id: 1,
          name: "mortgage",
          description: "mortgage loan for infinity years",
          date: Date.now(),
          initbalance: 10000,
          state: "alive",
          stared: true
        },
        {
          id: 2,
          name: "SV car",
          description: "sv loan for country travel",
          date: Date.now(),
          initbalance: 10000,
          state: "alive",
          stared: true
        },
        {
          id: 3,
          name: "mister plow",
          description: "mr plow is on the go",
          date: Date.now(),
          initbalance: 10000,
          state: "overdue",
          stared: false
        },
        {
          id: 4,
          name: "microloan",
          description: "microloan for some stuff",
          date: Date.now(),
          initbalance: 10000,
          state: "highlyrisked",
          stared: false
        },
        {
          id: 5,
          name: "education loan",
          description: "education loan till the backet",
          date: Date.now(),
          initbalance: 10000,
          state: "longterm",
          stared: false
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

      this.loading = true

      calls.push(fb.clientsCollection
        .doc(this.clientId)
        .get()
        .then(doc => {          
          if (!doc.exists) {
            this.$router.push({
              name: "error",
              params: {
                message: `client with id ${this.clientId} not found`
              }
            });
            return;
          }

          this.client = doc.data();
        }))

        calls.push(fb.notesCollection
        .where("clientId", "==", this.clientId)
        .get()
        .then(docs => {
          const resultArray = []
          docs.forEach(doc => {            
            resultArray.push({ ...doc.data(), id: doc.id })
          });

          this.notes = resultArray
        }))

        Promise.all(calls).finally(() => this.loading = false)
    },
    select(item) {
      item.stared = !item.stared;
    },
    open(item) {
      this.editableNote = JSON.parse(JSON.stringify(item));
      this.addNoteDialog = true;
    },
    addNote() {
      this.addNoteDialog = true;

      fb.notesCollection
        .add({ clientId: this.clientId, data: "asdasdasd" })
        .then(ref => {
          console.log(ref);
        })
        .catch(err => {
          console.log(err);
        });      
    },
    sort(prop) {
      let self = this;

      if (self.sortedProp != "-" + prop) {
        self.sortedProp = "-" + prop;
      } else {
        self.sortedProp = prop;
      }

      this.notes.sort((a, b) => {
        if (self.sortedProp != "-" + prop) {
          return a[prop] < b[prop] ? 1 : -1;
        }

        return a[prop] < b[prop] ? -1 : 1;
      });
    }
  }
};
</script>

<style>
.v-list > .alive {
  border-left: 4px solid green;
}

.v-list > .overdue {
  border-left: 4px solid red;
}

.v-list > .highlyrisked {
  border-left: 4px solid orange;
}

.v-list > .longterm {
  border-left: 4px solid royalblue;
}

.v-chip.alive {
  background: green;
}

.v-chip.highlyrisked {
  background: orange;
}

.v-chip.overdue {
  background: red;
}

.v-chip.longterm {
  background: royalblue;
}
</style>

