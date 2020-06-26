<template>
	<div>
			<v-card class="pa-2 ma-4" align="center" color="blue lighten-5">
			<v-card-title>
			<span class="title mx-auto">LIVE TEST Details</span>
			</v-card-title>
				<v-layout >
					<v-flex class="px-4 ma-4 " md3 xs6 >
						<v-card color="blue ">
							<v-card-title class="elevation-10">
							<span class="title mx-auto white--text" >Total Test</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ totaltest }}</span>
							</v-card-title>
							
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="red">
							<v-card-title class="elevation-10">
							<span class="title mx-auto white--text" >Test Per Million</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ testpermillion }}</span>
							</v-card-title>
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="green">
							<v-card-title class="elevation-10">
							<span class=" mx-auto white--text" >Today</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ todaytest }}</span>
							</v-card-title>
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="">
							<v-card-title class="elevation-10">
							<span class="title mx-auto black--text" >Last Update</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto black--text" >{{ lastupdate }}</span>
							</v-card-title>
						</v-card>
					</v-flex>	
				</v-layout>
			</v-card>
			<v-card class="pa-2 ma-4" align="center" color="blue lighten-5">
				<v-card-title>
				<span class="title mx-auto">Symptoms</span>
				</v-card-title>
				<v-layout >
					<v-col cols="12">
						<v-img
							src='../assets/details.png'
							height="300"
							contain
							></v-img>
					</v-col>
				</v-layout>
				<span class="body-2">(Image : MyGov.in/covid19)</span>
			</v-card>
			<v-card class="pa-2 ma-4 mx-auto" align="center" color="blue lighten-5">
				<v-card-title>
				<span class="title mx-auto">Links</span>
				</v-card-title>
				<v-container class="mx-auto" >
					<v-col >
						<a href="https://www.worldometers.info/coronavirus/" >
							<v-img
							src='../assets/worldometer.png'
							height="40"
							contain
							></v-img>
						</a>
						
					</v-col>
					<v-col >
						<a href="https://www.mygov.in/covid-19" >
							<v-img
							src='../assets/mygov.png'
							height="40"
							contain
							></v-img>
						</a>
					</v-col>
					<v-col >
						<a href="https://coronabeds.jantasamvad.org/" >
							<v-img
							src='../assets/delhigov.png'
							height="40"
							contain
							></v-img>
						</a>
					</v-col>
					<v-col >
						<a href="https://t.me/MyGovCoronaNewsdesk" >
							<v-img
							src='../assets/telegram.png'
							height="40"
							contain
							></v-img>
						</a>
					</v-col>
				</v-container>
			</v-card>
			
			
	</div>
</template>
<script>
export default {
	data () {
		return {
			testpermillion: [],
			todaytest:[],
			totaltest: [],
			lastupdate:[],
		}
	},
	beforeMount () {
    this.getdata()
	
	},
	methods: {
		async getdata () {
			
		const result = await fetch('https://api.covid19india.org/data.json')
		const data = await result.json()
		this.data = data

		this.testpermillion = this.data.tested[this.data.tested.length-1].testspermillion
		this.todaytest = this.data.tested[this.data.tested.length-1].samplereportedtoday
		this.totaltest = this.data.tested[this.data.tested.length-1].totalsamplestested
		this.lastupdate = this.data.tested[this.data.tested.length-1].updatetimestamp

		}
		
	}
}
</script>
