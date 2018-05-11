(function() {
  const imageSliders   = document.querySelectorAll('.image-slider');

  for (let x = 0; x < imageSliders.length; x++) {
    const imageSlider = imageSliders[x];
    const dotsContainer = imageSlider.querySelector('.dots');
    const controlsContainer = imageSlider.querySelector('.control-container');

    const arrows = imageSlider.getElementsByTagName('i');
    const images = imageSlider.getElementsByTagName('img');
    
    let slides       = [];
    let numOfSlides  = images.length;
    let currentSlide = 0;
  
    let minimumHeight = 0;

    // hide the slider controls if there's only a single image to display
    if (numOfSlides <= 1) {
      dotsContainer.style.display = 'none';
      controlsContainer.style.display = 'none';
    }
  
    for (let i = 0; i < images.length; i++) {
      slides.push(images[i].src);
  
      if (minimumHeight < images[i].naturalHeight) {
        minimumHeight = images[i].naturalHeight;
      }
      
      const dot = document.createElement('i');
      dot.className = 'fas fa-circle' + ((i === 0) ? ' active' : '');
      dotsContainer.appendChild(dot);
    }
  
    // imageSlider.style.minHeight = minimumHeight + 'px';
  
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
  }

})();
