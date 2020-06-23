<template>
  <v-card >
    <v-toolbar height="40px"  class="primary darken-2 white--text">
      <v-toolbar-title class="mx-auto body-1">Dashboard</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
		  background-color="primary"
      	  dark
        >
          <v-tabs-slider></v-tabs-slider>
			<v-tab>
			Live
			</v-tab>
			   <v-tab-item>
					<live />
			   </v-tab-item>


			<v-tab>
			Delhi
			</v-tab>
				<v-tab-item>
					<delhi />
			   </v-tab-item>
			
			<v-tab>
			Sources
			</v-tab>
				<v-tab-item>
					
				</v-tab-item>


			<v-tab>
			About
			</v-tab>
				<v-tab-item>
					
				</v-tab-item>

        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
import live from './live.vue'
import delhi from './delhi.vue'
  export default {
    data () {
      return {
        }
    },
	components: {
		live,
		delhi
	}
  }
</script>