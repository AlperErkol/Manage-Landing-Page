const hamburger = document.querySelector(".header__inner_hamburger");
const overlay = document.querySelector(".overlay");
const body = document.body;
const html = document.documentElement;


// Event Listeners
hamburger.addEventListener('click',_=>{


    if(hamburger.classList.contains("opened")){
        hamburger.classList.remove("opened");
        
    }
    else{
        hamburger.classList.add("opened");
    }


    if(overlay.classList.contains("open")){
        overlay.classList.remove("open");
        body.classList.remove("no-scroll");
        html.classList.remove("no-scroll");
    }
    else{
        overlay.classList.add("open");
        body.classList.add("no-scroll");
        html.classList.add("no-scroll");
    }

});



// Swiper

function slider(element){

    new Swiper(element,{

        slidesPerView: '2',
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {

            320:{
                slidesPerView:1,
                spaceBetween:10,
                pagination : {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            },
            640:{
                slidesPerView:2,
                spaceBetween:20,
                pagination : {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            },
            768:{
                slidesPerView:2,
                spaceBetween:30,
                pagination : {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            }
        }


    });

}

window.addEventListener('load',slider('.swiper-container'));