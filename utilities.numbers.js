utilities.numbers = function () {
    var self = this,
        that = {};
    that.valueToFormat = 0.0;

    // adds commas to the number
    that.toCommaFormat = function (value) {
        that.valueToFormat = value;
        return that.valueToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // returns double
    that.toDecimalRounded = function (c) {
        return (that.valueToFormat).toFixed(c);
    };

    // return string starting with $ ending

    that.toCurrency = function (value, decimalPlaces) {

        that.valueToFormat = value;
        return '$' + that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // returns string ending with '%'
    that.toPercent = function (value) {
        that.valueToFormat = (value <= 1) ? (value * 100) : value;
        return that.valueToFormat.toString() + '%';
    };

    // return string ending with 'M'
    that.toMillions = function (value, decimalPlaces) {
        that.valueToFormat = (value / 1000000);
        return that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    };

    // returns string ending with 'K'
    that.toThousands = function (value, decimalPlaces) {
        that.valueToFormat = (value / 1000);
        return that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'K';
    };

    // returns string ending with 'B'
    that.toBillions = function (value, decimalPlaces) {
        that.valueToFormat = (value / 1000000000);
        return that.toDecimalRounded(decimalPlaces).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'B';
    };

    // automatically returns string ending with 'K', 'M' or 'B'
    that.toShortenedValue = function (value, decimalPlace) {
        that.valueToFormat = value;
        if (that.valueToFormat <= 999999.999) {
            return that.toThousands(that.valueToFormat, decimalPlace);
        }
        if (that.valueToFormat >= 1000000000) {
            return that.toBillions(that.valueToFormat, decimalPlace);
        }
        return that.toMillions(that.valueToFormat, decimalPlace);
    };

    return that;
};

