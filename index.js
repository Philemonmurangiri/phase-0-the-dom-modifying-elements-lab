
const mainElementBefore = document.querySelector('main#main');


if (mainElementBefore) {
  console.error("The main#main element exists before processing index.js");
} else {
  console.log("The main#main element doesn't exist before processing index.js");
}


const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}


const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "Philemon Murangiri"; 
newHeader.textContent = `${yourName} is the champion`;


document.body.appendChild(newHeader);