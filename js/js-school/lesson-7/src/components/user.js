
/// --- USER DATA MARKUP ---
export default function getUserDataHtml(userData) {
  const { name, phone, mail, address } = userData;
  return `<ul class="demo-user-block mdl-list mdl-shadow--2dp mdl-color--white">
  <li class="mdl-list__item demo-user-block__name mdl-color--primary">
    <span class="mdl-list__item-primary-content mdl-typography--headline mdl-color-text--white">${name}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${mail}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${phone}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${address}</span>
  </li>
</ul>`
}
// -----------------