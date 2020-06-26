let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']



function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment,'is','fun']
  return sentence;
}

console.log(spreadOut());
