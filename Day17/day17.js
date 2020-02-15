localStorage.setItem('name', 'Alixe');
localStorage.setItem('lastname', 'B');
localStorage.setItem('address', 'Ktm');
console.log(localStorage);
const nameIs = localStorage.getItem('name');
console.log(nameIs);
const userObj = { name: 'Abhinash', lastname: 'Karna' };
const usrStr = JSON.stringify(userObj, undefined, 2);
console.log(usrStr);

// only string can be stored in Local Storage so stringified
localStorage.setItem('moreUser', usrStr);
console.log(localStorage);
