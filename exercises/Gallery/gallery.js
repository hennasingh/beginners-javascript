function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // select the elements we need

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');

    // First check if the modal is already opened
    if (modal.matches('.open')) {
      console.info('Modal is already opened');
    }
    modal.classList.add('open');

    // Event Listeners bound to Modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage(event) {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(event) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(element) {
    if (!element) {
      console.info('no image to show');
    }
    // update the modal with this info
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figure p').textContent = element.dataset.description;
    currentImage = element;
    openModal();
  }

  // Event Listeners

  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      // when enter is pressed on the image
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
