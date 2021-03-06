"use strict";

var toggles = document.querySelectorAll(".filter__toggle");

var getCategory = function (toggle) {
  return toggle.parentNode.querySelector(".filter__category");
}

toggles.forEach(function (toggle) {
  toggle.classList.remove("filter__toggle--active");
  getCategory(toggle).classList.remove("filter__category--active");

  toggle.addEventListener("click", function (evt) {
    toggle.classList.toggle("filter__toggle--active");
    getCategory(toggle).classList.toggle("filter__category--active");
  })
})
