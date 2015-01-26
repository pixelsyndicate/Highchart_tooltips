var jsonData = {
    "Title": "Accounts Balance",
    "Categories": ["Apr '12<br/>Jan '13", "May '12<br/>Feb '13", "Jun '12<br/>Mar '13", "Jul '12<br/>Apr '13", "Aug '12<br/>May '13", "Sep '12<br/>Jun '13", "Oct '12<br/>Jul '13", "Nov '12<br/>Aug '13", "Dec '12<br/>Sep '13", "Jan '13<br/>Oct '13"],
    "Series": [{
        "name": "Average Balance",
        "color": null,
        "data": [16005.8, 15568.0, 14450.2, 11818.9, 15337.8, 15556.1, 14824.3, 19440.7, 11602.2, 13750.1],
        "dataFormat": "$",
        "dataDecimalPlaces": 1
    }, {
        "name": "Total Balance",
        "color": null,
        "data": [3080000.8, 3020000.2, 2060000.6, 2070000.7, 3070000.7, 3070000.7, 4010000.1, 3090000.9, 1090000.9, 3070000.7],
        "dataFormat": "%",
        "dataDecimalPlaces": 2
    }]
};

var chartDataFormat = function () {
    var self = this;
    self.valueToFormat = 100;

    // returns double
    self.decimals = function (c) {
        return (this.valueToFormat).toFixed(c);
    };

    // return string
    self.currency = function (v) {

        self.valueToFormat = v;
        return '$' + self.decimals(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    };

    // returns string
    self.percent = function (v) {
        this.valueToFormat = (v >= 1) ? (v * 100) : v;
        return valueToFormat.toString() + '%';
    };

    // return string
    self.roundMillions = function (value, count) {
        this.valueToFormat = (value / 1000000);
        return self.decimals(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    };

    // returns string
    self.roundThousands = function (value, count) {
        this.valueToFormat = (value / 1000);
        return self.decimals(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'K';
    };
};