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

    if (window.scrollY > 500) {
        apar.style.opacity = '1'
    } else {
        apar.style.opacity = '0'
    }
    
})





/* MODAL */
const btnFecharModal = document.getElementById('btnFecharModal')
const abrirModal = document.getElementById('abrirModal')
const fundoModal = document.querySelector('.fundoModal')
const modal = document.querySelector('.modal')

const btnFecharModal2 = document.getElementById('btnFecharModal2')
const abrirModal2 = document.getElementById('abrirModal2')
const fundoModal2 = document.querySelector('.fundoModal2')
const modal2 = document.querySelector('.modal2')


abrirModal.addEventListener('click', ()=>{
    toggleModal()
})
btnFecharModal.addEventListener('click',()=>{
    toggleModal()
})

const toggleModal = ()=>{
    fundoModal.classList.toggle('fecharModal')
    modal.classList.toggle('fecharModal')
}
abrirModal2.addEventListener('click', ()=>{
    fundoModal2.classList.toggle('fecharModal2')
    modal2.classList.toggle('fecharModal2')
})
btnFecharModal2.addEventListener('click', ()=>{
    fundoModal2.classList.toggle('fecharModal2')
    modal2.classList.toggle('fecharModal2')
})