/* MENU MOBILE */
var icon_menu = document.getElementById('icon_menu')

icon_menu.addEventListener('click', () =>{
    let menu_mobile = document.querySelector('.menu_mobile')

    menu_mobile.classList.toggle('open')  
})


/* ALTERAR A COR DE FUNDO DO CABEÇALHO */
window.addEventListener('scroll', ()=>{
    let cabecalho = document.getElementById('header')
    if (window.scrollY > 1) {
        cabecalho.style.background = '#fff'
        cabecalho.style.transition = '.9s'
    } else {
        cabecalho.style.background = '#25374617'
    }
})





/* APARECER A SETA PARA CIMA */
window.addEventListener('scroll', () =>{
    var apar= document.getElementById('up')

    if (window.scrollY > 120) {
        apar.style.opacity = '1'
    } else {
        apar.style.opacity = '0'
    }
    
})






var form = document.getElementById('form')
var btn_form = document.getElementById('btn_form')
var nome = document.getElementById('nome')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    verificarDados()
})


function verificarDados() {
    nomeValue = nome.value.trim()

    if (nomeValue === '') {
        //mensagem de erro
        erro(nome, 'Preenchimento obrigatório')
    } else {
        certo(nome)
    }
}


function erro(input, mensagem) {
    let form_control = input.parentElement
    let small = form_control.querySelector('small')


    form_control.className = 'form_dados error'
    small.innerText = mensagem
}

function certo(input) {
    let form_control = input.parentElement

    form_control.className = 'form_dados success'
}