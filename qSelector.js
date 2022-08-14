//GET ELEMENT BY TAGNAME:

// let item = document.getElementsByTagName('li');
// console.log(item);

//QUERY SELECTOR:

// let header = document.querySelector('.header');

// let items = document.querySelector('#items');

// let lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'red';

// let lastItems = document.querySelectorAll('.item:last-child');
// console.log(lastItems);
// for (let lastItem of lastItems) {
//   lastItem.style.color = 'red';
// }

let selectNthChild = document.querySelector('.item:nth-child(2)');
selectNthChild.style.color = 'red';
