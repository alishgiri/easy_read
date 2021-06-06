document.querySelectorAll("li").forEach(function (li, index) {
  li.addEventListener("click", function (e) {
    if (li.style.backgroundColor !== "") {
      li.style.backgroundColor = "";
    } else {
      function getRand() {
        return Math.floor(Math.random() * 256);
      }
      const r = getRand();
      const g = getRand();
      const b = getRand();
      li.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ", 0.4)";
    }
  });
});

document.querySelectorAll("p").forEach(function (p, index) {
  p.addEventListener("click", function (e) {
    if (p.style.border === "") {
      p.style.padding = "10px";
      p.style.borderRadius = "20px";
      p.style.border = "2px solid #32a852";
    } else {
      p.style.border = "";
      p.style.padding = "0px";
      p.style.borderRadius = "0px";
    }
  });
});
