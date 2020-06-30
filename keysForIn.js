for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan




let users={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(obj) {
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline(users));
