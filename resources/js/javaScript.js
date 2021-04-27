var icon = document.getElementById("dark-mode");

var icon_mobile = document.getElementById("dark-mode-mobile");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "resources/css/images/moon-2.png";
  icon_mobile.src = "resources/css/images/moon-2.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "resources/css/images/sun-2.png";
  icon_mobile.src = "resources/css/images/sun-2.png";
  document.body.classList.add("dark-theme");
}

var funClick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "resources/css/images/sun-2.png";
    icon_mobile.src = "resources/css/images/sun-2.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "resources/css/images/moon-2.png";
    icon_mobile.src = "resources/css/images/moon-2.png";
    localStorage.setItem("theme", "light");
  }
};

icon.onclick = funClick;
icon_mobile.onclick = funClick;
