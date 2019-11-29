import * as model from './models/index.js';
// import components from './components';
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

async function renderOrderList(rootElement) {
  const [{ default: components }, orders] = await Promise.all([
    import(/* webpackChunkName: "components" */ './components'),
    model.getOrdersList(),
  ]);
  const orderListHTML = components.getOrdersListHtml({ orders });

  rootElement.innerHTML = orderListHTML;
}

async function renderUserData(rootElement) {
  const [{ default: components }, user] = await Promise.all([
    import(/* webpackChunkName: "components" */ './components'),
    model.getUserData(),
  ]);

  const userDataHTML = components.getUserDataHtml(user);

  rootElement.innerHTML = userDataHTML;
}
// -----------------

