document.addEventListener("DOMContentLoaded", function () {
  let view = document.querySelector(".carrosel__view");
  margem = 0;

  document.getElementById("left").onclick = function () {
    if (margem > 0) {
      margem--;
      view.style.marginLeft = `-${margem * 100}vw`;
    }
  };

  document.getElementById("right").onclick = function () {
    if (margem < 2) {
      margem++;
      view.style.marginLeft = `-${margem * 100}vw`;
    }
  };

  let theme = 0;

  document.getElementById("icon__theme").onclick = function () {
    if (theme == 0) {
      theme = 1;
      document.getElementById("icon__theme").src = "img/sol.png";
      document.body.style.backgroundColor = "#E8ECF0";
      document.getElementById("slide").src = "img/Slide2.png";
      document.getElementById("sec_sobre").style.backgroundColor = "#F5F5F7";
      document.getElementById("sec_sobre_h1").style.color = "black";
      document.getElementById("sec_solucoes").style.backgroundColor = "#F5F5F7";
      document.getElementById("solucoes__h1").style.color = "black";
      document.getElementById("sec_contato").style.backgroundColor = "#F5F5F7";
      document.getElementById("contato_h1").style.color = "black";
      document.getElementById("footer").style.backgroundColor = "#F5F5F7";
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
      document.body.style.backgroundColor = "#1F1F1F";
      document.getElementById("slide").src = "img/Slide1.png";
      document.getElementById("sec_sobre").style.backgroundColor = "#2E3030";
      document.getElementById("sec_sobre_h1").style.color = "white";
      document.getElementById("sec_solucoes").style.backgroundColor = "#2E3030";
      document.getElementById("solucoes__h1").style.color = "white";
      document.getElementById("sec_contato").style.backgroundColor = "#2E3030";
      document.getElementById("contato_h1").style.color = "white";
      document.getElementById("footer").style.backgroundColor = "#2E3030";
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
