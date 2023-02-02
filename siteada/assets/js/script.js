document.getElementById("botao-enviar").addEventListener("click", validaformulario)

function validaformulario() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
        alert("prontinho! você recebera as novidades por email.")
    }else {
        alert("Por favor, preencha os campos nome, email e telefone!")
}
}

