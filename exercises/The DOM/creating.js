const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// This flow causes the page to re-paint multiple times, so should be avoided

// document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// Change the order and it should be ok
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Not a nice way to create lists
// eslint-disable-next-line no-lone-blocks
{
  /* <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul> */
}
const unorderedList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
unorderedList.appendChild(li);

document.body.insertAdjacentElement('afterbegin', unorderedList);
