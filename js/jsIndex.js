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
var nome = document.getElementById('nome')
var email = document.getElementById('email')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    validarForm()
})


function validarForm() {
    verificarNome()
    verificarEmail()


    let formItens = [...form.querySelectorAll('.form_dados')].every((item)=>{
        return item.className === 'form_dados'
    })

    if (formItens) {
        alert('enviado com sucesso')
    } else {
        alert('Preencha todos os campos!')
    }
}



function verificarNome() {
    let nomevalue = nome.value.trim()

    if (nomevalue === '') {
        erroValidacao(nome, 'Campo de preenchimento obrigatório')
    } else {
        successoValidacao(nome)
    }
}

function verificarEmail() {
    let emailvalue = email.value.trim()

    if (emailvalue === '') {
        erroValidacao(email, 'Campo de preenchimento obrigatório')
    } else if (!emailErrado(emailvalue)) {
        erroValidacao(email, 'Email inválido')
    } else {
        successoValidacao(email)
    }
}



function erroValidacao(input, mensagem) {
    let bordaInput = input.parentElement
    let msgAlert = bordaInput.querySelector('small')

    bordaInput.className = 'form_dados error'
    msgAlert.innerText = mensagem
}
function successoValidacao(input) {
    let bordaInputOk = input.parentElement

    bordaInputOk.classList = 'form_dados'
}
function emailErrado(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
