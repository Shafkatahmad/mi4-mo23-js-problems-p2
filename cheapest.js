const mobiles = [
  {name: 'Samsung', price: 20000, camera: '12mp', color: 'balck'},
  {name: 'Xoami', price: 18000, camera: '12mp', color: 'balck'},
  {name: 'Oppo', price: 30000, camera: '12mp', color: 'balck'},
  {name: 'Iphone', price: 100000, camera: '12mp', color: 'balck'},
  {name: 'Walton', price: 31000, camera: '12mp', color: 'balck'},
  {name: 'HTC', price: 27000, camera: '12mp', color: 'balck'},
]


function getCheapestObject(phones) {
  let min = phones[0];
  for(const phone of phones) {
    if( phone.price < min.price ) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestObject(mobiles);
console.log('cheapest phone is: ', cheap);

// highest priced phone
function getHighestObject(phones) {
  let max = phones[0];
  for(const phone of phones) {
    if( phone.price > max.price ) {
      max = phone;
    }
  }
  return max;
}