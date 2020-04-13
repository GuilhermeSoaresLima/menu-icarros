$(document).ready(function() {
  $(".blue-header").click(function() {
    $(".header").addClass("header-color--active");
  });
  $(".transparent-header").click(function() {
    $(".header").removeClass("header-color--active");
  });
});
