import request from 'browser-request'

// import axios from 'axios'

const ORIGIN = 'https://pdffiller-js-school.brutgroot.com'
// --- MODELS ---
export function getOrdersList(callback) {
  request({ url: `${ORIGIN}/cart`, json:true }, (err, res, body) => {
    callback(err, body);
  })
  // const { data } = await axios.get(`${ORIGIN}/cart`);
  // return data;
}

export function getUserData(callback) {

  request({ url: `${ORIGIN}/me`, json:true }, (err, res, body) => {
    callback(err, body);
  })

  // const { data } = await axios.get(`${ORIGIN}/me`);
  // return data;
}
// -----------------