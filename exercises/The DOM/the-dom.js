const p = document.querySelector('p');
console.log(p);
const divs = document.querySelectorAll('div');
console.log(divs);
const imgs = document.querySelectorAll('.items img');
console.log(imgs);

const heading = document.querySelector('h2');
console.log(heading);
// or
console.dir(heading);
console.log(heading.textContent);
heading.textContent = 'Henna is Cool';
console.log(heading.innerHTML);

const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('open');
console.log(pic.classList);
