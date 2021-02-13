// select the elements on the page -
// canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakeBtn = document.querySelector('.shake');

const MOVE_AMOUNT = 30;

// set up our canvas for drawing at random start point

const { width, height } = canvas;

// create random x and y start points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT; // by default its 1 px

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

function draw({ key }) {
  // increment the hue
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handler for the keys

function handleKey(event) {
  if (event.key.includes('Arrow')) {
    // event.preventDefault();
    draw({ key: event.key });
  }
}

// clear/ shake function

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// listen for arrow keys

window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);
