


/// --- ORDERS MARKUP ---

// render whole orders list
export default function getOrdersListHtml(orders) {
  return orders.map(renderOrderTable).join("\n");
}

// render single order as a table
function renderOrderTable(order) {
  const tableBody = renderTableBody(order);
  return `<table class="demo-content--full demo-content--separated mdl-data-table mdl-shadow--2dp mdl-color--white">
    ${TABLE_HEAD}
    ${tableBody}
  </table>`;
}

// table HEAD as constant
const TABLE_HEAD = `<thead>
  <tr>
    <th class="mdl-data-table__cell--non-numeric">Name</th>
    <th class="mdl-data-table__cell--non-numeric">Params</th>
    <th>Quantity</th>
    <th>Unit price</th>
    <th>Total price</th>
  </tr>
</thead>`;

// table body
function renderTableBody(order) {
  const itemsHTML = order.items.map(renderItemRow).join('');
  return `<tbody>${itemsHTML}</tbody>`;
}

// render single item row within table
function renderItemRow(item) {
  const {
    name, params, quantity, price,
  } = item;
  const total = price * quantity;

  return `<tr>
    <td class="mdl-data-table__cell--non-numeric"> ${name}</td>
    <td class="mdl-data-table__cell--non-numeric">${params}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${total}</td>
  </tr>`;
}
// -----------------