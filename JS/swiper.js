const swiperTwo = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        // when window width is >= 320px
          1920: {
            slidesPerView:3,
            spaceBetween: 50,
            slidesPerGroup: 3
          },

          1366: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 2
          },
          
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2
          },

          575: {
            slidesPerView: 1, 
            slidesPerGroup: 1
          },

          320: {
            slidesPerView: 1, 
            slidesPerGroup: 1
          },
      }
  }); 
  
  
  
  
  