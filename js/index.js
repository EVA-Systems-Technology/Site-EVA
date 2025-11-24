document.addEventListener("DOMContentLoaded", function () {
  let view = document.querySelector(".carrosel__view");
  margem = 0;

  document.getElementById("left").onclick = function () {
    if (margem > 0) {
      margem--;
      view.style.marginLeft = `-${margem * 85}vw`;
    }
  };

  document.getElementById("right").onclick = function () {
    if (margem < 2) {
      margem++;
      view.style.marginLeft = `-${margem * 85}vw`;
    }
  };

 const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
  
  let theme = 1

  document.getElementById("icon__theme").onclick = function () {
    if (theme == 0) {
      theme = 1;
      document.getElementById("icon__theme").src = "img/sol.png";
      document.body.style.backgroundColor = "#D3EBF1";
      document.getElementsByClassName("container__geral")[0].style.background = "linear-gradient(to right, #b0c4c9 0%, #ffffff00 25%, #ffffff00 75%,  #b0c4c9 100% )";
      document.getElementById("sec_sobre_h1").style.color = "black";
      document.getElementById("solucoes__h1").style.color = "black";
      document.getElementById("contato_h1").style.color = "black";
      document.getElementById("sec_sobre").style.color = "black";
      document.getElementById("h2__sobre").style.color = "black";
      document.getElementById("img_sobre").src = "img/LOGO EVA - 2 1.png"
      document.getElementById("sec_diferencial").style.color = "black";
      document.getElementById("sec_contato").style.color = "black";
      document
        .querySelectorAll(".footer_h1, .footer_h2, .footer_h3")
        .forEach((h1) => {
          h1.style.color = "black";
        });
      img = document.querySelectorAll(".img__footer");
      img[0].src = "img/linkedin-dark.png";
      img[1].src = "img/facebook-dark.png";
      img[2].src = "img/instagram-dark.png";
      img[3].src = "img/whatsapp-dark.png";
    } else {
      theme = 0;
      document.getElementById("icon__theme").src = "img/lua.png";
      document.body.style.backgroundColor = "#000000fb";
      document.getElementsByClassName("container__geral")[0].style.background = "linear-gradient(to right, #1e959934  0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.8) 60%, #1e959934 100%)";
      document.getElementById("sec_sobre_h1").style.color = "white";
      document.getElementById("solucoes__h1").style.color = "white";
      document.getElementById("contato_h1").style.color = "white";
      document.getElementById("sec_sobre").style.color = "white";
      document.getElementById("h2__sobre").style.color = "white";
      document.getElementById("img_sobre").src = "img/LOGO EVA.png"
      document.getElementById("sec_diferencial").style.color = "white";
      document.getElementById("sec_solucoes").style.color = "white";
      document.getElementById("sec_contato").style.color = "white";
      document
        .querySelectorAll(".footer_h1, .footer_h2, .footer_h3")
        .forEach((h1) => {
          h1.style.color = "white";
        });
      img = document.querySelectorAll(".img__footer");
      img[0].src = "img/linkedin.png";
      img[1].src = "img/facebook.png";
      img[2].src = "img/instagram.png";
      img[3].src = "img/whatsapp.png";
    }
  };
});
