// GET ELEMENT BY CLASS NAME

// console.log(document.getElementsByClassName('item'));
let itemUl = document.getElementById('items');
let items = itemUl.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'red';
}
