const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  console.log(event);
  // event.preventDefault();

  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    // to avoid doing via the window do following
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
  // it disappears quick with only this
  // console.log(event);
  // event.preventDefault();

  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});
