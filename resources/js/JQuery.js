$(document).ready(function () {
  history.scrollRestoration = "manual";

  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });
  
  
   $(".call").click(function () {
    $(".contact-us-mobile").hide(200);
    $(".call-us").show(200);
  });
  $(".call-1").click(function () {
    $(".call-us").hide(200);
    $(".contact-us-mobile").show(200);
  });

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

  // ---------------Animations--------------

  $(".js-an-1").waypoint(
    function () {
      $(".js-an-1").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js-an-2").waypoint(
    function () {
      $(".js-an-2").addClass("animate__animated animate__slideInRight");
    },
    {
      offset: "85%",
    }
  );
  $(".js-an-3").waypoint(
    function () {
      $(".js-an-3").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js-an-4").waypoint(
    function () {
      $(".js-an-4").addClass("animate__animated animate__slideInRight");
    },
    {
      offset: "50%",
    }
  );

});
