function graphOximetria () {
    Highcharts.stockChart(document.getElementById('container2'), {
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
                        var eixoY = parseFloat(document.getElementById('pulsoOximetria').value);

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
            },
            height: 250
        },

        // navigator: {
        //     // enabled: false,
        //     range: 10
        // },

        scrollbar: {
            enabled: false
        },

        rangeSelector: {
            buttons: [{
                count: 10,
                type: 'second',
                text: ''
            }, {
                count: 5,
                type: 'second',
                text: ''
            }, {
                type: 'all',
                text: ''
            }],
            inputEnabled: false,
            enabled: false,
            selected: 0
        },

        title: {
            text: 'Oximetria',
            style: {
                color: '#FF0000'
            }
        },

        exporting: {
            enabled: true
        },

        yAxis: [{
            gridLineWidth: 0,
            minorGridLineWidth: 0
        }],

        plotOptions: {
            series: {
                color: '#FF0000'
            }
        },

        series: [{
            name: 'Oximetria',
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