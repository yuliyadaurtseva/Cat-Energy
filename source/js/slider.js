var slider = document.querySelector('.slider');
var docWidth = document.body.clientWidth;
var tabletWidth = 768;

if (slider) {
  var btnBefore = slider.querySelector('.slider__label--before');
  var btnAfter = slider.querySelector('.slider__label--after');

  btnBefore.addEventListener('click', function () {
    if (slider.classList.contains('slider__label--after')) {
      slider.classList.remove('slider__label--after');
    }
  })

  btnAfter.addEventListener('click', function () {
    if (!slider.classList.contains('slider__label--after')) {
      slider.classList.add('slider__label--after');
    }
  })

  if (docWidth >= tabletWidth) {
    var sliderBefore = slider.querySelector('.slider__item--before');
    var sliderAfter = slider.querySelector('.slider__item--after');
    var scale = slider.querySelector('.slider__progress');
    var range = scale.querySelector('.slider__range');

    range.addEventListener('input', function() {
      sliderBefore.style.width = (100 - range.value) + '%';
      sliderAfter.style.width = range.value + '%';
    })

    btnBefore.addEventListener('click', function () {
      sliderBefore.style.width = '100%';
      sliderAfter.style.width = '0%';
      range.value = 0;
    })

    btnAfter.addEventListener('click', function () {
      sliderBefore.style.width = '0%';
      sliderAfter.style.width = '100%';
      range.value = 100;
    })
  }
}