$(function () {
  $('.cover-slick').slick({

    infinite: false,
    dots: true,
    arrows: true,
    prevArrow: '<img src="/assets/image/arrow-left-circle-fill.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/arrow-right-circle-fill.svg" class="slide-arrow next-arrow">',


    slidesToShow: 1,
    slidesToScroll: 1,
 // デフォルト（1180px以上）
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1180, // 1180px以下
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768, // 768px以下
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$('.cover-slick').on('afterChange', function(event, slick, currentSlide){

  if (window.innerWidth >= 1180) {

    var lastStart = slick.slideCount - 3; // 3枚表示前提

    if (currentSlide >= lastStart) {
      slick.slickSetOption('slidesToShow', 1, true);
    } else {
      slick.slickSetOption('slidesToShow', 3, true);
    }
  }
});


$('.faq__question').on('click', function () {
  const $item = $(this).closest('.faq__item');
  const $icon = $(this).find('.toggle-icon');
  $item.toggleClass('active');
  $icon.toggleClass('bi-caret-down-fill bi-caret-up-fill');
});








