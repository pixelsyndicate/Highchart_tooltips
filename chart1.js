$(function () {

var format = new chartDataFormat();
    
    // these are ways to override the base chart
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'tahoma'
            },
            backgroundColor: 'transparent'
        }
    });
    
    // these are ways to override the base chart
    Highcharts.setOptions({
        tooltip: {
            // valueSuffix is overridden by formatter:
            //valueSuffix: '°C',
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            shared: true,
            useHTML: true,
            style: {
                padding: 0
            },
            formatter: function () {

                // formatter returns 'headerFormat', 'pointFormat' and 'footerFormat'
                var s = '<div class="tooltip-header">' + this.x.replace('<br>', ' - ') + '</div><table class="tooltip-table">';
                $.each(this.points, function (i, point) {
                    s += '<tr data-ident="graphs.funnel_dual_fund.js"><td class="tooltip-label">' + this.series.name + '</td><td class="tooltip-value">';
                    if (point.y >= 100000) {
                        s += format.roundMillions(point.y,1);
                    } else {
                        s += format.roundThousands(point.y, 2);
                    }
                    s += '</td></tr>';
                });
                s += '</table>';
                return s;
            }
        }
    });
        
    // here is the declaration of a highchart to a div
    $('#container').highcharts({
        title: {
            text: "Accounts Balance",
            x: -20 //center
        },
        subtitle: {
            text: 'Source: secret society',
            x: -20
        },
        xAxis: {
            categories: jsonData.Categories
        },
        yAxis: {
            title: {
                text: "Accounts Balance"
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            type: 'column',
            name: jsonData.Series[1].name,
            data: jsonData.Series[1].data
        }, {
            type: 'spline',
            name: jsonData.Series[0].name,
            data: jsonData.Series[0].data
        }]
    });
});