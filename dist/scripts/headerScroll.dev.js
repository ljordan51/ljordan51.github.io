"use strict";

$(document).scroll(function () {
  if ($(document).scrollTop() > 5) {
    $("#navbar").addClass("scrolled");
  } else {
    if (!$("#navbarsExampleDefault").hasClass("show")) {
      $("#navbar").removeClass("scrolled");
    }
  }
});
$("#hamburglar").click(function () {
  if (!$("#navbarsExampleDefault").hasClass("show")) {
    $("#navbar").addClass("scrolled");
  } else {
    if ($(document).scrollTop() < 5) {
      $("#navbar").removeClass("scrolled");
    }
  }
});