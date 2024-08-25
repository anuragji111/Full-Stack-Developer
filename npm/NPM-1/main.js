var moment = require('moment'); // require
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

var myList = [1, 2, 2, 3, 4, 5, 5, 5, 6];
var myUniqueList = unique(myList);

console.log(myUniqueList);  