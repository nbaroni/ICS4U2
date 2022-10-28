const keyboard = document.querySelector(".grid-container");
const btn = document.querySelector('#calculator');

console.log(keypadNumbers[1])

const handleClick = () => {
    console.log('clicked')
}

// function adder(key, butn, j) {
//     const buttonElement = document.createElement('button')
//     buttonElement.textContent = key
//     // if (key === 0) {
//     //     buttonElement.setAttribute('id', 'wide-button-1')
//     // } else if (key === 'CLS') {
//     //     buttonElement.setAttribute('id', 'wide-button-2')
//     // } else if (key === '=') {
//     //     buttonElement.setAttribute('id', 'wide-button-3')
//     // } else {
//     //     buttonElement.setAttribute('id', 'key')
//     // }
//     // // buttonElement.addEventListener('click', handleClick)
//     // createDiv(key)
//     butn.appendChild(buttonElement)
//     return key
// }

function createDiv(key) {
    const div = document.createElement('div');
    div.setAttribute('class', 'key')
    if (key === 0) {
        const divv = document.createElement('div');
        divv.setAttribute('class', 'wide-button-2')
        keyboard.appendChild(divv)
    } else if (key === 'CLS') {
        div.setAttribute('class', 'wide-button-2')
    } else if (key === '=') {
        div.setAttribute('class', 'wide-button-3')
    } else {
        div.setAttribute('class', 'key')
    }
    keyboard.appendChild(div)

    div.addEventListener('click', handleClick)
    div.textContent = key
}

// function createButton(id) {
//     butn.classList.add('id');
// }

for (var i = 0; i < keypadNumbers.length; i++) {
    var key = keypadNumbers[i];
    for (var j = 0; j < key.length; j++) {
        createDiv(key[j])
    }
}


