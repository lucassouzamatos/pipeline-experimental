"use strict";

var _ref, _ref2;

var getPair = function getPair(arr) {
  return arr.filter(function (number) {
    return number % 2 === 0;
  });
};

var multiply = function multiply(arr) {
  return arr.map(function (number) {
    return number * 2;
  });
};

var test = (_ref = (_ref2 = [1, 2, 3, 4, 5], getPair(_ref2)), multiply(_ref));
console.log(test);