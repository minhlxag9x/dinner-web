// Ghi thêm các config/setting bổ sung, tuỳ cách dùng của mỗi thư viện
$(document).ready(function () {
  // Code dưới copy từ: https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive:
     {
      
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
});
