'use strict';

// ++++++++++++++++++++++++++++++++++++
// FORM STUFF
// ++++++++++++++++++++++++++++++++++++

var orderForm = document.getElementById('form');

orderForm.addEventListener('submit', handleOrderForm);

function handleOrderForm(e){
  console.log('Order submitted!')
  e.preventDefault();
  var order = {
    product: e.target.product.value,
    quantity: e.target.quantity.value,
    name: e.target.name.value,
    street: e.target.street.value,
    city: e.target.city.value,
    state: e.target.state.value,
    zip: e.target.zip.value,
    phone: e.target.phone.value,
    email: e.target.email.value,
    creditCard: e.target.cc.value
  }
  localStorage.order = JSON.stringify(order);
  console.log(order);
}
