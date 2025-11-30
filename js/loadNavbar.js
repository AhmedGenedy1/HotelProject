fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  });
