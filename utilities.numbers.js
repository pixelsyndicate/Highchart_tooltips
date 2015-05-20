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

utilities.numbers.stringNumber = function () {
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

utilities.randomIntFromInterval = function (min, max) {


    return Math.floor(Math.random() * (max - min + 1) + min);

};

utilities.randomDoubleFromInterval = function (min, max) {


    return (Math.random() * (max - min + 1) + min);

};
