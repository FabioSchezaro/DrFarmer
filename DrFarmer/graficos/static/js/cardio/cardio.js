function graphCardio () {
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
            },
            // height: 800
        },

        navigator: {
            enabled: false
        },

        scrollbar: {
            enabled: false
        },

        rangeSelector: {
            // buttons: [{
            //     count: 1,
            //     type: 'minute',
            //     text: '1M'
            // }, {
            //     count: 5,
            //     type: 'minute',
            //     text: '5M'
            // }, {
            //     type: 'all',
            //     text: 'All'
            // }],
            inputEnabled: false,
            enabled: false
            
            // selected: 0
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