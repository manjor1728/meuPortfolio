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
var txtArea = document.getElementById('txtArea')

form.addEventListener('submit', evt =>{
    evt.preventDefault()

    validarEnviarForm()
    validarEmail()
    validarCampotexto()
})


/* verificar e validar o campo de texo */
function validarCampotexto() {
    let txtAreavalue = txtArea.value.trim()

    if (txtAreavalue === '') {
        errorTextarea(txtArea, 'Campo de preenchimento obrigatório')
        console.log('no')
    } else {
        let txtAreaOk = txtArea.parentElement

        txtAreaOk.className = 'formDados_textArea'
        console.log('yah')
    }
}
//função para mostrar o erro no campo de texto
function errorTextarea(textarea, mensagem) {
    let txtareaExibirErro = textarea.parentElement
    let msgExibirErro = txtareaExibirErro.querySelector('small')

    txtareaExibirErro.className = 'formDados_textArea error'
    msgExibirErro.innerText = mensagem
}


/* verificar e validar o email */
function validarEmail() {
    let emailvalue = email.value.trim()

    if (emailvalue === '') {
        errorEmail(email, 'Campo de preenchimento obrigatório')
        console.log('no')
    } else {
        let emailOk = email.parentElement

        emailOk.className = 'form_dados'
        console.log('yah')
    }
}
// função para mostrar erro no campo do email
function errorEmail(input, mensagem) {
    let inputExibirErro = input.parentElement
    let msgExibirErro = inputExibirErro.querySelector('small')

    inputExibirErro.className = 'form_dados error'
    msgExibirErro.innerText = mensagem
}


/* verificar e validar o nome */
function validarNome() {
    let nomevalue = nome.value.trim()

    if (nomevalue === '') {
        errorNome(nome, 'Campo de preenchimento obrigatório')
        console.log('no')
    } else {
        let nomeOk = nome.parentElement
        
        nomeOk.className = 'form_dados'
        console.log('yah')
    }
}

function errorNome(input, mensagem) {
    let inputExibirErro = input.parentElement
    let msgExibirErro = inputExibirErro.querySelector('small')

    inputExibirErro.className = 'form_dados error'
    msgExibirErro.innerText = mensagem
}

/* verificar validar e enviar o formulario */
function validarEnviarForm() {
    validarNome()
    validarEmail()
    validarCampotexto()

    /* campo de texto */
    let valEnvCampotexto = form.querySelectorAll('.formDados_textArea')

    let valEnvCampotexto2 = [...valEnvCampotexto].every((evt)=>{
        return evt.className === ('formDados_textArea')
    })
    if (valEnvCampotexto2) {
        console.log('Enviado com sucesso!')
    }


    /* email */
    let valEnvEmail = form.querySelectorAll('.form_dados')

    let valEnvEmail2 = [...valEnvEmail].every((evt)=>{
        return evt.className === ('form_dados')
    })
    if (valEnvEmail2) {
        console.log('Enviado com sucesso!')
    }


    /* nome */
    let valEnvForm = form.querySelectorAll('.form_dados')

    let valEnvForm2 = [...valEnvForm].every((evt)=>{
        return evt.className === ('form_dados')
    })

    if (valEnvForm2) {
        console.log('Enviado com sucesso!')
    }
}