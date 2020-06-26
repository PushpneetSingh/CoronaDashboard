<template>
	<div>
		<v-card class="pa-2 ma-4" align="center" color="blue lighten-5">
			<v-card-title>
			<span class="title mx-auto">LIVE</span>
			</v-card-title>
				<v-layout >
					<v-flex class="px-4 ma-4 " md3 xs6 >
						<v-card color="blue ">
							<v-card-title class="elevation-10">
							<span class="title mx-auto white--text" >Total</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ total }}</span>
							</v-card-title>
							
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="red">
							<v-card-title class="elevation-10">
							<span class="title mx-auto white--text" >Active</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ active }}</span>
							</v-card-title>
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="green">
							<v-card-title class="elevation-10">
							<span class=" mx-auto white--text" >Recoverd</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ recov }}</span>
							</v-card-title>
						</v-card>
					</v-flex>
					<v-flex class="px-4 ma-4" md3 xs6 >
						<v-card color="yellow ">
							<v-card-title class="elevation-10">
							<span class="title mx-auto white--text" >Diceased</span>
							</v-card-title>
							<v-card-title class="">
							<span class="title mx-auto white--text" >{{ dis }}</span>
							</v-card-title>
						</v-card>
					</v-flex>
					
				</v-layout>
			</v-card>
			<v-card class="pa-2 ma-4" align="center">
				<v-layout class="mx-auto">
					<v-flex md6 xs12>
						<v-card class="pa-4" flat>
							<v-card-title class="elevation-3">
							<span class="title mx-auto">Active</span>
							</v-card-title>
							<lc />
						</v-card>
					</v-flex>
					<v-flex md6 xs12 >
						<v-card class="pa-4" flat>
							<v-card-title class="elevation-3">
							<span class="title mx-auto">Deaths</span>
							</v-card-title>
							<dc />	
						</v-card>
					</v-flex>					
				</v-layout>
			</v-card>
			<v-card class="pa-2 ma-4" align="center" color="blue lighten-5">
			<v-card-title>
			<span class="title mx-auto">LIVE TESTING INFO</span>
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
						<v-card color=" ">
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
	</div>
</template>
<script>
import lc from '@/components/chart/live/active.vue'
import dc from '@/components/chart/live/death.vue'
export default {
	data () {
		return {
			total: [],
			active: [],
			recov: [],
			dis: [],
			axaxis: [],
			ayaxis: [],
			dxaxis: [],
			dyaxis: [],
			testpermillion: [],
			todaytest:[],
			totaltest: [],
			lastupdate:[],

		}
	},
	beforeMount () {
    this.getsysdata()
	},
	methods: {
		async getsysdata () {
		const res = await fetch('https://api.covid19india.org/data.json')
		const data = await res.json()
		this.data = data
		this.total =  this.data.cases_time_series[this.data.cases_time_series.length-1].totalconfirmed
		this.recov =  this.data.cases_time_series[this.data.cases_time_series.length-1].totalrecovered
		this.dis =  this.data.cases_time_series[this.data.cases_time_series.length-1].totaldeceased
		this.active =  this.total - this.dis - this. recov
		this.testpermillion = this.data.tested[this.data.tested.length-1].testspermillion
		this.todaytest = this.data.tested[this.data.tested.length-1].samplereportedtoday
		this.totaltest = this.data.tested[this.data.tested.length-1].totalsamplestested
		this.lastupdate = this.data.tested[this.data.tested.length-1].updatetimestamp

		
		for (let i=0;i<this.data.cases_time_series.length;i++){
			this.ayaxis.push(this.data.cases_time_series[i].totalconfirmed)
			this.axaxis.push(this.data.cases_time_series[i].date)
		}
		ApexCharts.exec('realtimel', 'updateSeries', [{
			data: this.ayaxis
			}], true);
		ApexCharts.exec('realtimel', 'updateOptions', {
		xaxis: {
			categories: this.axaxis
		}
		});
		

		for (let i=0;i<this.data.cases_time_series.length;i++){
			this.dyaxis.push(this.data.cases_time_series[i].totaldeceased)
			this.dxaxis.push(this.data.cases_time_series[i].date)
		}
		ApexCharts.exec('realtimed', 'updateSeries', [{
			data: this.dyaxis
			}], true);
		ApexCharts.exec('realtimed', 'updateOptions', {
		xaxis: {
			categories: this.dxaxis
		}
		});
		}
		
	},
	components:{
		lc,
		dc
	},
}
</script>
