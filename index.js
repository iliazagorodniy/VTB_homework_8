let input_container_elem = document.querySelector("form");

let name_input_elem = document.getElementById("name-input");
let email_input_elem = document.getElementById("email-input");
let pass_input_elem = document.getElementById("pass-input");
let repeatPass_input_elem = document.getElementById("repeat-pass-input");

input_container_elem.addEventListener("input", function () {
    let target = event.target;
    if (target.tagName === "INPUT") {
        let regExp;
        let error;
        switch (target.id) {
            case 'name-input':
                error = "Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов";
                regExp = /^[a-zA-Zа-яА-Я0-9_]{5,10}$/;
                validateInput(name_input_elem, regExp, error);
                break;
            case 'email-input':
                error = "e-mail должен иметь вид example@domen.ru";
                regExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
                validateInput(email_input_elem, regExp, error);
                break;
            case 'pass-input':
                error = "минимум 10 символов, обязательна одна цифра и одна буква капсом";
                regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
                validateInput(pass_input_elem, regExp, error);
                break;
            case 'repeat-pass-input':
                if (repeatPass_input_elem.value === "") {
                    repeatPass_input_elem.parentElement.parentElement.classList.remove("error");
                    repeatPass_input_elem.parentElement.parentElement.classList.remove("valid");
                } else if (repeatPass_input_elem.value !== pass_input_elem.value) {
                    repeatPass_input_elem.parentElement.parentElement.classList.add("error");
                    repeatPass_input_elem.parentElement.parentElement.classList.remove("valid");
                } else {
                    repeatPass_input_elem.parentElement.parentElement.classList.remove("error");
                    repeatPass_input_elem.parentElement.parentElement.classList.add("valid");
                }
                break;
        }
    }

});

function validateInput(input_elem, regExp, error) {
    if (input_elem.value === "") {
        input_elem.parentElement.parentElement.classList.remove("error");
        input_elem.parentElement.parentElement.classList.remove("valid");
        removeValidationError(input_elem);
    } else if (input_elem.value.match(regExp) === null) {
        input_elem.parentElement.parentElement.classList.add("error");
        input_elem.parentElement.parentElement.classList.remove("valid");
        throwValidationError(input_elem, error);
    } else {
        input_elem.parentElement.parentElement.classList.remove("error");
        input_elem.parentElement.parentElement.classList.add("valid");
        removeValidationError(input_elem);
    }
}

function throwValidationError(input_elem, error) {
    let flag = document.querySelector(".ui.error.message");
    if (flag !== null) {
        return 0;
    } else {
        let error_elem = document.createElement('div');
        error_elem.classList.add("ui");
        error_elem.classList.add("error");
        error_elem.classList.add("message");
        error_elem.innerHTML = `
            <div class="header">Validation Error!</div>
            <p>${error}</p>
        `;
        input_elem.parentElement.parentElement.appendChild(error_elem);
    }
}

function removeValidationError(input_elem) {
    let error_elem = input_elem.parentElement.parentElement.querySelector(".ui.error.message");
    error_elem.remove();
}


