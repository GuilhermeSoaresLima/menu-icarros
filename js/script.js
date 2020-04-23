// SCRIPT JQUERY PARA VALIDACAO DE MUDANCA DE CLASSES DINAMICAS

$(document).ready(function () {
  // TROCAR TOCAR DO HEADER
  $(".header-color--blue").click(function () {
    $(".header").addClass("header-color--active");
    $(".login-button").addClass("color--dark-blue");
  });
  $(".header-color--transparent").click(function () {
    $(".header").removeClass("header-color--active");
    $(".login-button").removeClass("color--dark-blue");
  });
});

// HABILITAR ANIMACAO DE MENU HAMBURGUER - VERSAO MOBILE

$(document).ready(function () {
  let toggle = $(".menu-icon").hasClass("--active");

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
