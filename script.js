//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is a leap year
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    // Return the number of days based on whether it's a leap year
    return isLeapYear(year) ? 366 : 365;
}
