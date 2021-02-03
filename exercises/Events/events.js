const butts = document.querySelector('.butts');
const coolBtn = document.querySelector('.cool');

butts.addEventListener('click', function () {
  console.log('It Got Clicked');
});

// advantage of having function outside the eventlistener

function handleClick() {
  console.log('🐛 Clicked');
}

coolBtn.addEventListener('click', handleClick);

// Listen on multiple items

function buyItem() {
  console.log('BUYING ITEM');
}

const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

buyButtons.forEach(function (buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});

// or we can bring the function out of the for each loop and add a callback

function sellItem() {
  console.log('SELLING ITEM');
}

function sellButtonListener(listener) {
  console.log('Binding the sell button');
  listener.addEventListener('click', sellItem);
}

const sellButtons = document.querySelectorAll('.sell');

sellButtons.forEach(sellButtonListener);
