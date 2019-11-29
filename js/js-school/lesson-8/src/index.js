import * as model from './models/index.js';
import components from './components';
import '../styles.css'
import "@babel/polyfill";

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
  model.getOrdersList((err, orders) => {
    const orderListHTML = components.getOrdersListHtml({ orders });

    rootElement.innerHTML = orderListHTML;
  });
}

async function renderUserData(rootElement) {
  model.getUserData((err, user) => {
    const userDataHTML = components.getUserDataHtml(user);
  
    rootElement.innerHTML = userDataHTML;
  });
}
// -----------------

