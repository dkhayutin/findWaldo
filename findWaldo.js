function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    arr.forEach(arr.length[i])
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);