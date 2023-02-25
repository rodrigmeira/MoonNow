const signUp = () => {
  const inputName = document.getElementsByClassName("inputname")[0];
  const inputEmail = document.getElementsByClassName("inputemail")[0];
  if (inputName.value === "" || inputEmail.value === "") {
    alert("Não foi possível efetivar seu cadastro.");
  } else {
    alert("Cadastro efetuado com sucesso");
  }
};
