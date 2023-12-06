let menu = document.querySelector('.menu')
let menuButton = document.querySelector('.toggle')
let bullean = false

menuButton.addEventListener('click', () => {
    if(!bullean){
        menu.style.right = '0%'
    } else {
        menu.style.right = '-100%'
    }
    bullean = !bullean
})