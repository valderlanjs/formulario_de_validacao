// Selecionando formulário e elementos de entrada
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
// FUNÇÃO PARA EXIBIR MENSAGEM DE ERROR

const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Função para lidar com o envio do formulário

const handleFormData = (e) => {
  e.preventDefault();

  // Recuperando elementos de entrada

  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const genderInput = document.getElementById("gender");

  // Obtendo valores aparados de campos de entrada

  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const date = dateInput.value;
  const gender = genderInput.value;

  // Padrão de expressão regular para validação de e-mail

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //LINPANDO AS MENSAGENS DE ERROS ANTERIORES
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // Executando verificações de validação

  if (fullname === "") {
    showError(fullnameInput, "Escreva seu nome completo");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Entre com seu endereço de Email");
  }
  if (password === "") {
    showError(passwordInput, "Entre com sua Senha");
  }
  if (date === "") {
    showError(dateInput, "Selecione a sua data de nascimento");
  }
  if (gender === "") {
    showError(genderInput, "Selecione seu gênero");
  }

  // Verificando quaisquer erros remanescentes antes do envio do formulário

  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // ENVIANDO FORMULÁRIO
  form.submit();
};
// ALTERNANDO A VISIBILIDADE DA SENHA
passToggleBtn.addEventListener("click", () => {
  passToggleBtn.className =
    passwordInput.type === "password"
      ? "fa-solid fa-eye-slash"
      : "fa-solid fa-eye";
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Tratamento do evento de envio de formulário
form.addEventListener("submit", handleFormData);
