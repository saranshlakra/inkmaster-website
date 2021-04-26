var icon = document.getElementById("dark-mode");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun-2.png";
  } else {
    icon.src = "moon-2.png";
  }
};
