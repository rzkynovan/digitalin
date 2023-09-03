// Change Bg nav while scrolldown
function scrollHeader(){
    const nav = document.getElementById('header')

    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) 
        nav.classList.add('bg-black'); 

        else nav.classList.remove('bg-black')

}
window.addEventListener('scroll', scrollHeader)


// Change Active class on navbar
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 400;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('nav-active')
        }else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('nav-active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// Parallax Event
document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }


// Template Swipper
var swiper = new Swiper(".templateSwiper", {
   
    spaceBetween: 24,
    breakpoints:{
      640: {
        slidesPerView: 1,
        spaceBetween: 50, 
      },
      776: {
        slidesPerView: 2.5,
      }
    },
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var mySwiper = new Swiper('.testi-slide', {
    breakpoints:{
        640: {
          slidesPerView: 1,
          spaceBetween: 50, 
        },
        776: {
          slidesPerView: 2.5,
        }
      },
    // centeredSlides: true,
    // effect: "coverflow",
    spaceBetween: 24,
  });