var icon = document.getElementById("dark-mode");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/Projects/Inkmaster Websitre/resources/css/images/sun-2.png";
  } else {
    icon.src = "/Projects/Inkmaster Websitre/resources/css/images/moon-2.png";
  }
};
