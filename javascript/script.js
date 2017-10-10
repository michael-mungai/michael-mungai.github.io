var animals = ["cat","dog ","pig","toucan", "pecan", "crocodile"];
console.log(animals);

for (var i = 0; i < animals.length; i++) {
  var animal = animals[i];
  console.log("<img src='" + animal + ".jpg' />")
}
