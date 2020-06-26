<template>
  <v-card >
    <v-toolbar height="40px"  class="primary darken-2 white--text">
      <v-toolbar-title class="mx-auto body-1">Dashboard</v-toolbar-title>
    </v-toolbar>
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
			Details
			</v-tab>
				<v-tab-item class="black--text">
					<det />
			   </v-tab-item>
			

        </v-tabs>
  </v-card>
</template>

<script>
import live from '@/components/live.vue'
import delhi from '@/components/delhi.vue'
import det from '@/components/details.vue'
  export default {
	components: {
		live,
		delhi,
		det
	}
  }
</script>