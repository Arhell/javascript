var pizza = {
  toppings: ['meet'],
  bortik: true,
  size: '36',
  makePizza: function () {
    return this.size + " " +(this.bortik == true) + " " + [this.toppings];
  },
  packPizza: function () {
    return this.size
  }
}

alert(pizza.makePizza())
alert(pizza.packPizza())