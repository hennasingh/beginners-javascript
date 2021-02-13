const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

/*
 * The observer pattern is not so often used
 */
// will watch for element on or off the page, takes a callback
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

// ob.observe(watch);

ob.observe(terms.lastElementChild);

/**
 * Rather than figuring out how much the user has scrolled (using offsets etc in the past), we will
 * use intersection observers to check if something is visible on the screen
 */
// terms.addEventListener('scroll', function (event) {
//   console.log(event);
//   console.log(event.currentTarget.scrollTop);
//   console.log(event.currentTarget.scrollHeight);
// });
