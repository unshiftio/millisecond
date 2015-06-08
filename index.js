/**
 * Parse a time string and return the number value of it.
 *
 * @param {String} ms Time string.
 * @returns {Number}
 * @api private
 */
module.exports = function millisecond(ms) {
  'use strict';

  if ('string' !== typeof ms || '0' === ms || +ms) return +ms;

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|wks?|w|years?|yrs?|y)?$/i.exec(ms)
    , second = 1000
    , minute = second * 60
    , hour = minute * 60
    , day = hour * 24
    , week = day * 7
    , year = day * 365
    , amount;

  if (!match) return 0;

  amount = parseFloat(match[1]);

  switch (match[2].toLowerCase()) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return amount * year;

    case 'weeks':
    case 'week':
    case 'wks':
    case 'wk':
    case 'w':
      return amount * week;

    case 'days':
    case 'day':
    case 'd':
      return amount * day;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return amount * hour;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return amount * minute;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return amount * second;

    default:
      return amount;
  }
};
