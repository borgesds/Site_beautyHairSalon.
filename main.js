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