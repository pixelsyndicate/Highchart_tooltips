

var chartDataFormat = function () {
    var self = this;
    self.valueToFormat = 100;

    // returns double
    self.decimals = function (c) {
        return (this.valueToFormat).toFixed(c);
    };

    // return string
    self.currency = function (value, count) {

        self.valueToFormat = value;
        return '$' + self.decimals(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    };

    // returns string
    self.percent = function (v) {
        self.valueToFormat = (v <= 1) ? (v * 100) : v;
        return self.valueToFormat.toString() + '%';
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
