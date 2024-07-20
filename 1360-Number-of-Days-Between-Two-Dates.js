/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let timeDifference = Math.abs(Date.parse(date2) - Date.parse(date1));
    let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return dayDifference;

};