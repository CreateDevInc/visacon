(function() {
  const imageSlider   = document.querySelector('.image-slider');
  const dotsContainer = document.querySelector('.dots');

  const arrows = imageSlider.getElementsByTagName('i');
  const images = imageSlider.getElementsByTagName('img');
  
  let slides       = [];
  let numOfSlides  = images.length;
  let currentSlide = 0;

  let minimumHeight = 0;

  for (let i = 0; i < images.length; i++) {
    slides.push(images[i].src);

    if (minimumHeight < images[i].naturalHeight) {
      minimumHeight = images[i].naturalHeight;
    }
    
    const dot = document.createElement('i');
    dot.className = 'fas fa-circle' + ((i === 0) ? ' active' : '');
    dotsContainer.appendChild(dot);
  }

  console.log(minimumHeight);
  console.log(imageSlider);
  imageSlider.style.minHeight = minimumHeight + 'px';

  const dots = dotsContainer.childNodes;

  arrows[0].addEventListener('click', changeSlide);
  arrows[1].addEventListener('click', changeSlide);

  function changeSlide(e) {
    const arrowClass = e.target.className;

    dots[currentSlide].classList.remove('active');

    if ((arrowClass.includes('left')) && (currentSlide > 0))                     { currentSlide--;                 }
    else if ((arrowClass.includes('left')) && (currentSlide === 0))              { currentSlide = numOfSlides - 1; }
    else if ((arrowClass.includes('right')) && (currentSlide < numOfSlides - 1)) { currentSlide++;                 }
    else                                                                         { currentSlide = 0;               }

    images[0].src = slides[currentSlide];

    dots[currentSlide].classList.add('active');
  }

})();
