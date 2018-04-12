function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(name, index) {
      // console.log(i)
    if(name === "Waldo") {
      found(index);   // execute callback
    }
  })
}

function actionWhenFound(waldoIndex) {
  console.log("Found him at index " + waldoIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);