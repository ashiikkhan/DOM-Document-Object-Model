// const grandparent = document.querySelector('.todo-list');
// const parent = document.querySelector('#items');
// const children = document.querySelectorAll(".item");
// console.log(children);

//grandparent - parent - children

// const grandparent = document.querySelector('.todo-list');
// const parent = grandparent.children;
// console.log(parent); //here is two children of grandparent element.
// const children = parent[1].children;
// console.log(children);

//grandparent to children skip parent

// const grandparent = document.querySelector('.todo-list');
// const children = grandparent.querySelectorAll('.item');
// console.log(children);

//children to parent

// const children = document.querySelector('.item');
// // const parent = children.parentElement;
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);

// sibling :

// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// console.log(childrenTwo);
// nextElementSibling // previousElementSibling
const childrenTwo = document.querySelector('.item').nextElementSibling;
// console.log(childrenTwo);
childrenTwo.style.color = 'green';
const childrenOne = childrenTwo.previousElementSibling;
// console.log(childrenOne);
childrenOne.style.color = 'red';
const childrenThree = childrenTwo.nextElementSibling;
// console.log(childrenThree);
childrenThree.style.color = 'blue';
