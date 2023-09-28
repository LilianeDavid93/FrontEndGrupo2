let navbar;
let sticky;

window.onscroll = function () {
  stickyEffect();
};

window.onload = function () {
  navbar = document.getElementById("navbar");
  sticky = navbar.offsetTop;
};

function stickyEffect() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


window.onload = function () {
  if (!('FirstLoad' in localStorage)) {
    localStorage.setItem("FirstLoad", true);
    localStorage.setItem("isDarkMode", false);
  }

  console.log(localStorage.getItem("isDarkMode"))
  confirmDarkMode()
}

// gambiarra
function confirmDarkMode() {
  if ('isDarkMode' in localStorage) {
    if (localStorage.getItem("isDarkMode") == "true") {
      let body = document.getElementsByTagName("body")[0];
      body.setAttribute("class", "bg-dark text-light");
      let nav = document.getElementsByTagName("nav")[0];
      nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-black");
      document.getElementById("controle-dark-mode").innerText = "Disable";
      //localStorage.setItem("isDarkMode", true);
      return;
    } else {
      console.log("else");
      let body = document.getElementsByTagName("body")[0];
      body.removeAttribute("class");
      let nav = document.getElementsByTagName("nav")[0];
      nav.setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-dark bg-primary-color"
      );
      document.getElementById("controle-dark-mode").innerText = "Active";
      //localStorage.setItem("isDarkMode", false);
    }
  }
}

function setDarkMode() {
  if ('isDarkMode' in localStorage) {
    if (localStorage.getItem("isDarkMode") == "false") {
      let body = document.getElementsByTagName("body")[0];
      body.setAttribute("class", "bg-dark text-light");
      let nav = document.getElementsByTagName("nav")[0];
      nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-black");
      document.getElementById("controle-dark-mode").innerText = "Disable";
      localStorage.setItem("isDarkMode", true);
      return;
    } else {
      console.log("else");
      let body = document.getElementsByTagName("body")[0];
      body.removeAttribute("class");
      let nav = document.getElementsByTagName("nav")[0];
      nav.setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-dark bg-primary-color"
      );
      document.getElementById("controle-dark-mode").innerText = "Active";
      localStorage.setItem("isDarkMode", false);
    }
  }
}

document.getElementById("meuFormulario");
function submit(event) {
  event.preventDefault(); // Evita o envio padrão do formulário.

  // Obtenha os valores dos campos.
  let nome = document.getElementById("nome").value;
  console.log(document.getElementById("nome").value);
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  // Verifique se algum campo está vazio.
  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return; // Encerre a função se houver campos vazios.
  }

  // Armazene os dados no localStorage.
  let dados = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };
  console.log(dados);
  localStorage.setItem("dadosFormulario", JSON.stringify(dados));

  // Resetar os campos do formulário.
  document.getElementById("meuFormulario").reset();
}
