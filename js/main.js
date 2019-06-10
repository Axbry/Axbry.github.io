function randomMinMax(min, max) {
    var rand = min + Math.random() * (max - min);
    return rand;
  }

function plot() {

    intRate = parseFloat(document.getElementById("interestRateInput").value);

    Highcharts.chart('chart-container', {
        exporting: { enabled: false },
        title: {
        text: 'Пример работы IRS'
        },
    
        yAxis: {
            title: {
                text: 'Значение вашей ставки'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom'
        },
    
        plotOptions: {
        series: {
            label: {
            connectorAllowed: false
            },
            pointStart: 2010
        }
        },
    
        series: [{
            name: 'Ваша текущая ставка',
            data: [intRate, intRate, intRate, intRate, intRate, intRate, intRate, intRate],
            color: 'red'
        }, {
            name: 'Ваша ставка с инструментом IRS',
            data: [randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15), randomMinMax(intRate * 0.5, intRate * 1.15)],
            color: 'green'
        }
    ],
    
        responsive: {
        rules: [{
            condition: {
            maxWidth: 500
            },
            chartOptions: {
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            }
            }
        }]
        }
    
    });
}

$( document ).ready(function() {
    plot();
});
