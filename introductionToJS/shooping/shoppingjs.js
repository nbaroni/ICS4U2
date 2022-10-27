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
      delButton.addEventListener('click', () => delButton.parentElement.remove());

      li.appendChild(delButton);
      input.value = '';
   }
}

btn.addEventListener('click', addItem);
input.addEventListener("keyup", (event) => {
   if (event.key === "Enter") {
     addItem()
   }
 });