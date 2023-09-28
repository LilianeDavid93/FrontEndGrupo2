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

let isDarkMode = false;

function setDarkMode() {
  if (!isDarkMode) {
    let body = document.getElementsByTagName("body")[0];
    body.setAttribute("class", "bg-dark text-light");
    let nav = document.getElementsByTagName("nav")[0];
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-black");
    document.getElementById("controle-dark-mode").innerText = "Disable";
    isDarkMode = true;
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
    isDarkMode = false;
  }
}

function leituraEscrita() {
  alert("Clicou no Disket");
}

function salvaDados() {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const nomeHelper = document.querySelector(".nomeHelper");

  if (nome.value === "" || passwd.value === "") {
    console.log("Preencha todos os campos");
    nomeHelper.style.display = "block";
    return;
  } else {
    const user = {
      email: nome.value,
      nome: nome.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    nomeHelper.style.display = "none";
    nome.value = "";
    passwd.value = "";
  }

  console.log("Nome: ", passwd.value);
  console.log("Email: ", email.value);
}
