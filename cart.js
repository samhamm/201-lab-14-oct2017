'use strict';

// ++++++++++++++++++++++++++++++++++++
// CART STUFF
// ++++++++++++++++++++++++++++++++++++

var theOrder = JSON.parse(localStorage.order);
var orderInfo = document.getElementById('ordered-product');
var customerInfo = document.getElementById('customer-info');

function makeElement(type, content, parent){
  var el = document.createElement(type);
  el.textContent = content;
  parent.appendChild(el);
}

function populateCart(){
  var pic = document.createElement('img');
  pic.src = 'img/' + theOrder.product + '.jpg';
  orderInfo.appendChild(pic);

  makeElement('p', 'Product: ' + theOrder.product, orderInfo);
  makeElement('p', 'Quantity: ' + theOrder.quantity, orderInfo);
  makeElement('p', 'Name: ' + theOrder.name, customerInfo);
  makeElement('p', 'Address: ' + theOrder.street, customerInfo);
  makeElement('p', 'City: ' + theOrder.city, customerInfo);
  makeElement('p', 'State: ' + theOrder.state, customerInfo);
  makeElement('p', 'ZIP: ' + theOrder.zip, customerInfo);
  makeElement('p', 'Phone Number: ' + theOrder.phone, customerInfo);
  makeElement('p', 'Email Address: ' + theOrder.email, customerInfo);
  makeElement('p', 'Credit Card Number: ' + theOrder.creditCard, customerInfo);
}

populateCart();
