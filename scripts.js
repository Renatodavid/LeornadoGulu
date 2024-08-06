const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const mensagem =document.querySelector("botao")



function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-60%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-400px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}