let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.


function mixedNumbers(arr) {
  arr.unshift('I',2,'three');
  arr.push(7,'VIII',9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
