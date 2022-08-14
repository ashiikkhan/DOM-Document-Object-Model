//creating an element:

// const divEl = document.createElement('div');
// // console.dir(divEl);
// divEl.className = 'red';
// divEl.setAttribute('id', 'red');
// divEl.setAttribute('title', 'red div');
// console.log(divEl);

// const container = document.querySelector('.todo-list');
// const h2El = document.querySelecto('h2');
// container.insertBefore(divEl, h2El);

// append // appendChild

const divEl = document.createElement('div');
divEl.innerText = 'hello world DOM Tutorial';
divEl.className = 'red';
divEl.setAttribute('id', 'red');
const container = document.querySelector('.todo-list');
const a = container.appendChild(divEl);
const b = container.append(divEl);
console.log(a);
