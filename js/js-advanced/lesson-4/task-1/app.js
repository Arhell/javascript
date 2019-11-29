function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

var add10 = makeAdder(10);

console.log(add10(25))