/*
decimal_sep: character used as deciaml separtor, it defaults to '.' when omitted
thousands_sep: char used as thousands separator, it defaults to ',' when omitted
*/
Number.prototype.toMoney = function (decimals, includePrefix, shortenWithSuffix, decimal_sep, thousands_sep) {


    var suffix = ['K', 'M', 'B'];
    var n = this;

    var c = isNaN(decimals) ? 2 : Math.abs(decimals);
    //if decimal is zero we must take it, it means user does not want to show any decimal

    var d = decimal_sep || '.';
    //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)


    /*    according to [http://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function]
   the fastest way to check for not defined parameter is to use typeof value === 'undefined'
   rather than doing value === undefined.    */
    var t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
    //if you don't want to use a thousands separator you can pass empty string as thousands_sep value

    var p = (typeof includePrefix === 'undefined' || includePrefix === true) ? '$' : '';


    // begin assembling the string to return
    // create the prefix string
    var sign = (includePrefix) ? p : '';
    // add neg or pos
    sign += (n < 0) ? '-' : '';


    // create the suffix string
    var s = (typeof shortenWithSuffix === 'undefined') ? '' :
        ((shortenWithSuffix === true) ?
            ((n >= 1000000000 || n <= -1000000000) ? suffix[2] :
                ((n >= 1000000 || n <= -1000000) ? suffix[1] :
                    ((n >= 1000 || n <= -1000) ? suffix[0] : ''))) : '');


    // if it's going to need a suffix, we need to do some division before making it a string.
    n = (s !== '') ? (n >= 1000000000 || n <= -1000000000) ?
        (n / 1000000000) : (n >= 1000000 || n <= -1000000) ?
        (n / 1000000) : (n >= 1000 || n <= -1000) ?
        (n / 1000) : n : n;





    //extracting the absolute value of the integer part of the number and converting to string
    var i = parseInt(n = Math.abs(n).toFixed(c)) + '';



    var j = ((j = i.length) > 3) ? j % 3 : 0;




    var toReturn = sign +
        (j ? i.substr(0, j) + t : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
        (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');

    return (shortenWithSuffix) ? toReturn += s : toReturn;
};
