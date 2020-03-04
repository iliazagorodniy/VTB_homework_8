let input_container_elem = document.querySelector("form");

let name_input = document.getElementById("name-input");
let email_input = document.getElementById("email-input");
let pass_input = document.getElementById("pass-input");
let repeat_pass_input = document.getElementById("repeat-pass-input");

input_container_elem.addEventListener("input", function () {
    let target = event.target;
    let name_input_value = name_input.value;
    let email_input_value = email_input.value;
    let pass_input_value = pass_input.value;
    let repeat_pass_input_value = repeat_pass_input.value;
    if (target.tagName === "INPUT") ;
    {
        let regExp;
        switch (target.id) {
            case 'name-input':
                regExp = /^[a-zA-Zа-яА-Я0-9_]{5,10}$/;
                if (name_input_value.match(regExp) === null) {
                    name_input.parentElement.parentElement.classList.add("error");
                    name_input.parentElement.parentElement.classList.remove("valid");

                } else {
                    name_input.parentElement.parentElement.classList.remove("error")
                    name_input.parentElement.parentElement.classList.add("valid");
                }
                if (name_input_value == null) {
                }
                console.log(name_input_value.match(regExp));
                break;
            case 'email-input':
                regExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
                console.log('email');
                console.log(email_input_value.match(regExp));
                break;
            case 'pass-input':
                regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
                console.log('pass');
                console.log(pass_input_value.match(regExp));
                break;
            case 'repeat-pass-input':
                console.log('repeat pass');
                console.log(repeat_pass_input_value === pass_input_value);
                break;
        }
    }

});


