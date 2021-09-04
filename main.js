'use strict';
const productList = document.querySelector('#product__list');

const promiseObj = axios.get('https://316eeb27-2347-438e-aaf5-0e104e18aea5.mock.pstmn.io/products');

promiseObj.then(function(response){
  const products = response.data.products;
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
  }).catch(function(error){
  console.error(error);
});






