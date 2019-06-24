

// --- MODELS ---
export function getOrdersList() {
  return [
    {
      items: [
        { name: 'IPhone X', params: 'silver, 64Gb', quantity: 10, price: 999 },
        { name: 'Macbook Pro', params: '13", 8Gb RAM, 128Gb SSD', quantity: 1, price: 1299 },
      ]
    },
    {
      items: [
        { name: 'Samsung Galaxy S10+', params: 'midnight black, 64Gb', quantity: 2, price: 1199 },
        { name: 'Samsung Galaxy Note 9', params: 'saphire blue, 128Gb', quantity: 4, price: 899 },
      ]
    }
  ]
}

export function getUserData() {
  return { 
    name: "John Doe",
    mail: "johnsemail@gmail.com",
    phone: "+380123456789",
    address: "Some address",
  }
}
// -----------------