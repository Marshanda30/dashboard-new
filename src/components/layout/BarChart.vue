<script>
  import {
    Line
  } from 'vue-chartjs'

  export default {
    extends: Line,
    data() {
      return {
        chartData: {
          labels: ["2021-12-10 1.50 PM", "2021-12-10 8.54 AM", "2021-12-16 3.22 PM", "2021-12-16 10.31 AM"],
          datasets: [{
              label: 'Tegangan',
              borderWidth: 1,
              backgroundColor: 'white',
              borderColor: 'black',
              pointBorderColor: '#2554FF',
              data: [220, 220, 210, 90]
            },
            {
              label: 'Arus',
              borderWidth: 1,
              backgroundColor: 'white',
              borderColor: 'red',
              pointBorderColor: '#2554FF',
              data: [0.50, 0.12, 0.12, 5.0]
            },
            {
              label: 'Tegangan DC 1',
              borderWidth: 1,
              backgroundColor: 'white',
              borderColor: 'blue',
              pointBorderColor: '#2554FF',
              data: [25.67, 12.48, 12.48, 25.67]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>