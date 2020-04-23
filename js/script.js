$(document).ready(function () {
  $(".blue-header").click(function () {
    $(".header").addClass("header-color--active");
  });
  $(".transparent-header").click(function () {
    $(".header").removeClass("header-color--active");
  });
});

$(document).ready(function () {
  let toggle = $(".menu-icon").hasClass("active");

  if (toggle) {
    $(".--active").click(function () {
      $(".first-line").removeClass("first-animation--active");
      $(".second-line").removeClass("second-animation--active");
      $(".third-line").removeClass("third-animation--active");
    });
  } else {
    $(".menu-icon").click(function () {
      $(".menu-icon").addClass("--active");
      $(".first-line").addClass("first-animation--active");
      $(".second-line").addClass("second-animation--active");
      $(".third-line").addClass("third-animation--active");
    });
  }
});
