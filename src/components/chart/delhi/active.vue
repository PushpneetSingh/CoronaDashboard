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
			  name: 'Active cases',
			  data: [],
		  }],
          chartOptions: {
            chart: {
              id: 'realtimedl',
              height: 350,
              type: 'line', 
              toolbar: {
                show: false
              },
			  animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                  speed: 1000
                }
              },
              zoom: {
                enabled: true
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
