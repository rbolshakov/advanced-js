"use strict";
let brandDark = document.querySelector(".brand-dark");
let burgerButton = document.querySelector(".header-right__burgerButton");
let menuClose = document.querySelector(".brand-dark__menu-close");

function toggleMenu() {
  brandDark.classList.toggle("hidden");
}

burgerButton.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

// const goods = [
//   { title: "Shirt", price: 150 },
//   { title: "Socks", price: 50 },
//   { title: "Jacket", price: 350 },
//   { title: "Shoes", price: 250 },
// ];

// const $goodsList = document.querySelector(".goods-list");

// const renderGoodsItem = ({ title, price }) => {
//   return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//   let goodsList = list.map((item) => renderGoodsItem(item)).join("\n");

//   $goodsList.insertAdjacentHTML("beforeend", goodsList);
// };

// renderGoodsList();
