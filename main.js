'use strict';
const productList = document.querySelector('#product__list');

const products = [
  {
    name: '농구공',
    price: 100000,
    seller: '조던',
    imageUrl : '/images/products/basketball1.jpeg'
  },
  {
    name: '축구공',
    price: 50000,
    seller: '메시',
    imageUrl : '/images/products/soccerball1.jpg'
  },
  {
    name: '키보드',
    price: 10000,
    seller: '갱민',
    imageUrl : '/images/products/keyboard1.jpg'
  },
];

let productsHtml = '';
for(let i = 0; i < products.length; i++){
let product = products[i];

productsHtml +=       
  `<li class="product__card">
    <div class="product__img">
      <img src="${product.imageUrl}" alt="${product.name}"/>
    </div>
    <div class="product__contents">
      <span class="product__name">${product.name}</span>
      <span class="product__price">${product.price}원</span>
      <div class="product__seller">
        <img class="seller__avatar" src="/images/icons/avatar.png" alt="아바타이미지"/>
        <span class="seller__name">${product.seller}</span>
      </div>
    </div>
  </li>`
};

productList.innerHTML = productsHtml;



