const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

const SIZE = 10;

// Write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  console.log(stream);
  video.srcObject = stream;
  await video.play();

  // size the canvas to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// you cannot call populateVideo from console because its running via server now, but you can do it like below
console.log(populateVideo);

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log({ width, height, top, left });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y
    face.y,
    SIZE,
    SIZE
  );
  // take that face back out and draw it back at normal size
  // draw the small face back up, but scale up
  faceCtx.drawImage(
    faceCanvas, // source
    face.x,
    face.y,
    SIZE,
    SIZE,
    // Drawing args
    face.x,
    face.y,
    face.width,
    face.height
  );
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // console.log(faces.length);
  // ask the browser when the next animation frame is, and tell it to run detect face for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

populateVideo().then(detect);
