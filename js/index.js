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
});
