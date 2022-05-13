/* Abre e fecha menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = nav.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Quando escolher um icone do menu e fechar o menu automatico*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}

/*Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    Keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapper: true
        }
    }
});

/* ScrollReveal: Mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links, 
    footer .brand, footer .social
    `, 
    {interval: 100}
)

/* Botão voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

 /* Menu ativo quando clicar*/  
 const sections = document.querySelectorAll('main section[id]')
 
 function activateMenuAtCurrentSection() {
   const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
 
   for (const section of sections) {
     const sectionTop = section.offsetTop
     const sectionHeight = section.offsetHeight
     const sectionId = section.getAttribute('id')
 
     const checkpointStart = checkpoint >= sectionTop
     const checkpointEnd = checkpoint <= sectionTop + sectionHeight
 
     if (checkpointStart && checkpointEnd) {
       document
         .querySelector('nav ul li a[href*=' + sectionId + ']')
         .classList.add('active')
     } else {
       document
         .querySelector('nav ul li a[href*=' + sectionId + ']')
         .classList.remove('active')
     }
   }
 }

/*function execute */
window. addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})


