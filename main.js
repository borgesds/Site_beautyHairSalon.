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

window. addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/*Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    Keyboard: true
});
