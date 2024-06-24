// SELECIONAR O ELEMENTO PROGRESS-BAR
const progressBar = document.querySelector(".progress-bar")

// VAI CALCULAR QUANTOS PIXEL TEM DE OVERFLOW NA PÁGINA
const maxScrollHeight = document.body.scrollHeight - window.innerHeight

// ADICIONAR UM EVENT LISTENER PARA DISPARAR UMA AÇÃO TODA VEZ QUE O SCROLL FOR ACIONADO
window.addEventListener('scroll', ()=> {

    // VAI OBTER A POSIÇÃO DA BARRA DE ROLAGEM EM PORCENTAGEM
    const scrollPositionPercent = Math.ceil((window.scrollY / maxScrollHeight ) * 100)

    // VAI ADICIONAR A CADA ROLAGEM, A PORCENTAGEM NA PROPRIEDADE WIDTH DO ELEMENTO PROGRESS BAR

    progressBar.style.width = `${scrollPositionPercent}%`;
})