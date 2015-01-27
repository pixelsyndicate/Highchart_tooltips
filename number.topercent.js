Number.prototype.toPercent = function (ofTotalAmount) {

    "use strict";
    var n, t;
    var sign, suffix, i;
    n = this;

    try {

        // assume base of 100
        t = (typeof ofTotalAmount === 'undefined' || isNaN(ofTotalAmount)) ? 100 : ofTotalAmount;
        if (t === 0) throw "division exception averted";
        if (t <= n) throw "is too low";

        sign = (n < 0) ? '-' : '';
        suffix = '%';
        i = parseInt(n = Math.abs(n * t)) + '';

    } catch (err) {
        alert("Error: " + err + ".");
    } finally {
         return sign + i + suffix;
    }

    return sign + i + suffix;
};
