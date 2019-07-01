import * as model from './models/index.js';
// import components from './components';
import "@babel/polyfill";

// --- APP ---
window.addEventListener('load', loadApp);

function loadApp() {
  // render orders list
  const ordersRootElement = document.getElementById('order-list');
  renderOrderList(ordersRootElement);
}

async function renderOrderList(rootElement) {
  const [{ default: components }, orders] = await Promise.all([
    import(/* webpackChunkName: "components" */ './components'),
    model.getOrdersList(),
  ]);
  const orderListHTML = components.getOrdersListHtml({ orders });

  rootElement.innerHTML = orderListHTML;
}