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
							<span class="title mx-auto">New Cases Per Day</span>
							</v-card-title>
							<lc />
						</v-card>
					</v-flex>
					<v-flex md6 xs12 >
						<v-card class="pa-4" flat>
							<v-card-title class="elevation-3">
							<span class="title mx-auto">Deaths per day</span>
							</v-card-title>
							<dc />	
						</v-card>
					</v-flex>					
				</v-layout>
				<v-layout class="mx-auto">
					<v-flex md12 xs12>
						<v-card class="pa-4" flat>
							<v-card-title class="elevation-3">
							<span class="title mx-auto">Recovery Per Day</span>
							</v-card-title>
							<rc />
						</v-card>
					</v-flex>								
				</v-layout>
			</v-card>
	</div>
</template>
<script>
import lc from '@/components/chart/delhi/active.vue'
import dc from '@/components/chart/delhi/death.vue'
import rc from '@/components/chart/delhi/recovery.vue'
export default {
	data () {
		return {
			total: [],
			active: [],
			recov: [],
			dis: [],
			daxaxis: [],
			dayaxis: [],
			ddxaxis: [],
			ddyaxis: [],
			rdxaxis: [],
			rdyaxis: [],
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
		this.total =  this.data.statewise[3].confirmed
		this.recov =  this.data.statewise[3].recovered
		this.dis =  this.data.statewise[3].deaths
		this.active =  this.data.statewise[3].active


		const re = await fetch('https://api.covid19india.org/states_daily.json')
		const dt = await re.json()
	
		for (let i=0;i<dt.states_daily.length;i=i+3){
			this.dayaxis.push(dt.states_daily[i].dl)
			this.daxaxis.push(dt.states_daily[i].date)
		}
		ApexCharts.exec('realtimedl', 'updateSeries', [{
			data: this.dayaxis
			}], true);
		ApexCharts.exec('realtimedl', 'updateOptions', {
		xaxis: {
			categories: this.daxaxis
		}
		});

		for (let i=2;i<dt.states_daily.length;i=i+3){
			this.ddyaxis.push(dt.states_daily[i].dl)
			this.ddxaxis.push(dt.states_daily[i].date)
		}
		ApexCharts.exec('realtimedd', 'updateSeries', [{
			data: this.ddyaxis
			}], true);
		ApexCharts.exec('realtimedd', 'updateOptions', {
		xaxis: {
			categories: this.ddxaxis
		}
		});

		for (let i=1;i<dt.states_daily.length;i=i+3){
			this.rdyaxis.push(dt.states_daily[i].dl)
			this.rdxaxis.push(dt.states_daily[i].date)
		}
		ApexCharts.exec('realtimedr', 'updateSeries', [{
			data: this.rdyaxis
			}], true);
		ApexCharts.exec('realtimedr', 'updateOptions', {
		xaxis: {
			categories: this.rdxaxis
		}
		});

	}	
	},
	components:{
		lc,
		dc,
		rc
	},
}
</script>
