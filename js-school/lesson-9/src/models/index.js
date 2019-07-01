import request from 'browser-request'
import axios from 'axios'

// import axios from 'axios'

const ORIGIN = '/api'
// --- MODELS ---

async function getItem(id) {
  const { data } = await axios.get(`${ORIGIN}/item/${id}`);
  return data;
}

export async function getOrdersList(callback) {
  // callbacks
  // request({ url: `${ORIGIN}/cart`, json:true }, (err, res, body) => {
  //   callback(err, body);
  // })

  // promises
  // return axios.get(`${ORIGIN}/cart`).then(({ data }) => data);

  // async/await
  const { data: orders } = await axios.get(`${ORIGIN}/cart/list`);
  const itemIds = orders.map(order => order.items).flat().reduce((arr, item) => {
    if (!arr.includes(item.id)) arr.push(item.id);
    return arr;
  }, [])

  
  const itemDataMap = {};

  await Promise.all(itemIds.map(async id => {
    itemDataMap[id] = (await getItem(id)).item;
  }));

  orders.forEach(order => order.items.forEach(item => Object.assign(item, itemDataMap[item.id])));
  
  return orders;
}

export async function getUserData(callback) {
  // callbacks
  // request({ url: `${ORIGIN}/me`, json:true }, (err, res, body) => {
  //   callback(err, body);
  // })

  // promises
  // return axios.get(`${ORIGIN}/me`).then(({ data }) => data);

  // async/await
  const { data } = await axios.get(`${ORIGIN}/me`);
  return data;
}
// -----------------