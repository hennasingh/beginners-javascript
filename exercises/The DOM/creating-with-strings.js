const item = document.querySelector('.item');

console.log(item.innerHTML);

const src = `https://picsum.photos/200`;
const desc = `Cute Pup`;

const myHTML = `
<div class= "wrapper">
<h2>Cute ${desc}</h2>
<img src ="${src}" alt="${desc}"/>
</div>
`;

// it gives undefined because above is just a string
console.log(myHTML.classList);

// verify
console.log(typeof myHTML);

// item.innerHTML = myHTML;

// turn a string above into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);

const image = myFragment.querySelector('img');
console.log(image);

// or append()
document.body.appendChild(myFragment);
