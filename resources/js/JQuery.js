$(document).ready(function () {
  $(".js-class-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    {
      offset: "12%",
    }
  );

  $(".nav-icon").click(function () {
    var nav = $(".transparent");
    var hide = $(".tagline");

    $(".logo-mobile").addClass("mobile-logo");

    nav.slideToggle(300);
    hide.slideToggle(200);
    $(".transparent1").removeClass("hide-nav");
    $(".tag").addClass("tagline");
  });
  $(".transparent").click(function () {
    $(".tag").removeClass("tagline");
    $(".transparent").addClass("hide-nav");
    $(".check-icon-1").addClass("nav-icon-0");
    $(".check-icon-1").removeClass("nav-icon-1");
    $(".check-icon-0").addClass("nav-icon-1");
  });
});
