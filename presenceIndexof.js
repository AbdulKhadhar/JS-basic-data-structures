let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists


function quickCheck(arr, elem) {
  if(arr.indexOf(elem)==-1){
    return false;
  }else {
    return true;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
