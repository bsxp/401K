import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart(props) {

    let data = {
        labels: props.labels,
        datasets: [
            {
                backgroundColor: 'rgba(252, 88, 88, 0.5)',
                borderColor: 'rgb(252, 88, 88)',
                category: "No employer match",
                data: props.noMatchData.map(val => {
                    return Math.trunc(val)
                }),
                label: "No employer match",
            },
            {
                backgroundColor: 'rgba(66, 183, 255, 0.5)',
                borderColor: 'rgb(66, 183, 255)',
                category: "With employer match",
                data: props.matchData.map(val => {
                    return Math.trunc(val)
                }),
                label: "With employer match"
            }
        ]
    }

    const options = {
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines : {
                    display : false
                },
                tricks: {
                    
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                }
            }]
        }
   }

    return (
        <Bar
        data={data}
        options={options}
        />
    )

}

export default BarChart