<template>
      <v-container>
        <v-row>
          <v-col
            v-for="n in tools"
            :key="n.id"
            cols="4"
          >
            <v-card height="200" variant="tonal" :prepend-icon="n.icon">
                <template v-slot:title>
                    {{n.title}}
                </template>
                <template v-slot:text>
                    {{n.description}}
                </template>
                <div v-if:="n.route">
                  <v-card-actions>
                      <v-btn
                          color="teal-darken-1"
                          variant="text"
                          :to="n.route" 
                      >
                          Navigate
                      </v-btn>
                  </v-card-actions>
                </div>
                <div v-else>
                  <v-card-actions>
                      <v-btn
                          color="teal-darken-1"
                          variant="text"
                          disabled 
                      >
                          COMING SOON
                      </v-btn>
                  </v-card-actions>
                </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    data () {
        return {
            tools: [
                {
                    id: 123,
                    route: 'music-disabler',
                    title: "Disable menu music",
                    description: "How to disable SF2000 menu background music in one single step",
                    icon: 'mdi-volume-mute'
                },
                {
                    id: 231,
                    title: "Button mapper",
                    description: "Helps you remap the SF2000 emulator's button/controller configuration",
                    icon: 'mdi-controller-classic-outline'
                }
            ]
        }
    }
  }
</script>