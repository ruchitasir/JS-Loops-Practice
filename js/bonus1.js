var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]

// Your code here
// Remember to use REDUCE!
var numLength = names.map(function (name) {
    return name.length;
  });
  console.log(numLength);
  
var add = function (total, numLetters) {
    return total + numLetters;
  };
  
  var sum = numLength.reduce(add);
  console.log(sum);