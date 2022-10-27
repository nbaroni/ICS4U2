const input = document.querySelector('#item');
const btn = document.querySelector('#addItem');
const itemList = document.querySelector('ul');

const addItem = function addItem() {
   const itemText = input.value;
   if (itemText !== undefined && itemText !== '') {
      const li = document.createElement('li');
      li.textContent = itemText;
      itemList.appendChild(li);

      const delButton = document.createElement('button');
      delButton.textContent = 'DELETE';
      /*
                  delButton.addEventListener('click', function () {
                     delButton.parentElement.remove();
                  });*/
      delButton.addEventListener('click', () => delButton.parentElement.remove());

      li.appendChild(delButton);


      input.value = '';
      item.focus();
   }
}

/* we are passing in a callback function  - when we click we call the function that was passed in */

//btn.addEventListener('click', () => addItem());
btn.addEventListener('click', addItem);
/*
   btn.onclick = function addItem() {
      console.log('Adding Item...');
   }
*/

input.focus();



// passing in a callback to the forEach function 
const arr = [1, 2, 3, , , , 6];
arr.forEach((a, b, c) => {
   console.log('Element: ' + a);
   console.log('Index: ' + b);
   console.log('Whole Array: ' + c);
});
