var words = ["ground", "control", "to", "major", "tom"];

function map(array, callBack){
  var newWords = []
  for(indexValue of array) {
    newWords.push(callBack(indexValue))

  }
console.log(newWords)


}

map(words, function(newWords) {
  return newWords.length;
});

map(words, function (newWords) {
  return newWords.toUpperCase();
});

map(words, function(newWords) {
  return newWords.split('').reverse().join('');
});