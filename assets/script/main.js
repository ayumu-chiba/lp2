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





$('.faq-question').on('click', function () {
  const $item = $(this).closest('.faq-item');
  const $icon = $(this).find('.toggle-icon');
  $item.toggleClass('active');
  $icon.toggleClass('bi-caret-down-fill bi-caret-up-fill');
});








