import '../css/style.css'
function importAllImages(r) {
    let images = {};
    r.keys().forEach((key) => {
      images[key] = r(key);
    });
    return images;
  }

const images = importAllImages(require.context('../Resources/', true, /\.(png|jpe?g|svg|ico)$/));

document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.createElement('img');
    document.body.appendChild(imageElement);
});

document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    script.onload = function() {
      var swiper1 = new Swiper('#swiper1', {
          loop: true,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          },
          autoplay: {
              delay: 1500
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          },
          centeredSlides: true,
          freeMode: true,
          spaceBetween: 30,
          slidesPerView: 3
        });
    };
    document.head.appendChild(script);
  });
