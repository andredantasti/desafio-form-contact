// const btnEnviar = document.getElementById("btn-submit");
// console.log(btnEnviar);

// const email = document.getElementById("email");
// console.log(email);

// const nome = document.getElementById("name");
// console.log(nome);
// const sobrenome = document.getElementById("lsat-name");
// const areaDeTexto = document.getElementById("message-text");

// const form = document.querySelector("form");
// console.log(form);
// const input = document.querySelectorAll(".campos");
// console.log(input);
// const email = document.querySelectorAll(".email");
// console.log(email);

// let isValidForm = false;


// function validadeInput() {
//   input.forEach((input, index) => {
//     if ((!input.value) && (!email.value)){
//       input.nextElementSibling.classList.remove("error-hidden");
//       input.classList.add("invalid");
//       isValidForm = true;
//     } else {
//       tirarErro();
//     }
//   });
// }

// function tirarErro() {
//   input.forEach((input, index) => {
//     input.addEventListener("input", () => {
//       if (input.value !== "") {
//         input.classList.remove("invalid");
//         input.nextElementSibling.classList.add("error-hidden");
//       } else {
//         input.nextElementSibling.classList.remove("error");
//         input.classList.add("invalid");
//       }
//     });
//   });
// }





// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validadeInput()
  
// })

const form = document.querySelector("form");
const inputs = document.querySelectorAll(".campos");
const email = document.querySelector(".email");
const radioError = document.querySelector('.div-tipo + .error');
const consent = document.getElementById("consent");
const consentError = document.getElementById("consent-error"); // Pega o <p> correto

// Remover erros enquanto o usuário digita/marca
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.remove("invalid");
      input.nextElementSibling.classList.add("error-hidden");
    }
  });
});

email.addEventListener("input", () => {
  if (email.value.trim() !== "") {
    email.classList.remove("invalid");
    email.nextElementSibling.classList.add("error-hidden");
  }
});

consent.addEventListener("change", () => {
  if (consent.checked) {
    consentError.classList.add("error-hidden");
  }
});

const radioButtons = document.querySelectorAll('input[name="opcao"]');

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioError.classList.add("error-hidden");
  });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValidForm = true;

  // Valida campos de texto
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("invalid");
      input.nextElementSibling.classList.remove("error-hidden");
      isValidForm = false;
    }
  });

  // Valida email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "" || !emailRegex.test(email.value)) {
    email.classList.add("invalid");
    email.nextElementSibling.classList.remove("error-hidden");
    isValidForm = false;
  }

  // Valida radio
  const radioChecked = document.querySelector('input[name="opcao"]:checked');
  if (!radioChecked) {
    radioError.classList.remove("error-hidden");
    isValidForm = false;
  } else {
    radioError.classList.add("error-hidden");
  }

  // ✅ Valida checkbox
  if (!consent.checked) {
    consentError.classList.remove("error-hidden");
    isValidForm = false;
  } else {
    consentError.classList.add("error-hidden");
  }

 if (isValidForm) {
  const successMessage = document.getElementById("success-message");
  successMessage.classList.add("show");

  // Esconder após 5 segundos (opcional)
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);

  // form.submit(); // Descomente para envio real
}
});