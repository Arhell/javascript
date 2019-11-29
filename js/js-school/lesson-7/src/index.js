import * as model from './models/index.js';
import components from './components';
// --- APP ---
window.addEventListener('load', loadApp);

function loadApp() {
  // render orders list
  const ordersRootElement = document.getElementById('order-list');
  renderOrderList(ordersRootElement);

  // render user's data
  const userDataRootElement = document.getElementById('user-data');
  renderUserData(userDataRootElement);
}

function renderOrderList(rootElement) {
  const orders = model.getOrdersList();
  const orderListHTML = components.getOrdersListHtml(orders);

  rootElement.innerHTML = orderListHTML;
}

function renderUserData(rootElement) {
  const user = model.getUserData();
  const userDataHTML = components.getUserDataHtml(user);

  rootElement.innerHTML = userDataHTML;
}
// -----------------

