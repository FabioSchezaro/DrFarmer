function graphCardio () {
    Highcharts.stockChart(document.getElementById('container'), {
        chart: {
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var s = this.series[0];
                    var i = 0;
                    var qtdBatimentos = 0;
                    // var bps = document.getElementById('bps').value;
                    
                    // var x = document.getElementById('eixoX').value;
                    
                    setInterval(function () {
                        var x = (new Date()).getSeconds();// current time
                        var divPulsoCardio = document.getElementById('pulsoCardio');
                        // var eixoY = parseFloat(document.getElementById('pulsoCardio').value);
                        // y = eixoY;

                        if (i <= 5) {
                            y = 0;
                        } else {
                            y = Math.random() * 100;
                            i = 0;
                        }
                        s.addPoint([x, y], true, false);
                        var bpm = 60 / 5;
                        divPulsoCardio.innerText = bpm;
                        
                        i ++;
                    }, 1000);
                }
            },
            height: 250
        },

        // navigator: {
        //     enabled: false
        // },

        scrollbar: {
            enabled: false
        },

        rangeSelector: {
            buttons: [{
                count: 1,
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
            minorGridLineWidth: 0,
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