<template>
	<div id="chart">
		
		<apexchart type="line" height="350px" width="100%" :options="chartOptions" :series="series"></apexchart>
		
	</div>
</template>
<script>
  export default {
    data: function () {
		return {
		  data: {},
		  xaxis: [],
		  yaxis: [],
		  series: [{
			  name: 'Disceased',
			  data: [],
		  }],
          chartOptions: {
            chart: {
              id: 'realtimed',
              height: 350,
              type: 'line', 
              toolbar: {
                show: false
              },
              zoom: {
                enabled: true
              },
			   toolbar: {
        		show: true
			  }
            },
			noData: {
				text: 'Loading...'
			},
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              }
            },
			xaxis:{
				categories:[]
			}
          }
		}
	}
}
</script>
