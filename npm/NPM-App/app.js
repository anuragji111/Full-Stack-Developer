const _ = require('lodash');

const numbers = [11,22,33,44,55,51];

_.each(numbers, function(number, i){
  console.log(number);
});