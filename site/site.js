const form = document.getElementById("form");
const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirmar");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (senha.value !== confirmar.value) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
});
