const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }
  
  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }
  
    function setMenuListener() {
      document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);
  
        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
          activeElements.forEach((current) => {
            if (current.classList.contains(params.btnClassName)) {
              current.classList.remove(params.activeClassName);
            } else {
              current.classList.add(params.disabledClassName);
            }
          });
        }
  
        if (evt.target.closest(`.${params.btnClassName}`)) {
          const btn = evt.target.closest(`.${params.btnClassName}`);
          const path = btn.dataset.path;
          const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
  
          btn.classList.toggle(params.activeClassName);
  
          if (!drop.classList.contains(params.activeClassName)) {
            drop.classList.add(params.activeClassName);
            drop.addEventListener("animationend", onDisable);
          } else {
            drop.classList.add(params.disabledClassName);
          }
        }
      });
    }
  
  setMenuListener();



  /* HERO-SLIDER*/
  const swiperOne = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,        
    },
  });

        const element = document.querySelector('#selectCustom');
      const choices = new Choices(element,{
        searchEnabled: false,
        position: 'auto',
        itemSelectText: '',
      })



       /*MAP*/
       ymaps.ready(init);

       function init(){
           var myMap = new ymaps.Map("myMap", {
               center: [55.76012374114697,37.61428411536729],
               zoom: 14
           });
   
           var myPlacemark = new ymaps.Placemark([55.76012374114697,37.61428411536729], {}, {
               iconLayout: 'default#image',
               iconImageHref: 'img/map-point.svg',
               iconImageSize: [20, 20],
               iconImageOffset: [-10, -10]
           });

        

        myMap.controls.remove('searchControl'), // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  
    // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
        geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.76012374114697,37.61428411536729], // координаты точки
    }
});


// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
    }






    /*PROJECRS__SLIDER-    бесцветные картинки     */
    const projectsSlider = new Swiper('.projects__swiper', {
      direction: 'horizontal',
      loop: false,
      navigation: {
          nextEl: '.projects__swiper-button-next',
          prevEl: '.projects__swiper-button-prev',
        },
        
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1, 
            spaceBetween: 0,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 37,
            slidesPerGroup: 2
          },
          1024: {
              slidesPerView: 2,
              spaceBetween: 34,
              slidesPerGroup: 2
            },

            1365: {
              slidesPerView: 2,
              spaceBetween: 29,
              slidesPerGroup: 2
            },
    
            1920: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 50,
            },
  
          
        }

    });






    /*EVENTS__SLIDER-    карточки с событиями    */
    const eventsSlider = new Swiper('.events__swiper', {
      direction: 'horizontal',
      loop: false,
      navigation: {
          nextEl: '.events-swiper-button-next',
          prevEl: '.events-swiper-button-prev',
        },
         // If we need pagination
      pagination: {
      el: '.swiper-pagination',
  },

        
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1, 
            slidesPerGroup: 1,
            
          },
         
        
          768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 1
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 27,
              slidesPerGroup: 1
            },
    
            1920: {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesPerGroup: 1
            },
  
          
        }

    });





    /* ACCORDION */

let k=false;   
let accordionBtn = document.querySelectorAll(".accordion-item-title")
let linkAccordionItem = document.querySelectorAll(".accordion-item-content")

accordionBtn.forEach(element=>element.addEventListener("click",function(){
const children1 =  element.nextElementSibling
let svgImg =  document.querySelectorAll(".catalog__vector-svg")
child2 = element.childNodes[3]

for(i=0;i<linkAccordionItem.length;i++){
  linkAccordionItem[i].classList.remove('display-show')
  svgImg[i].classList.remove('open-svg');
}
if(children1.classList.contains("display-show")){
children1.classList.remove('display-show');
  child2.classList.remove('open-svg');
  } else {
    children1.classList.add('display-show');
    child2.classList.add('open-svg');

  }}
))

let linkAccordion = document.querySelectorAll(".accordion__link")
let showAccordion = document.querySelector(".catalog__left-part-others")
let showedAccordion = document.querySelector(".catalog__left-part-Dominico")
linkAccordion.forEach(element=>element.addEventListener("click",function(){
  if(element!=linkAccordion[11]){
  showAccordion.classList.remove("display-none")
  showedAccordion.classList.add("display-none")}
}))
linkAccordion[11].addEventListener("click",function(){
  showAccordion.classList.add("display-none")
  showedAccordion.classList.remove("display-none")
})



      /* BURGER */

let logo = document.querySelector(".header__logo")
let searchBtn = document.querySelector(".header__search")
let openBtn = document.querySelector(".header__burger-btn")
let burgerWindow = document.querySelector(".header__menu-burger")
let Lines = document.querySelectorAll(".header__burger-line")
let links = document.querySelectorAll(".header__burger-link")
let lastButton = document.querySelector(".header__burger-last-btn")

openBtn.addEventListener("click",function(){
  logo.classList.toggle("opacity")
  searchBtn.classList.toggle("opacity")
  burgerWindow.classList.toggle("display-none")
  Lines[0].classList.toggle("turn-left")
  Lines[1].classList.toggle("display-none")
  Lines[2].classList.toggle("turn-right")
});

links.forEach(element=>element.addEventListener("click",function(){
  burgerWindow.classList.add("display-none")
  logo.classList.toggle("opacity")
  searchBtn.classList.toggle("opacity")
  Lines[0].classList.toggle("turn-left")
  Lines[1].classList.toggle("display-none")
  Lines[2].classList.toggle("turn-right")
}));

lastButton.addEventListener("click",function(){
  logo.classList.toggle("opacity")
  searchBtn.classList.toggle("opacity")
  burgerWindow.classList.toggle("display-none")
  Lines[0].classList.toggle("turn-left")
  Lines[1].classList.toggle("display-none")
  Lines[2].classList.toggle("turn-right")
});





/*TOOLTIPS*/

(() => {
  tippy('.js-tooltip-btn', {
    theme: 'mytooltip',
    maxWidth: 330,
})

})();




/*Search-Window*/
let seachBtn = document.getElementById('header__search-btn');
let closeBtn = document.getElementById('header__search-close');
let searchWindow = document.getElementById('header__show-search');


seachBtn.addEventListener('click', () => {
  searchWindow.classList.remove('display-none');
});

closeBtn.addEventListener('click', ()=>{
  searchWindow.classList.add('display-none');
});



/* Modal-Window */

const slider = document.querySelectorAll('.gallery__swiper-slide');
const closeBtn1 = document.getElementById('modal-close-btn-1');
const closeBtn2 = document.getElementById('modal-close-btn-2');
const modalWindowMain = document.querySelector('.gallery__modal-part');
const malevich = document.querySelector('.modal-pic');
const noInfo = document.querySelector('.modal-pic-no-info');





if (window.innerWidth > 767) {

slider.forEach(element=>element.addEventListener('click', ()=> {
  modalWindowMain.classList.remove('display-none');
  noInfo.classList.remove('display-none');
}));

slider[1].addEventListener('click', ()=> {
  modalWindowMain.classList.remove('display-none');
  malevich.classList.remove('display-none');
  noInfo.classList.add('display-none');
});
}
else if(window.innerWidth < 767){
  slider.forEach(element=>element.addEventListener('click', ()=> {
    modalWindowMain.classList.remove('display-none');
    noInfo.classList.remove('display-none');
  }));
  slider[0].addEventListener('click', ()=> {
    modalWindowMain.classList.remove('display-none');
    malevich.classList.remove('display-none');
    noInfo.classList.add('display-none');
    
  });

}


const close = () => {
  modalWindowMain.classList.add('display-none');
  malevich.classList.add('display-none');
  noInfo.classList.add('display-none');
};

closeBtn1.addEventListener('click', close);
closeBtn2.addEventListener('click', close);



/* InputMask - офомление формы */

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)9999999");
im.mask(selector);



/* JUST VALIDATE  - валидация формы */

new  JustValidate('.geodata__center-part', {
  rules: {
    name: {
        required: true,
        minLength: 3,
        maxLength: 5,
    },

    tel: {
      required: true,
      function:(name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
      }
  },
  },


  


});