<script>
    import {
        Line
    } from 'vue-chartjs'

    export default {
        extends: Line,
        data() {
            return {
                chartData: {
                    labels: ["Rusia", "Turki", "Daegu", "Hongkong", "Roma", "New York", "Labuan Bajo",
                        "Perancis", "Argentina", "Inggris"
                    ],
                    datasets: [{
                        label: 'Line Chart',
                        data: [600, 1150, 342, 6050, 2522, 3241, 1259, 157, 1545, 9841],
                        fill: false,
                        borderColor: 'white',
                        backgroundColor: 'black',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
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
                        display: true,
                        labels: {
                            fontColor: "white",
                            fontSize: 14
                        },
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