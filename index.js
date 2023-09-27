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
    let nav = document.getElementsByTagName("navbar")[0];
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-black");
    let table = document.getElementsByTagName("table")[0];
    table.setAttribute("class", "table text-light");
    document.getElementById("controle-dark-mode").innerText = "Disable";
    isDarkMode = true;
    return;
  } else {
    let body = document.getElementsByTagName("body")[0];
    body.removeAttribute("class");
    let nav = document.getElementsByTagName("nav")[0];
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-primary");
    let table = document.getElementsByTagName("table")[0];
    table.setAttribute("class", "table");
    document.getElementById("controle-dark-mode").innerText = "Active";
    isDarkMode = false;
  }
}

async function getApiGitHub() {
  await fetch("https://github.com/LilianeDavid93")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const avatarUrl = data.avatar_url;

      // const avatarImage = document.createElement("img");
      // avatarImage.src = avatarUrl;
      // avatarImage.style.width = "80px";
      // avatarImage.style.height = "80px";
      // avatarImage.style.borderRadius = "50%";
      // avatarImage.style.boxShadow = "0px 4px 20px black";
      // document.getElementById("liliane-avatar").appendChild(avatarImage);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getApiGitHub();
