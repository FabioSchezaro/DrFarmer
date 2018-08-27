window.onload = function (event){
    Highcharts.theme = {
        colors: ['#00FF00', '#0000FF', '#FFFF00', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                stops: [
                    [0, '#000000']
                ]
            },
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            },
            plotBorderColor: '#606063'
        },
        title: {
            style: {
                color: '#00FF00',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#00FF00',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#FFFFFF',
            labels: {
                style: {
                    color: '#FFFFFF'
                }
            },
            lineColor: '#FFFFFF',
            minorGridLineColor: '#FFFFFF',
            tickColor: '#FFFFFF',
            title: {
                style: {
                    color: '#FFFFFF'

                }
            }
        },
        yAxis: {
            gridLineColor: '#FFFFFF',
            labels: {
                style: {
                    color: '#FFFFFF'
                }
            },
            lineColor: '#FFFFFF',
            minorGridLineColor: '#FFFFFF',
            tickColor: '#FFFFFF',
            tickWidth: 1,
            title: {
                style: {
                    color: '#FFFFFF'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#B0B0B3'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#505053'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },

        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },

        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        },

        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#707073',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#000003',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },

        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },

        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        },

        // special colors for some of the
        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        background2: '#505053',
        dataLabelsColor: '#B0B0B3',
        textColor: '#C0C0C0',
        contrastTextColor: '#F0F0F3',
        maskColor: 'rgba(255,255,255,0.3)'
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    // Create the chart
    Highcharts.stockChart(document.getElementById('container'), {
        chart: {
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var s = this.series[0];
                    var i = 0;
                    // var bps = document.getElementById('bps').value;
                    
                    // var x = document.getElementById('eixoX').value;
                    
                    setInterval(function () {
                        var x = (new Date()).getTime();// current time
                        var eixoY = parseFloat(document.getElementById('eixoY').value);

                        y = eixoY;
                        // if (i <= 5) {
                        //     y = 0;
                        // } else {
                        //     y = eixoY;
                        //     // y = Math.random() * 100;
                        //     i = 0;
                        // }
                        s.addPoint([x, y], true, false);
                        i ++;
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Cardio'
        },

        exporting: {
            enabled: true
        },

        yAxis: [{
            gridLineWidth: 0,
            minorGridLineWidth: 0
        }],

        series: [{
            name: 'Cardio',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -15; i <= 0; i += 1) {
                    data.push(0);
                }
                return data;
            }())
        }]
    });
}