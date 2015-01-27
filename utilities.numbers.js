utilities.numbers = function () {
    var self = this;
    var that = {};

    this.valueToFormat = 0.0;

    // returns double
    that.toDecimalRounded = function (c) {
        return (that.valueToFormat).toFixed(c);
    };

    // return string starting with $ ending
    that.toCurrency = function (value, decimalPlaces) {

        this.valueToFormat = value;
        return '$' + that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // returns string ending with '%'
    that.toPercent = function (value) {
        this.valueToFormat = (value <= 1) ? (value * 100) : value;
        return that.valueToFormat.toString() + '%';
    };

    // return string ending with 'M'
    that.toMillions = function (value, decimalPlaces) {
        this.valueToFormat = (value / 1000000);
        return that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    };

    // returns string ending with 'K'
    that.toThousands = function (value, decimalPlaces) {
        this.valueToFormat = (value / 1000);
        return that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'K';
    };

    return that;
};
