const input = document.querySelectorAll(".input");
const icone = document.querySelectorAll(".icone");
const mensagem = document.querySelectorAll(".mensagem");
const botao = document.querySelector("#botao");

botao.addEventListener('click', (e) => {
    e.preventDefault();

    validarFormulario();

    const emailInput = document.querySelector(".input.email")
    const emailIcone = document.querySelector(".icone.email");
    const emailmensagem = document.querySelector(".mensagem.email");
    const emailValue = emailInput.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    validarEmail(emailValue, regex, emailInput, emailIcone, emailmensagem);
});

function validarFormulario() {
    input.forEach((input, index) => {
        const inputValue = input.value;

        if (inputValue == "") {
            input.classList.add("erro");
            icone[index].classList.add("erro");
            mensagem[index].classList.add("erro");
        } else {
            input.classList.remove("erro");
            icone[index].classList.remove("erro");
            mensagem[index].classList.remove("erro");
        }
    });
}

function validarEmail(emailValue, regex, emailInput, emailIcone, emailmensagem) {
    if (!emailValue == "" && !regex.test(emailValue)) {
        emailInput.classList.add("email-erro");
        emailInput.classList.add("erro");
        emailIcone.classList.add("erro");
        emailmensagem.innerHTML = "<i>Looks like this is not an email</i>";
        emailmensagem.classList.add("erro");
    } else if (emailValue == "") {
        emailmensagem.innerHTML = "<i>Email cannot by empty</i>";
    } else {
        emailInput.classList.remove("email-erro");
    }
}



