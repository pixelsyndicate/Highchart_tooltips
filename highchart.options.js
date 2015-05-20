var numberFormatter = new utilities.numbers.stringNumber();
var highCharts = Highcharts;
// configure the highchart using Highcharts.setOptions()
$(function () {






    // these are ways to override the base chart
    highCharts.setOptions({
        chart: {
            style: {
                fontFamily: 'tahoma'
            },
            backgroundColor: 'transparent'
        },
        tooltip: {
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            shared: true,
            useHTML: true,
            style: {
                padding: 0
            }
        }
    });

    // these are ways to override the base chart
    highCharts.setOptions({
        tooltip: {
            formatter: function () {

                // formatter returns 'headerFormat', 'pointFormat' and 'footerFormat'
                var s = '<div class="tooltip-header">' + this.x.replace('<br>', ' - ') + '</div><table class="tooltip-table">';
                $.each(this.points, function (i, point) {
                    s += '<tr data-ident="graphs.funnel_dual_fund.js"><td class="tooltip-label">' + this.series.name + '</td><td class="tooltip-value">';
                    if (point.y >= 1000000) {
                        s += numberFormatter.roundMillions(point.y, 1);
                    } else {
                        s += numberFormatter.roundThousands(point.y, 2);
                    }
                    s += '</td></tr>';
                });
                s += '</table>';
                return s;
            }
        }
    });

});