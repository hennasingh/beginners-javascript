// Listen on multiple buttons
const buyButtons = document.querySelectorAll('.buy');

function listenBuyButtonClick(event) {
  const button = event.target;
  //   console.log(button.textContent);
  //   console.log('You are buying it!');
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);

  // difference comes in when there are different elements nested inside elements
  // you are listening to
  console.log(event.target === event.currentTarget);
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', listenBuyButtonClick);
});
