// Make a div
const divComponent = document.createElement('div');

// add a class of wrapper to it
divComponent.classList.add('wrapper');

// put it into the body
document.body.appendChild(divComponent);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const listItem1 = document.createElement('li');
listItem1.textContent = 'one';

const listItem2 = document.createElement('li');
listItem2.textContent = 'two';

const listItem3 = document.createElement('li');
listItem3.textContent = 'three';

// put that list into the above wrapper
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

divComponent.appendChild(list);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
divComponent.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `<div class="myDiv">
<p>Paragraph One</p>
<p>Paragraph Two</p>
</div>`;

// put this div before the unordered list from above
const ulElement = divComponent.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
const myDiv = divComponent.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
     <h2>${name.toUpperCase()} - ${age}</h2>
     <p>Their height is ${height} tall and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="delete" type="button">&times Delete</button>
     </div>
     `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('Henna', 33, 156);
const player2 = generatePlayerCard('Varun', 26, 172);
const player3 = generatePlayerCard('Mom', 62, 163);
const player4 = generatePlayerCard('Dad', 63, 182);

// append those cards to the div
newDiv.innerHTML = player1 + player2 + player3 + player4;

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('beforebegin', newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
  // or buttonThatGotClicked.closest('.playerCard').remove()
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
