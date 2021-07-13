"use strict";
let filterPopup = document.querySelector(".filters-left__popup");
let filterLabel = document.querySelector(".filters-left__text");
let filterIcon = document.querySelector(".filters-left__img");

filterLabel.addEventListener("click", function () {
  filterPopup.classList.toggle("filters-left__popup-hidden");
  filterLabel.classList.toggle("filters-left__text-pink");
  filterIcon.classList.toggle("filters-left__img-pink");

  if (filterIcon.getAttribute("src") === "img/filter.svg") {
    filterIcon.setAttribute("src", "img/filter-orange.svg");
  } else {
    filterIcon.setAttribute("src", "img/filter.svg");
  }
});

let filterHeaders = document.querySelectorAll(".filter-left__category-title");
filterHeaders.forEach(function (header) {
  header.addEventListener("click", function (event) {
    event.target.nextElementSibling.classList.toggle("hidden");
  });
});

let filterSizes = document.querySelector(".filter-right__sizes");
let filterSizeWrap = document.querySelector(".filters-right__size-wrap");
filterSizeWrap.addEventListener("click", function () {
  filterSizes.classList.toggle("hidden");
});
