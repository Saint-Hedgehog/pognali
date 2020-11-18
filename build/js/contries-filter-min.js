"use strict";var filter=document.querySelector(".countries-filter"),filterElements={toggle:filter.querySelector(".countries-filter__toggle"),parts:filter.querySelector(".countries-filter__list"),partsList:filter.querySelectorAll(".countries-filter__link"),alphabet:filter.querySelector(".countries-filter__alphabet"),letters:filter.querySelector(".countries-filter__letter"),rollUpButton:filter.querySelector(".countries-filter__button")},getDevice=function(){return window.matchMedia("(max-width: 767px)").matches?"mobile":window.matchMedia("(min-width: 1440px)").matches?"desktop":"tablet"},openFilter=function(){filterElements.toggle.classList.add("countries-filter__toggle--active"),filterElements.toggle.textContent="Свернуть",filterElements.parts.classList.add("countries-filter__list--active"),filterElements.alphabet.classList.add("countries-filter__alphabet--active"),filterElements.rollUpButton.classList.add("countries-filter__button--active")},closeFilter=function(){filterElements.toggle.classList.remove("countries-filter__toggle--active"),filterElements.toggle.textContent="Показать все",filterElements.parts.classList.remove("countries-filter__list--active"),filterElements.alphabet.classList.remove("countries-filter__alphabet--active"),filterElements.rollUpButton.classList.remove("countries-filter__button--active")},initFilter=function(){filter.classList.remove("countries-filter--no-js"),document.querySelector(".main__catalog-wrapper").classList.remove("main__catalog-wrapper--no-js"),filterElements.toggle.classList.remove("countries-filter__toggle--no-js"),closeFilter()};filterElements.toggle.addEventListener("click",function(e){e.preventDefault(),filterElements.toggle.classList.contains("countries-filter__toggle--active")?closeFilter():openFilter()}),filterElements.rollUpButton.addEventListener("click",function(e){e.preventDefault(),closeFilter()}),filterElements.partsList.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),filterElements.parts.querySelector(".countries-filter__link--active").classList.remove("countries-filter__link--active"),e.classList.add("countries-filter__link--active")})}),filterElements.alphabet.addEventListener("click",function(e){if(e.preventDefault(),e.stopPropagation(),e.target.classList.contains("countries-filter__letter")){var t=filterElements.alphabet.querySelector(".countries-filter__letter--active"),i=t.nextElementSibling,l=e.target,r=l.nextElementSibling;t.classList.remove("countries-filter__letter--active"),i.classList.remove("countries-filter__cities--scroll"),i.classList.remove("countries-filter__cities--active"),l.classList.add("countries-filter__letter--active"),r.children.length>11&&r.classList.add("countries-filter__cities--scroll"),r.classList.add("countries-filter__cities--active")}}),initFilter();