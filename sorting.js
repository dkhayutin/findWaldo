// var myArray = [10, 2, 5, 1, 9]
// myArray.sort(function (a,b){
//   return a-b
// })
// console.log(myArray)



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

  students.sort(function (a, b) {
  return b.age - a.age;
});

  students.sort(function(a,b) {
    if(a.name < b.name) {
      return -1
    } else if(a.name > b.name) {
      return 1;
    } else if (a.name == b.name) {
      return 0;
    }

/// FIGURE OUT HOW TO REFACTOR FIRST FUNCTION

})

 console.log(students)



// students.sort(function a,b)